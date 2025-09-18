// Microsoft Graph mail sender using client credentials (app-only) flow
// Requires env: GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_SENDER

const GRAPH_BASE = 'https://graph.microsoft.com/v1.0';

function haveGraphEnv() {
  const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_SENDER } = process.env;
  return Boolean(GRAPH_TENANT_ID && GRAPH_CLIENT_ID && GRAPH_CLIENT_SECRET && GRAPH_SENDER);
}

async function getGraphToken() {
  const tenant = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;
  const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

  const body = new URLSearchParams();
  body.append('client_id', clientId);
  body.append('client_secret', clientSecret);
  body.append('grant_type', 'client_credentials');
  body.append('scope', 'https://graph.microsoft.com/.default');

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Graph token error: ${res.status} ${text}`);
  }
  const json = await res.json();
  return json.access_token;
}

async function sendGraphEmail(to, subject, html) {
  if (!haveGraphEnv()) throw new Error('Graph not configured');
  const token = await getGraphToken();
  const sender = process.env.GRAPH_SENDER;
  const url = `${GRAPH_BASE}/users/${encodeURIComponent(sender)}/sendMail`;
  const message = {
    message: {
      subject,
      body: { contentType: 'HTML', content: html },
      toRecipients: [{ emailAddress: { address: to } }],
    },
    saveToSentItems: false,
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Graph sendMail error: ${res.status} ${text}`);
  }
  return true;
}

module.exports = { haveGraphEnv, sendGraphEmail };

