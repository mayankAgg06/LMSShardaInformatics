import React from 'react';
import {CourseCard} from '../components'; // Import the reusable CourseCard component

// CoursesPage Component: Displays a list of available courses
const CoursesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Courses</h2>
      <p className="text-gray-600">Explore a wide range of computer engineering courses.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Course Cards, using the CourseCard component */}
        <CourseCard title="Data Structures & Algorithms" instructor="Dr. Smith" description="Master fundamental algorithms and data structures." />
        <CourseCard title="Object-Oriented Programming" instructor="Prof. Johnson" description="Learn OOP concepts with Java/Python." />
        <CourseCard title="Database Management Systems" instructor="Ms. Lee" description="Understand relational and NoSQL databases." />
        <CourseCard title="Web Development with MERN" instructor="Mr. Davis" description="Build full-stack applications using MERN." />
      </div>
    </div>
  );
};

export default CoursesPage;
