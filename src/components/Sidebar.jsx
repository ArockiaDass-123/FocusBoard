import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart2, 
  Settings, 
  HelpCircle,
  X,
  Layers
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} aria-hidden="true" />}
      <aside className={`dashboard-sidebar ${isOpen ? 'mobile-open' : ''}`} aria-label="Main Navigation">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="brand-icon-wrapper" aria-hidden="true">
              <Layers size={20} />
            </div>
            <span className="brand-title">Focus<span>Board</span></span>
          </div>
          {isOpen && (
            <button className="mobile-menu-toggle" onClick={onClose} aria-label="Close navigation menu">
              <X size={18} />
            </button>
          )}
        </div>

        <nav className="sidebar-nav-container">
          <div className="nav-section-label">WORKSPACE</div>
          <a href="#dashboard" className="sidebar-nav-item active">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
            <span className="sidebar-nav-badge">Live</span>
          </a>
          <div className="sidebar-nav-item placeholder" title="Coming soon">
            <CheckSquare size={18} />
            <span>My Tasks</span>
          </div>
          <div className="sidebar-nav-item placeholder" title="Coming soon">
            <Calendar size={18} />
            <span>Schedule</span>
          </div>
          <div className="sidebar-nav-item placeholder" title="Coming soon">
            <BarChart2 size={18} />
            <span>Productivity</span>
          </div>

          <div className="nav-section-label" style={{ marginTop: '16px' }}>SETTINGS</div>
          <div className="sidebar-nav-item placeholder" title="Coming soon">
            <Settings size={18} />
            <span>Settings</span>
          </div>
          <div className="sidebar-nav-item placeholder" title="Coming soon">
            <HelpCircle size={18} />
            <span>Help & Docs</span>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar" aria-hidden="true">VP</div>
          <div className="user-info">
            <span className="user-name">Vinith</span>
            <span className="user-role">Product Workspace</span>
          </div>
        </div>
      </aside>
    </>
  );
}
