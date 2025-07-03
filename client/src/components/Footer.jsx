import React from 'react';

// Footer Component: Displays copyright and design information
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-12">
      <p>&copy; {new Date().getFullYear()} Computer Engineering LMS. All rights reserved.</p>
      <p className="text-sm mt-2">Designed for Sharda Informatics</p>
    </footer>
  );
};

export default Footer;
