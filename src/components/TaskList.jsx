import React from 'react';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

export default function TaskList({ 
  tasks, 
  onToggleStatus, 
  onEdit, 
  onDeleteRequest,
  onResetFilters 
}) {
  if (tasks.length === 0) {
    return <EmptyState onResetFilters={onResetFilters} />;
  }

  return (
    <div className="tasks-container" role="feed" aria-label="Task list">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onEdit={onEdit}
          onDeleteRequest={onDeleteRequest}
        />
      ))}
    </div>
  );
}
