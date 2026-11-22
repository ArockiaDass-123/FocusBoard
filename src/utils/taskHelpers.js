/**
 * Helper utilities for task calculations and validations
 */

export const calculateStatistics = (tasks = []) => {
  const total = tasks.length;
  const inProgress = tasks.filter(t => t.status === "In progress").length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const todo = tasks.filter(t => t.status === "To do").length;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    inProgress,
    completed,
    todo,
    completionPercentage
  };
};

export const filterTasks = (tasks = [], searchQuery = "", activeStatus = "All", selectedPriority = "All") => {
  const query = searchQuery.trim().toLowerCase();

  return tasks.filter(task => {
    // 1. Search Query Match (Title case-insensitive, or category)
    const matchesSearch = query === "" || 
      task.title.toLowerCase().includes(query) ||
      (task.description && task.description.toLowerCase().includes(query)) ||
      (task.category && task.category.toLowerCase().includes(query));

    // 2. Status Match
    const matchesStatus = activeStatus === "All" || task.status.toLowerCase() === activeStatus.toLowerCase();

    // 3. Priority Match
    const matchesPriority = selectedPriority === "All" || selectedPriority === "All priorities" || 
      task.priority.toLowerCase() === selectedPriority.toLowerCase();

    return matchesSearch && matchesStatus && matchesPriority;
  });
};

export const formatDate = (dateString) => {
  if (!dateString) return "No due date";
  try {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const date = new Date(dateString + "T00:00:00");
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", options);
  } catch {
    return dateString;
  }
};
