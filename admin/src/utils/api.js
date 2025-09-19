const DEFAULT_API_BASE = "https://api.centuryfinancelimited.com";

const normalize = (value) => {
  if (!value) return "";
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

export const getApiBaseUrl = () => {
  const envBase = normalize(process.env.REACT_APP_API_BASE_URL || process.env.REACT_API_BASE_URL);
  if (envBase) return envBase;

  const defaultBase = normalize(DEFAULT_API_BASE);
  if (defaultBase) return defaultBase;

  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:5000";
    }
    const portSegment = port ? `:${port}` : "";
    return `${protocol}//${hostname}${portSegment}`;
  }

  return defaultBase;
};

export const buildApiUrl = (path = "") => {
  const base = getApiBaseUrl();
  const normalizedBase = normalize(base || "");
  if (!path) return normalizedBase;
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!normalizedBase) return normalizedPath;
  return `${normalizedBase}${normalizedPath}`;
};
