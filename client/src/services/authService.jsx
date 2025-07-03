// client/src/services/authService.js

// Replace with your actual backend API URL from .env
// You'll configure this later when setting up your .env file
// Example: const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const API_URL = 'http://localhost:5000/api/auth'; // Placeholder for now

const authService = {
  // Simulate login API call
  login: async (email, password) => {
    // In a real app, you'd use fetch or Axios here:
    /*
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return response.json(); // Returns { user, token }
    */

    // --- Mock implementation for frontend development ---
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          resolve({
            user: { id: 'testUser1', name: 'Test User', email: 'test@example.com', role: 'student' },
            token: 'mock-jwt-token-123',
          });
        } else {
          reject({ message: 'Invalid credentials' });
        }
      }, 500); // Simulate network delay
    });
  },

  // Simulate registration API call
  register: async (name, email, password) => {
    // In a real app, you'd use fetch or Axios here:
    /*
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return response.json(); // Returns { user, token }
    */

    // --- Mock implementation for frontend development ---
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes('@') && password.length >= 6) { // Simple mock validation
          resolve({
            user: { id: 'newUser' + Date.now(), name, email, role: 'student' },
            token: 'mock-jwt-token-' + Date.now(),
          });
        } else {
          reject({ message: 'Invalid registration data' });
        }
      }, 500); // Simulate network delay
    });
  },

  // Function to get the JWT token from local storage
  getToken: () => {
    return localStorage.getItem('lms_token');
  },

  // Function to set the JWT token in local storage
  setToken: (token) => {
    localStorage.setItem('lms_token', token);
  },

  // Function to remove the JWT token from local storage
  removeToken: () => {
    localStorage.removeItem('lms_token');
  },
};

export default authService;