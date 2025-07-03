// client/src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import shardaLogo from '../assets/shardaLogo.jpg'; // Import your logo here

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'text-blue-600' : '';
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo Image and Title */}
        <Link to="/dashboard" className="flex items-center">
          {/* Use your imported shardaLogo here */}
          <img src={shardaLogo} alt="Sharda University LMS Logo" className="h-8 w-auto mr-2" />
          <h1 className="text-2xl font-bold text-blue-800">LMS-Sharda Informatics</h1>
        </Link>
        {isAuthenticated && (
          <span className="ml-4 text-sm text-gray-500 hidden md:inline">
            Welcome, {user.name} ({user.role})
          </span>
        )}
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link to="/dashboard" className={`text-gray-700 hover:text-blue-800 font-medium ${getNavLinkClass('/dashboard')}`}>Dashboard</Link>
        <Link to="/courses" className={`text-gray-700 hover:text-blue-800 font-medium ${getNavLinkClass('/courses')}`}>Courses</Link>
        <Link to="/assignments" className={`text-gray-700 hover:text-blue-800 font-medium ${getNavLinkClass('/assignments')}`}>Assignments</Link>
        <Link to="/profile" className={`text-gray-700 hover:text-blue-800 font-medium ${getNavLinkClass('/profile')}`}>Profile</Link>
        <Link to="/settings" className={`text-gray-700 hover:text-blue-800 font-medium ${getNavLinkClass('/settings')}`}>Settings</Link>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
              Login
            </Link>
            <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
              Register
            </Link>
          </>
        )}
      </nav>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-2 z-10">
          <nav className="flex flex-col space-y-2 px-6">
            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-gray-700 hover:bg-gray-100 rounded-md ${getNavLinkClass('/dashboard')}`}>Dashboard</Link>
            <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-gray-700 hover:bg-gray-100 rounded-md ${getNavLinkClass('/courses')}`}>Courses</Link>
            <Link to="/assignments" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-gray-700 hover:bg-gray-100 rounded-md ${getNavLinkClass('/assignments')}`}>Assignments</Link>
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-gray-700 hover:bg-gray-100 rounded-md ${getNavLinkClass('/profile')}`}>Profile</Link>
            <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-gray-700 hover:bg-gray-100 rounded-md ${getNavLinkClass('/settings')}`}>Settings</Link>
            {isAuthenticated ? (
              <button
                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                className="block py-2 text-left text-red-500 hover:bg-gray-100 rounded-md"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">Login</Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">Register</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;