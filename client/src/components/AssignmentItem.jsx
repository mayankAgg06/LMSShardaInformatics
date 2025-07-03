import React from 'react';

// AssignmentItem Component: Displays individual assignment details
const AssignmentItem = ({ title, dueDate, status }) => {
  return (
    <li className="py-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">Due: {dueDate}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
        {status}
      </span>
    </li>
  );
};

export default AssignmentItem;
