import React from 'react';

// CourseCard Component: Displays individual course details
const CourseCard = ({ title, instructor, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">Instructor: {instructor}</p>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
