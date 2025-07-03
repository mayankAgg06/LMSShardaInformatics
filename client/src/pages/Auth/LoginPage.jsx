// client/src/pages/Auth/LoginPage.js
import React, { useState } from 'react'; // Import useState
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const { login, isAuthenticated } = useAuth(); // Get login function and isAuthenticated state
  const navigate = useNavigate(); // Hook for navigation

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/dashboard');
    return null; // Don't render anything while redirecting
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password); // Use the login function from context

    if (result.success) {
      // Login successful, navigate to dashboard
      navigate('/dashboard');
    } else {
      // Login failed, show error message
      setError(result.message || 'Login failed. Please check your credentials.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email} // Controlled component
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="your@example.com"
              required // HTML5 validation
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password} // Controlled component
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;