import { useMemo, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { initialTasks } from "../data/initialTasks";

const LOCAL_STORAGE_KEY = "focusboard_tasks";

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage(LOCAL_STORAGE_KEY, () => initialTasks);

  // Add new task
  const addTask = useCallback((taskData) => {
    const newTask = {
      ...taskData,
      id: "task-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  }, [setTasks]);

  // Update existing task
  const updateTask = useCallback((id, updatedData) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...updatedData } : t)));
  }, [setTasks]);

  // Delete task
  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, [setTasks]);

  // Update task status directly
  const updateStatus = useCallback((id, newStatus) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, status: newStatus } : t)));
  }, [setTasks]);

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateStatus
  };
}
