// Simple in-memory rate limiter for OTP endpoints
// Not suitable for multi-instance deployments without shared storage.

const buckets = new Map();

function now() {
  return Date.now();
}

// key: string; windowMs: number; max: number; minIntervalMs: number
function checkAndRecord(key, { windowMs = 60_000, max = 3, minIntervalMs = 30_000 } = {}) {
  const t = now();
  const entry = buckets.get(key) || { times: [] };
  // drop old
  entry.times = entry.times.filter((ts) => t - ts <= windowMs);
  // enforce min interval
  if (entry.times.length > 0 && t - entry.times[entry.times.length - 1] < minIntervalMs) {
    return { allowed: false, reason: 'Too many requests. Please wait before trying again.' };
  }
  if (entry.times.length >= max) {
    return { allowed: false, reason: 'Rate limit exceeded. Try again later.' };
  }
  entry.times.push(t);
  buckets.set(key, entry);
  return { allowed: true };
}

module.exports = { checkAndRecord };

