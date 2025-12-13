const express = require('express');
const router = express.Router();
const emailService = require('../utils/emailService');

/**
 * GET /api/emails/accounts
 * Get list of configured email accounts
 */
router.get('/accounts', (req, res) => {
    try {
        const accounts = emailService.getAccounts();
        res.json({ success: true, accounts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/folders
 * Get folder list for an account
 */
router.get('/:accountId/folders', async (req, res) => {
    try {
        const { accountId } = req.params;
        const folders = await emailService.getFolders(accountId);
        res.json({ success: true, folders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/inbox
 * Fetch inbox emails
 */
router.get('/:accountId/inbox', async (req, res) => {
    try {
        const { accountId } = req.params;
        const { limit = 50 } = req.query;
        const emails = await emailService.fetchEmails(accountId, 'inbox', parseInt(limit));
        res.json({ success: true, emails, count: emails.length });
    } catch (error) {
        console.error('Fetch inbox error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/sent
 * Fetch sent emails
 */
router.get('/:accountId/sent', async (req, res) => {
    try {
        const { accountId } = req.params;
        const { limit = 50 } = req.query;
        const emails = await emailService.fetchEmails(accountId, 'sent', parseInt(limit));
        res.json({ success: true, emails, count: emails.length });
    } catch (error) {
        console.error('Fetch sent error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/drafts
 * Fetch draft emails
 */
router.get('/:accountId/drafts', async (req, res) => {
    try {
        const { accountId } = req.params;
        const { limit = 50 } = req.query;
        const emails = await emailService.fetchEmails(accountId, 'drafts', parseInt(limit));
        res.json({ success: true, emails, count: emails.length });
    } catch (error) {
        console.error('Fetch drafts error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/trash
 * Fetch trash/deleted emails
 */
router.get('/:accountId/trash', async (req, res) => {
    try {
        const { accountId } = req.params;
        const { limit = 50 } = req.query;
        const emails = await emailService.fetchEmails(accountId, 'deleteditems', parseInt(limit));
        res.json({ success: true, emails, count: emails.length });
    } catch (error) {
        console.error('Fetch trash error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/emails/:accountId/message/:messageId
 * Fetch single email by messageId (Graph API ID is a string, not int)
 */
router.get('/:accountId/message/:messageId', async (req, res) => {
    try {
        const { accountId, messageId } = req.params;
        const { folder = 'inbox' } = req.query;
        // messageId is a string for Graph API, don't parseInt
        const email = await emailService.fetchEmailByUid(accountId, messageId, folder);
        res.json({ success: true, email });
    } catch (error) {
        console.error('Fetch email error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * POST /api/emails/:accountId/send
 * Send an email
 */
router.post('/:accountId/send', async (req, res) => {
    try {
        const { accountId } = req.params;
        const { to, cc, bcc, subject, text, html } = req.body;

        if (!to || !subject) {
            return res.status(400).json({ 
                success: false, 
                error: 'Recipient (to) and subject are required' 
            });
        }

        const result = await emailService.sendEmail(accountId, {
            to,
            cc,
            bcc,
            subject,
            text,
            html
        });

        res.json({ success: true, messageId: result.messageId });
    } catch (error) {
        console.error('Send email error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * DELETE /api/emails/:accountId/message/:messageId
 * Delete an email
 */
router.delete('/:accountId/message/:messageId', async (req, res) => {
    try {
        const { accountId, messageId } = req.params;
        const { folder = 'inbox' } = req.query;
        // messageId is a string for Graph API
        await emailService.deleteEmail(accountId, messageId, folder);
        res.json({ success: true });
    } catch (error) {
        console.error('Delete email error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
