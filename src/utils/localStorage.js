const TASK_KEY = 'tasks';

export const loadTasks = () => {
  return JSON.parse(localStorage.getItem(TASK_KEY)) || [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};
