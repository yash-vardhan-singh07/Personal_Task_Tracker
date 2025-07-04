import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import { loadTasks, saveTasks } from '../utils/localStorage';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const stored = loadTasks();
    setTasks(stored);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const updateTask = (updatedTask) =>
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="task-page">
      <h2>Your Tasks</h2>
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} onUpdate={updateTask} />
      ))}
    </div>
  );
}

export default TaskList;
