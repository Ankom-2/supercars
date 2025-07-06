import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and get user info
      // For now, we'll just set a mock user
      const mockUser = {
        id: '1',
        email: 'admin@supercars.com',
        name: 'Admin User',
        role: 'admin' as const
      };
      setUser(mockUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login - replace with actual API call
      if (email === 'admin@supercars.com' && password === 'admin123') {
        const mockUser = {
          id: '1',
          email: 'admin@supercars.com',
          name: 'Admin User',
          role: 'admin' as const
        };
        setUser(mockUser);
        localStorage.setItem('token', 'mock-token');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Mock registration - replace with actual API call
      const mockUser = {
        id: '2',
        email,
        name,
        role: 'user' as const
      };
      setUser(mockUser);
      localStorage.setItem('token', 'mock-token');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
