import React from 'react';
import SearchBar from './SearchBar';
import StatusTabs from './StatusTabs';
import PriorityFilter from './PriorityFilter';
import TaskList from './TaskList';

export default function TaskSection({
  tasks,
  filteredTasks,
  searchQuery,
  onSearchChange,
  activeStatus,
  onSelectStatus,
  selectedPriority,
  onSelectPriority,
  onToggleStatus,
  onEditTask,
  onDeleteRequest,
  onResetFilters
}) {
  // Counts per status
  const counts = {
    total: tasks.length,
    'All': tasks.length,
    'To do': tasks.filter(t => t.status === 'To do').length,
    'In progress': tasks.filter(t => t.status === 'In progress').length,
    'Completed': tasks.filter(t => t.status === 'Completed').length,
  };

  return (
    <section className="task-section-container" aria-label="Tasks Management">
      <div className="task-filter-bar">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        
        <div className="filter-actions-group">
          <StatusTabs 
            activeStatus={activeStatus} 
            onSelectStatus={onSelectStatus} 
            counts={counts} 
          />
          <PriorityFilter 
            selectedPriority={selectedPriority} 
            onChangePriority={onSelectPriority} 
          />
        </div>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggleStatus={onToggleStatus}
        onEdit={onEditTask}
        onDeleteRequest={onDeleteRequest}
        onResetFilters={onResetFilters}
      />
    </section>
  );
}
