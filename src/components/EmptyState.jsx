import React from 'react';
import { SearchX } from 'lucide-react';

export default function EmptyState({ onResetFilters }) {
  return (
    <div className="empty-state-box" role="status">
      <div className="empty-state-icon" aria-hidden="true">
        <SearchX size={28} />
      </div>
      <h3 className="empty-state-title">No matching tasks found</h3>
      <p className="empty-state-desc">
        Try adjusting your search criteria, clearing active status tabs, or relaxing your priority filter.
      </p>
      {onResetFilters && (
        <button className="btn-secondary" onClick={onResetFilters} style={{ marginTop: '8px' }}>
          Reset All Filters
        </button>
      )}
    </div>
  );
}
