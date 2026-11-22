import React from 'react';

export default function StatsCard({ title, value, subtext, icon: Icon, theme, hasProgress, percentage }) {
  return (
    <div className={`stat-card ${theme}`} role="region" aria-label={title}>
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon-wrapper" aria-hidden="true">
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-body">
        <div className="stat-value">{value}</div>
        {subtext && <span className="stat-subtext">{subtext}</span>}
      </div>
      {hasProgress && (
        <div className="stat-progress-bar-bg" aria-hidden="true">
          <div 
            className="stat-progress-bar-fill" 
            style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }} 
          />
        </div>
      )}
    </div>
  );
}
