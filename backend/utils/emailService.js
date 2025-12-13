const Imap = require('imap');
const { simpleParser } = require('mailparser');
const nodemailer = require('nodemailer');

// CFL Admin credentials - used to access all mailboxes via delegation
const ADMIN_EMAIL = 'cfl@centuryfinancelimited.com';
const ADMIN_PASSWORD = process.env.EMAIL_CFL_PASSWORD || '';

// IMAP/SMTP configuration for Microsoft 365
const IMAP_CONFIG = {
    host: 'outlook.office365.com',
    port: 993,
    tls: true,
    authTimeout: 30000,
    tlsOptions: { 
        rejectUnauthorized: false,
        servername: 'outlook.office365.com'
    }
};

const SMTP_CONFIG = {
    host: 'smtp.office365.com',
    port: 587,
    secure: false
};

// All email accounts - CFL admin has Full Access delegation to all of these
const emailAccounts = {
    cfl: {
        id: 'cfl',
        name: 'CFL Admin',
        email: 'cfl@centuryfinancelimited.com',
        isAdmin: true
    },
    ceo: {
        id: 'ceo',
        name: 'CEO',
        email: 'ceo@centuryfinancelimited.com',
        isAdmin: false
    },
    hrishant: {
        id: 'hrishant',
        name: 'Hrishant Singh',
        email: 'hrishant@centuryfinancelimited.com',
        isAdmin: false
    },
    hr: {
        id: 'hr',
        name: 'HR Department',
        email: 'hr@centuryfinancelimited.com',
        isAdmin: false
    },
    deepak: {
        id: 'deepak',
        name: 'Deepak Kumar',
        email: 'deepak.kumar@centuryfinancelimited.com',
        isAdmin: false
    }
};

/**
 * Get list of email accounts
 */
function getAccounts() {
    const hasAdminPassword = !!ADMIN_PASSWORD;
    return Object.values(emailAccounts).map(account => ({
        id: account.id,
        name: account.name,
        email: account.email,
        configured: hasAdminPassword // All accounts work if admin password is set
    }));
}

/**
 * Create IMAP connection for a specific mailbox
 * Uses shared mailbox access format: admin_email\target_mailbox
 */
function createImapConnection(targetEmail) {
    // For shared mailbox access in M365, use format: admin@domain\shared@domain
    // Or just use the target email if it's the admin account
    let imapUser;
    
    if (targetEmail === ADMIN_EMAIL) {
        imapUser = ADMIN_EMAIL;
    } else {
        // Shared mailbox format for M365 IMAP
        // Format: admin_email\target_mailbox_email
        imapUser = `${ADMIN_EMAIL}\\${targetEmail}`;
    }
    
    console.log('Creating IMAP connection:');
    console.log('  Target mailbox:', targetEmail);
    console.log('  IMAP user:', imapUser);
    console.log('  Password configured:', ADMIN_PASSWORD ? 'Yes' : 'No');
    
    return new Imap({
        user: imapUser,
        password: ADMIN_PASSWORD,
        host: IMAP_CONFIG.host,
        port: IMAP_CONFIG.port,
        tls: IMAP_CONFIG.tls,
        authTimeout: IMAP_CONFIG.authTimeout,
        tlsOptions: IMAP_CONFIG.tlsOptions
    });
}

/**
 * Fetch emails from a specific folder using IMAP
 */
function fetchEmails(accountId, folder = 'INBOX', limit = 50) {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account) {
            return reject(new Error('Account not found'));
        }
        if (!ADMIN_PASSWORD) {
            return reject(new Error('Email password not configured. Add EMAIL_CFL_PASSWORD to .env file.'));
        }

        const imap = createImapConnection(account.email);
        const emails = [];

        imap.once('ready', () => {
            console.log('IMAP connected successfully for:', account.email);
            
            // Map folder names to M365 folder names
            let imapFolder = folder;
            if (folder === 'Sent' || folder === 'sent') {
                imapFolder = 'Sent Items';
            } else if (folder === 'Drafts' || folder === 'drafts') {
                imapFolder = 'Drafts';
            } else if (folder === 'Trash') {
                imapFolder = 'Deleted Items';
            } else if (folder === 'inbox') {
                imapFolder = 'INBOX';
            }

            console.log('Opening folder:', imapFolder);

            imap.openBox(imapFolder, true, (err, box) => {
                if (err) {
                    console.error('Error opening folder:', err.message);
                    imap.end();
                    return reject(err);
                }

                const total = box.messages.total;
                console.log('Total messages in folder:', total);
                
                if (total === 0) {
                    imap.end();
                    return resolve([]);
                }

                const start = Math.max(1, total - limit + 1);
                const fetchRange = `${start}:${total}`;

                const fetch = imap.seq.fetch(fetchRange, {
                    bodies: '',
                    struct: true
                });

                fetch.on('message', (msg, seqno) => {
                    let emailData = { seqno, uid: null };

                    msg.on('body', (stream) => {
                        let buffer = '';
                        stream.on('data', (chunk) => {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', () => {
                            simpleParser(buffer)
                                .then(parsed => {
                                    emailData.subject = parsed.subject || '(No Subject)';
                                    emailData.from = parsed.from ? parsed.from.text : 'Unknown';
                                    emailData.fromAddress = parsed.from?.value?.[0]?.address || '';
                                    emailData.to = parsed.to ? parsed.to.text : '';
                                    emailData.date = parsed.date;
                                    emailData.text = parsed.text || '';
                                    emailData.html = parsed.html || '';
                                    emailData.snippet = (parsed.text || '').substring(0, 150);
                                    emailData.attachments = (parsed.attachments || []).map(att => ({
                                        filename: att.filename,
                                        size: att.size,
                                        contentType: att.contentType
                                    }));
                                })
                                .catch(err => console.error('Parse error:', err));
                        });
                    });

                    msg.once('attributes', (attrs) => {
                        emailData.uid = attrs.uid;
                        emailData.flags = attrs.flags;
                        emailData.isRead = attrs.flags.includes('\\Seen');
                        emailData.isStarred = attrs.flags.includes('\\Flagged');
                    });

                    msg.once('end', () => {
                        emails.push(emailData);
                    });
                });

                fetch.once('error', (err) => {
                    console.error('Fetch error:', err);
                    imap.end();
                    reject(err);
                });

                fetch.once('end', () => {
                    imap.end();
                    emails.sort((a, b) => new Date(b.date) - new Date(a.date));
                    console.log('Fetched', emails.length, 'emails');
                    resolve(emails);
                });
            });
        });

        imap.once('error', (err) => {
            console.error('IMAP error for', account.email, ':', err.message);
            reject(err);
        });

        imap.connect();
    });
}

/**
 * Fetch a single email by UID
 */
function fetchEmailByUid(accountId, uid, folder = 'INBOX') {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account) {
            return reject(new Error('Account not found'));
        }
        if (!ADMIN_PASSWORD) {
            return reject(new Error('Email password not configured'));
        }

        const imap = createImapConnection(account.email);

        imap.once('ready', () => {
            let imapFolder = folder;
            if (folder === 'Sent') imapFolder = 'Sent Items';

            imap.openBox(imapFolder, false, (err) => {
                if (err) {
                    imap.end();
                    return reject(err);
                }

                const fetch = imap.fetch(uid, { bodies: '', markSeen: true });
                let emailData = null;

                fetch.on('message', (msg) => {
                    msg.on('body', (stream) => {
                        let buffer = '';
                        stream.on('data', (chunk) => {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', () => {
                            simpleParser(buffer)
                                .then(parsed => {
                                    emailData = {
                                        uid,
                                        subject: parsed.subject || '(No Subject)',
                                        from: parsed.from ? parsed.from.text : 'Unknown',
                                        fromAddress: parsed.from?.value?.[0]?.address || '',
                                        to: parsed.to ? parsed.to.text : '',
                                        cc: parsed.cc ? parsed.cc.text : '',
                                        date: parsed.date,
                                        text: parsed.text || '',
                                        html: parsed.html || '',
                                        attachments: (parsed.attachments || []).map(att => ({
                                            filename: att.filename,
                                            size: att.size,
                                            contentType: att.contentType
                                        }))
                                    };
                                })
                                .catch(err => reject(err));
                        });
                    });
                });

                fetch.once('end', () => {
                    imap.end();
                    resolve(emailData);
                });

                fetch.once('error', (err) => {
                    imap.end();
                    reject(err);
                });
            });
        });

        imap.once('error', reject);
        imap.connect();
    });
}

/**
 * Send an email using SMTP (sends as CFL Admin)
 */
async function sendEmail(accountId, emailData) {
    if (!ADMIN_PASSWORD) {
        throw new Error('Email password not configured');
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure: SMTP_CONFIG.secure,
        auth: {
            user: ADMIN_EMAIL,
            pass: ADMIN_PASSWORD
        },
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `CFL Admin <${ADMIN_EMAIL}>`,
        to: emailData.to,
        cc: emailData.cc || '',
        bcc: emailData.bcc || '',
        subject: emailData.subject,
        text: emailData.text || '',
        html: emailData.html || ''
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
}

/**
 * Delete an email
 */
function deleteEmail(accountId, uid, folder = 'INBOX') {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account || !ADMIN_PASSWORD) {
            return reject(new Error('Account not configured'));
        }

        const imap = createImapConnection(account.email);

        imap.once('ready', () => {
            let imapFolder = folder;
            if (folder === 'Sent') imapFolder = 'Sent Items';

            imap.openBox(imapFolder, false, (err) => {
                if (err) {
                    imap.end();
                    return reject(err);
                }

                imap.addFlags(uid, ['\\Deleted'], (err) => {
                    if (err) {
                        imap.end();
                        return reject(err);
                    }

                    imap.expunge((err) => {
                        imap.end();
                        if (err) return reject(err);
                        resolve(true);
                    });
                });
            });
        });

        imap.once('error', reject);
        imap.connect();
    });
}

/**
 * Get folder list
 */
function getFolders(accountId) {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account || !ADMIN_PASSWORD) {
            return reject(new Error('Account not configured'));
        }

        const imap = createImapConnection(account.email);

        imap.once('ready', () => {
            imap.getBoxes((err, boxes) => {
                imap.end();
                if (err) return reject(err);
                resolve(boxes);
            });
        });

        imap.once('error', reject);
        imap.connect();
    });
}

module.exports = {
    getAccounts,
    fetchEmails,
    fetchEmailByUid,
    sendEmail,
    deleteEmail,
    getFolders,
    emailAccounts
};
