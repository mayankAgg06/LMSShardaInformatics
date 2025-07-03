import React from 'react';

// SettingsPage Component: Allows users to configure application settings
const SettingsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="notifications" className="flex items-center">
            <input type="checkbox" id="notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
            <span className="ml-2 text-sm text-gray-700">Receive email notifications</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Theme</label>
          <select id="theme" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
          Update Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
