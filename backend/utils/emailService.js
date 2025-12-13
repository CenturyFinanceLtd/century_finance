const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

// Azure AD App credentials from environment variables
const TENANT_ID = process.env.AZURE_TENANT_ID || '';
const CLIENT_ID = process.env.AZURE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET || '';

// All email accounts to manage
const emailAccounts = {
    cfl: {
        id: 'cfl',
        name: 'CFL Admin',
        email: 'cfl@centuryfinancelimited.com'
    },
    ceo: {
        id: 'ceo',
        name: 'CEO',
        email: 'ceo@centuryfinancelimited.com'
    },
    hrishant: {
        id: 'hrishant',
        name: 'Hrishant Singh',
        email: 'hrishant@centuryfinancelimited.com'
    },
    hr: {
        id: 'hr',
        name: 'HR Department',
        email: 'hr@centuryfinancelimited.com'
    },
    deepak: {
        id: 'deepak',
        name: 'Deepak Kumar',
        email: 'deepak.kumar@centuryfinancelimited.com'
    }
};

/**
 * Get Microsoft Graph client
 */
function getGraphClient() {
    if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
        throw new Error('Azure credentials not configured. Set AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET in .env');
    }

    const credential = new ClientSecretCredential(TENANT_ID, CLIENT_ID, CLIENT_SECRET);
    
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ['https://graph.microsoft.com/.default']
    });

    return Client.initWithMiddleware({ authProvider });
}

/**
 * Get list of email accounts
 */
function getAccounts() {
    const isConfigured = !!(TENANT_ID && CLIENT_ID && CLIENT_SECRET);
    return Object.values(emailAccounts).map(account => ({
        id: account.id,
        name: account.name,
        email: account.email,
        configured: isConfigured
    }));
}

/**
 * Fetch emails from a mailbox using Microsoft Graph API
 */
async function fetchEmails(accountId, folder = 'inbox', limit = 50) {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }

    const client = getGraphClient();
    const userEmail = account.email;

    // Map folder names
    let graphFolder = folder;
    if (folder === 'sent') graphFolder = 'sentItems';
    if (folder === 'drafts') graphFolder = 'drafts';
    if (folder === 'inbox') graphFolder = 'inbox';

    console.log(`Fetching ${folder} for ${userEmail}`);

    try {
        const messages = await client
            .api(`/users/${userEmail}/mailFolders/${graphFolder}/messages`)
            .top(limit)
            .orderby('receivedDateTime desc')
            .select('id,subject,from,toRecipients,ccRecipients,receivedDateTime,isRead,bodyPreview,hasAttachments,flag')
            .get();

        const emails = messages.value.map(msg => ({
            uid: msg.id,
            subject: msg.subject || '(No Subject)',
            from: msg.from?.emailAddress?.name 
                ? `${msg.from.emailAddress.name} <${msg.from.emailAddress.address}>`
                : msg.from?.emailAddress?.address || 'Unknown',
            fromAddress: msg.from?.emailAddress?.address || '',
            to: msg.toRecipients?.map(r => r.emailAddress.address).join(', ') || '',
            date: msg.receivedDateTime,
            snippet: msg.bodyPreview || '',
            isRead: msg.isRead,
            isStarred: msg.flag?.flagStatus === 'flagged',
            hasAttachments: msg.hasAttachments
        }));

        console.log(`Fetched ${emails.length} emails from ${folder}`);
        return emails;
    } catch (error) {
        console.error('Graph API error:', error.message);
        throw error;
    }
}

/**
 * Fetch a single email by ID with full content
 */
async function fetchEmailByUid(accountId, messageId, folder = 'inbox') {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }

    const client = getGraphClient();
    const userEmail = account.email;

    try {
        const message = await client
            .api(`/users/${userEmail}/messages/${messageId}`)
            .select('id,subject,from,toRecipients,ccRecipients,receivedDateTime,body,hasAttachments,attachments')
            .expand('attachments')
            .get();

        // Mark as read
        await client
            .api(`/users/${userEmail}/messages/${messageId}`)
            .patch({ isRead: true });

        return {
            uid: message.id,
            subject: message.subject || '(No Subject)',
            from: message.from?.emailAddress?.name 
                ? `${message.from.emailAddress.name} <${message.from.emailAddress.address}>`
                : message.from?.emailAddress?.address || 'Unknown',
            fromAddress: message.from?.emailAddress?.address || '',
            to: message.toRecipients?.map(r => r.emailAddress.address).join(', ') || '',
            cc: message.ccRecipients?.map(r => r.emailAddress.address).join(', ') || '',
            date: message.receivedDateTime,
            text: message.body?.contentType === 'text' ? message.body.content : '',
            html: message.body?.contentType === 'html' ? message.body.content : message.body?.content || '',
            attachments: (message.attachments || []).map(att => ({
                filename: att.name,
                size: att.size,
                contentType: att.contentType
            }))
        };
    } catch (error) {
        console.error('Graph API error fetching email:', error.message);
        throw error;
    }
}

/**
 * Send an email using Microsoft Graph API
 */
async function sendEmail(accountId, emailData) {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }

    const client = getGraphClient();
    const userEmail = account.email;

    const message = {
        subject: emailData.subject,
        body: {
            contentType: emailData.html ? 'HTML' : 'Text',
            content: emailData.html || emailData.text || ''
        },
        toRecipients: emailData.to.split(',').map(email => ({
            emailAddress: { address: email.trim() }
        }))
    };

    if (emailData.cc) {
        message.ccRecipients = emailData.cc.split(',').map(email => ({
            emailAddress: { address: email.trim() }
        }));
    }

    try {
        await client
            .api(`/users/${userEmail}/sendMail`)
            .post({ message, saveToSentItems: true });

        console.log(`Email sent from ${userEmail}`);
        return { success: true, messageId: 'sent' };
    } catch (error) {
        console.error('Graph API error sending email:', error.message);
        throw error;
    }
}

/**
 * Delete an email
 */
async function deleteEmail(accountId, messageId, folder = 'inbox') {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }

    const client = getGraphClient();
    const userEmail = account.email;

    try {
        await client
            .api(`/users/${userEmail}/messages/${messageId}`)
            .delete();

        console.log(`Email deleted from ${userEmail}`);
        return true;
    } catch (error) {
        console.error('Graph API error deleting email:', error.message);
        throw error;
    }
}

/**
 * Get folders list
 */
async function getFolders(accountId) {
    const account = emailAccounts[accountId];
    if (!account) {
        throw new Error('Account not found');
    }

    const client = getGraphClient();
    const userEmail = account.email;

    try {
        const folders = await client
            .api(`/users/${userEmail}/mailFolders`)
            .get();

        return folders.value;
    } catch (error) {
        console.error('Graph API error getting folders:', error.message);
        throw error;
    }
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
