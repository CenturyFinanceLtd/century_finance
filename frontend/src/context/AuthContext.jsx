import React, { createContext, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('auth');
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const login = (nextUser, nextToken) => {
    setUser(nextUser);
    setToken(nextToken);
    localStorage.setItem('auth', JSON.stringify({ user: nextUser, token: nextToken }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth');
  };

  const value = useMemo(() => ({ user, token, login, logout, setUser }), [user, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

