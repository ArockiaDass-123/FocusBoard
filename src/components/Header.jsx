import React from 'react';
import { Plus, Menu } from 'lucide-react';

export default function Header({ onOpenCreateTask, onToggleMobileMenu }) {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button 
          className="mobile-menu-toggle" 
          onClick={onToggleMobileMenu} 
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>
        <div className="header-title-block">
          <h1>Workspace Dashboard</h1>
          <p>Track your daily priorities and project tasks</p>
        </div>
      </div>
      <div className="header-actions">
        <button 
          className="btn-primary" 
          onClick={onOpenCreateTask}
          id="btn-create-task"
          aria-label="Create new task"
        >
          <Plus size={18} />
          <span>Create Task</span>
        </button>
      </div>
    </header>
  );
}
