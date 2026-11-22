import React from 'react';

export default function PriorityFilter({ selectedPriority, onChangePriority }) {
  return (
    <div className="priority-filter-wrapper">
      <select
        value={selectedPriority}
        onChange={(e) => onChangePriority(e.target.value)}
        aria-label="Filter by priority level"
      >
        <option value="All">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
    </div>
  );
}
