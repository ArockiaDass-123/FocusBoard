import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-input-wrapper">
      <Search size={18} className="search-icon" aria-hidden="true" />
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks by title, category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search tasks"
      />
    </div>
  );
}
