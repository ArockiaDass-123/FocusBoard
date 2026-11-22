import React from 'react';
import { 
  Check, 
  Clock, 
  Calendar, 
  Edit3, 
  Trash2, 
  AlertCircle 
} from 'lucide-react';
import { formatDate } from '../utils/taskHelpers';

export default function TaskCard({ 
  task, 
  onToggleStatus, 
  onEdit, 
  onDeleteRequest 
}) {
  const isCompleted = task.status === 'Completed';
  const isInProgress = task.status === 'In progress';

  const getPriorityBadgeClass = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'badge-priority-high';
      case 'medium': return 'badge-priority-medium';
      case 'low': return 'badge-priority-low';
      default: return 'badge-priority-low';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'badge-status-completed';
      case 'in progress': return 'badge-status-progress';
      case 'to do': return 'badge-status-todo';
      default: return 'badge-status-todo';
    }
  };

  const handleNextStatus = () => {
    if (task.status === 'To do') onToggleStatus(task.id, 'In progress');
    else if (task.status === 'In progress') onToggleStatus(task.id, 'Completed');
    else onToggleStatus(task.id, 'To do');
  };

  return (
    <article className={`task-item-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="task-item-main">
        <button
          className={`task-status-toggle-btn ${isCompleted ? 'completed' : ''} ${isInProgress ? 'in-progress' : ''}`}
          onClick={handleNextStatus}
          aria-label={`Cycle status for ${task.title}. Currently ${task.status}`}
          title={`Status: ${task.status}. Click to cycle.`}
        >
          {isCompleted && <Check size={14} strokeWidth={3} />}
          {isInProgress && <Clock size={12} strokeWidth={2.5} />}
        </button>

        <div className="task-info">
          <div className="task-title-line">
            <h3 className="task-title">{task.title}</h3>
            {task.category && (
              <span className="task-category-pill">{task.category}</span>
            )}
          </div>
          {task.description && (
            <p className="task-description-text">{task.description}</p>
          )}
        </div>
      </div>

      <div className="task-item-meta">
        <span className={`badge ${getStatusBadgeClass(task.status)}`}>
          {task.status}
        </span>

        <span className={`badge ${getPriorityBadgeClass(task.priority)}`}>
          {task.priority}
        </span>

        {task.dueDate && (
          <div className="task-due-date" title={`Due: ${task.dueDate}`}>
            <Calendar size={14} />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        )}

        <div className="task-actions">
          <button 
            className="action-icon-btn edit" 
            onClick={() => onEdit(task)}
            aria-label={`Edit task: ${task.title}`}
            title="Edit task"
          >
            <Edit3 size={16} />
          </button>
          <button 
            className="action-icon-btn delete" 
            onClick={() => onDeleteRequest(task)}
            aria-label={`Delete task: ${task.title}`}
            title="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
