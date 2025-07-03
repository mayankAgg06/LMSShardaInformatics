import React from 'react';

// ProfilePage Component: Allows users to view and edit their profile information
const ProfilePage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Profile</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" defaultValue="John Doe" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" defaultValue="john.doe@university.edu" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="major" className="block text-sm font-medium text-gray-700">Major</label>
          <input type="text" id="major" defaultValue="Computer Engineering" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
