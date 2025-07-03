import React from 'react';
import {AssignmentItem} from '../components'; // Import the reusable AssignmentItem component

// AssignmentsPage Component: Displays a list of user's assignments
const AssignmentsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Assignments</h2>
      <p className="text-gray-600">Keep track of your pending and completed assignments.</p>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <ul className="divide-y divide-gray-200">
          {/* Example Assignment Items, using the AssignmentItem component */}
          <AssignmentItem title="Algorithm Analysis Project" dueDate="2025-06-15" status="Pending" />
          <AssignmentItem title="Database Design Exercise" dueDate="2025-05-28" status="Submitted" />
          <AssignmentItem title="React Component Challenge" dueDate="2025-06-01" status="Pending" />
        </ul>
      </div>
    </div>
  );
};

export default AssignmentsPage;
