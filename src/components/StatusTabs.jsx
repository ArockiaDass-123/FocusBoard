import React from 'react';

const STATUS_OPTIONS = [
  { label: 'All', value: 'All' },
  { label: 'To do', value: 'To do' },
  { label: 'In progress', value: 'In progress' },
  { label: 'Completed', value: 'Completed' }
];

export default function StatusTabs({ activeStatus, onSelectStatus, counts }) {
  return (
    <div className="status-tabs" role="tablist" aria-label="Filter tasks by status">
      {STATUS_OPTIONS.map((tab) => {
        const count = counts[tab.value] ?? counts.total;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeStatus === tab.value}
            className={`status-tab-btn ${activeStatus === tab.value ? 'active' : ''}`}
            onClick={() => onSelectStatus(tab.value)}
          >
            <span>{tab.label}</span>
            <span className="status-tab-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
