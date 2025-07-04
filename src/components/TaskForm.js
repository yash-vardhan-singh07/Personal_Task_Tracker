import React, { useState } from 'react';
import '../styles/App.css';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description: desc,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAdd(newTask);
    setTitle('');
    setDesc('');
  };

  return (
    <form id="form1" onSubmit={handleSubmit}>
      <input  type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input  type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
