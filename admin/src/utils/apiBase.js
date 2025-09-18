const DEFAULT_API_BASE = "https://api.centuryfinancelimited.com";

export const getApiBaseUrl = () => process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE;
