const Imap = require('imap');
const { simpleParser } = require('mailparser');
const nodemailer = require('nodemailer');

// Email accounts configuration
// In production, these should be stored securely in environment variables or database
const emailAccounts = {
    cfl: {
        id: 'cfl',
        name: 'CFL Admin',
        email: 'cfl@centuryfinancelimited.com',
        // Password will be loaded from environment variable
        password: process.env.EMAIL_CFL_PASSWORD || '',
        imap: {
            host: 'outlook.office365.com',
            port: 993,
            tls: true,
            authTimeout: 30000
        },
        smtp: {
            host: 'smtp.office365.com',
            port: 587,
            secure: false
        }
    },
    ceo: {
        id: 'ceo',
        name: 'CEO',
        email: 'ceo@centuryfinancelimited.com',
        password: process.env.EMAIL_CEO_PASSWORD || '',
        imap: {
            host: 'outlook.office365.com',
            port: 993,
            tls: true,
            authTimeout: 30000
        },
        smtp: {
            host: 'smtp.office365.com',
            port: 587,
            secure: false
        }
    },
    hrishant: {
        id: 'hrishant',
        name: 'Hrishant',
        email: 'hrishant@centuryfinancelimited.com',
        password: process.env.EMAIL_HRISHANT_PASSWORD || '',
        imap: {
            host: 'outlook.office365.com',
            port: 993,
            tls: true,
            authTimeout: 30000
        },
        smtp: {
            host: 'smtp.office365.com',
            port: 587,
            secure: false
        }
    },
    hr: {
        id: 'hr',
        name: 'HR Department',
        email: 'hr@centuryfinancelimited.com',
        password: process.env.EMAIL_HR_PASSWORD || '',
        imap: {
            host: 'outlook.office365.com',
            port: 993,
            tls: true,
            authTimeout: 30000
        },
        smtp: {
            host: 'smtp.office365.com',
            port: 587,
            secure: false
        }
    },
    deepak: {
        id: 'deepak',
        name: 'Deepak Kumar',
        email: 'deepak.kumar@centuryfinancelimited.com',
        password: process.env.EMAIL_DEEPAK_PASSWORD || '',
        imap: {
            host: 'outlook.office365.com',
            port: 993,
            tls: true,
            authTimeout: 30000
        },
        smtp: {
            host: 'smtp.office365.com',
            port: 587,
            secure: false
        }
    }
};

/**
 * Get list of configured email accounts (without passwords)
 */
function getAccounts() {
    return Object.values(emailAccounts).map(account => ({
        id: account.id,
        name: account.name,
        email: account.email,
        configured: !!account.password
    }));
}

/**
 * Fetch emails from a specific folder using IMAP
 * @param {string} accountId - Account identifier
 * @param {string} folder - Folder name (INBOX, Sent, etc.)
 * @param {number} limit - Number of emails to fetch
 * @returns {Promise<Array>} - Array of email objects
 */
function fetchEmails(accountId, folder = 'INBOX', limit = 50) {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account) {
            return reject(new Error('Account not found'));
        }
        if (!account.password) {
            return reject(new Error('Account password not configured'));
        }

        const imap = new Imap({
            user: account.email,
            password: account.password,
            host: account.imap.host,
            port: account.imap.port,
            tls: account.imap.tls,
            authTimeout: account.imap.authTimeout,
            tlsOptions: { rejectUnauthorized: false }
        });

        const emails = [];

        imap.once('ready', () => {
            // Map common folder names to M365 folder names
            let imapFolder = folder;
            if (folder === 'Sent') {
                imapFolder = 'Sent Items';
            } else if (folder === 'Drafts') {
                imapFolder = 'Drafts';
            } else if (folder === 'Trash') {
                imapFolder = 'Deleted Items';
            }

            imap.openBox(imapFolder, true, (err, box) => {
                if (err) {
                    imap.end();
                    return reject(err);
                }

                const total = box.messages.total;
                if (total === 0) {
                    imap.end();
                    return resolve([]);
                }

                // Fetch the last 'limit' messages
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
                                    emailData.fromAddress = parsed.from && parsed.from.value && parsed.from.value[0] 
                                        ? parsed.from.value[0].address : '';
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
                                .catch(err => {
                                    console.error('Parse error:', err);
                                });
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
                    imap.end();
                    reject(err);
                });

                fetch.once('end', () => {
                    imap.end();
                    // Sort by date descending (newest first)
                    emails.sort((a, b) => new Date(b.date) - new Date(a.date));
                    resolve(emails);
                });
            });
        });

        imap.once('error', (err) => {
            reject(err);
        });

        imap.connect();
    });
}

/**
 * Fetch a single email by UID
 * @param {string} accountId - Account identifier
 * @param {number} uid - Email UID
 * @param {string} folder - Folder name
 * @returns {Promise<Object>} - Email object with full content
 */
function fetchEmailByUid(accountId, uid, folder = 'INBOX') {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account) {
            return reject(new Error('Account not found'));
        }
        if (!account.password) {
            return reject(new Error('Account password not configured'));
        }

        const imap = new Imap({
            user: account.email,
            password: account.password,
            host: account.imap.host,
            port: account.imap.port,
            tls: account.imap.tls,
            authTimeout: account.imap.authTimeout,
            tlsOptions: { rejectUnauthorized: false }
        });

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
                                        fromAddress: parsed.from && parsed.from.value && parsed.from.value[0] 
                                            ? parsed.from.value[0].address : '',
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
 * Send an email using SMTP
 * @param {string} accountId - Account identifier
 * @param {Object} emailData - Email data { to, cc, bcc, subject, text, html }
 * @returns {Promise<Object>} - Send result
 */
async function sendEmail(accountId, emailData) {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }
    if (!account.password) {
        throw new Error('Account password not configured');
    }

    const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.email,
            pass: account.password
        },
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `${account.name} <${account.email}>`,
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
 * @param {string} accountId - Account identifier
 * @param {number} uid - Email UID
 * @param {string} folder - Folder name
 * @returns {Promise<boolean>}
 */
function deleteEmail(accountId, uid, folder = 'INBOX') {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account || !account.password) {
            return reject(new Error('Account not configured'));
        }

        const imap = new Imap({
            user: account.email,
            password: account.password,
            host: account.imap.host,
            port: account.imap.port,
            tls: account.imap.tls,
            authTimeout: account.imap.authTimeout,
            tlsOptions: { rejectUnauthorized: false }
        });

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
 * Get folder list for an account
 */
function getFolders(accountId) {
    return new Promise((resolve, reject) => {
        const account = emailAccounts[accountId];
        if (!account || !account.password) {
            return reject(new Error('Account not configured'));
        }

        const imap = new Imap({
            user: account.email,
            password: account.password,
            host: account.imap.host,
            port: account.imap.port,
            tls: account.imap.tls,
            authTimeout: account.imap.authTimeout,
            tlsOptions: { rejectUnauthorized: false }
        });

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
