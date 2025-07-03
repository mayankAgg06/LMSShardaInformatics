// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService'; // Import authService

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // Check for an existing token and try to validate it
      const storedToken = authService.getToken();
      const storedUser = localStorage.getItem('lms_user');

      if (storedToken && storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          // In a real app, you'd verify the token with your backend here
          // For now, we'll assume a stored token/user means authenticated
          setUser(parsedUser);
        } catch (error) {
          console.error("Failed to parse stored user or token invalid:", error);
          authService.removeToken();
          localStorage.removeItem('lms_user');
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await authService.login(email, password); // Use authService
      authService.setToken(response.token); // Store token
      localStorage.setItem('lms_user', JSON.stringify(response.user)); // Store user data
      setUser(response.user);
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error.message);
      return { success: false, message: error.message || 'Login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      const response = await authService.register(name, email, password); // Use authService
      authService.setToken(response.token); // Store token (often login happens immediately after register)
      localStorage.setItem('lms_user', JSON.stringify(response.user));
      setUser(response.user);
      return { success: true };
    } catch (error) {
      console.error('Registration failed:', error.message);
      return { success: false, message: error.message || 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    authService.removeToken(); // Remove token using service
    localStorage.removeItem('lms_user'); // Remove user data
  };

  const authContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};