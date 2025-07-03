import React from 'react';
// import {ProfilePage} from "./ProfilePage";
// import {CoursesPage} from "./CoursesPage";
// import {SettingsPage} from "./SettingsPage";

// DashboardPage Component: Displays the user's dashboard content
const DashboardPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Your Dashboard!</h2>
      <p className="text-gray-600">This is where you'll see your enrolled courses, upcoming assignments, and recent activity.</p>
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-medium text-gray-700 mb-3">Quick Links</h3>
        <ul className="list-disc list-inside text-blue-800">
          {/* These links will be handled by the parent App component's state management */}
          <li><a href="#" onClick={() => { /* Placeholder for navigation */ }} className="hover:underline">Browse Courses</a></li>
          <li><a href="#" onClick={() => { /* Placeholder for navigation */ }} className="hover:underline">Edit Profile</a></li>
          <li><a href="#" onClick={() => { /* Placeholder for navigation */ }} className="hover:underline">Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
