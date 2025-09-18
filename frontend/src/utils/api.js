const DEFAULT_API_BASE = 'https://api.centuryfinancelimited.com';

export const API_BASE = import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE;

export const apiFetch = async (path, { method = 'GET', body, token } = {}) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const retryAfter = parseInt(res.headers.get('retry-after') || '0', 10);
    const baseMsg = json.error || json.message || 'Request failed';
    const msg = res.status === 429
      ? (retryAfter ? `${baseMsg} Try again in ${retryAfter}s.` : baseMsg)
      : baseMsg;
    const err = new Error(msg);
    err.status = res.status;
    if (retryAfter) err.retryAfter = retryAfter;
    throw err;
  }
  return json;
};
