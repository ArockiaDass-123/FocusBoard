import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import FocusNotesCarousel from './components/FocusNotesCarousel';
import TaskSection from './components/TaskSection';
import TaskForm from './components/TaskForm';
import DeleteConfirmation from './components/DeleteConfirmation';
import { useTasks } from './hooks/useTasks';
import { calculateStatistics, filterTasks } from './utils/taskHelpers';

export default function App() {
  const { tasks, addTask, updateTask, deleteTask, updateStatus } = useTasks();

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStatus, setActiveStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');

  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Mobile Sidebar State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modal States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Derived Statistics
  const statistics = useMemo(() => calculateStatistics(tasks), [tasks]);

  // Derived Filtered Tasks
  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, searchQuery, activeStatus, selectedPriority);
  }, [tasks, searchQuery, activeStatus, selectedPriority]);

  // Handlers
  const handleOpenCreate = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (taskData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
  };

  const handleDeleteRequest = (task) => {
    setTaskToDelete(task);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
      setTaskToDelete(null);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveStatus('All');
    setSelectedPriority('All');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <div className="dashboard-main">
        <Header 
          onOpenCreateTask={handleOpenCreate} 
          onToggleMobileMenu={() => setIsMobileMenuOpen(prev => !prev)} 
        />

        <main className="dashboard-content">
          <StatsSection stats={statistics} />

          <FocusNotesCarousel 
            activeSlide={activeSlide} 
            onChangeSlide={setActiveSlide} 
          />

          <TaskSection
            tasks={tasks}
            filteredTasks={filteredTasks}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeStatus={activeStatus}
            onSelectStatus={setActiveStatus}
            selectedPriority={selectedPriority}
            onSelectPriority={setSelectedPriority}
            onToggleStatus={updateStatus}
            onEditTask={handleEditTask}
            onDeleteRequest={handleDeleteRequest}
            onResetFilters={handleResetFilters}
          />
        </main>
      </div>

      {/* Create / Edit Modal Form */}
      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingTask}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmation
        isOpen={Boolean(taskToDelete)}
        task={taskToDelete}
        onConfirm={handleConfirmDelete}
        onCancel={() => setTaskToDelete(null)}
      />
    </div>
  );
}
