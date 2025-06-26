import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem('wedding_portfolio_auth');
    if (storedAuth) {
      setUser(JSON.parse(storedAuth));
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    // Simple authentication - in production, use proper backend authentication
    if (username === 'admin' && password === 'photography2024') {
      const userData = { username, isAuthenticated: true };
      setUser(userData);
      localStorage.setItem('wedding_portfolio_auth', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('wedding_portfolio_auth');
  };

  return { user, login, logout, loading };
};