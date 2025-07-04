import React, { useState } from 'react';

function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const saveEdit = () => {
    onUpdate({ ...task, title, description: desc });
    setEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <input value={desc} onChange={e => setDesc(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
          <p>Status: {task.completed ? '✅' : '❌'}</p>
        </>
      )}
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => setEditing(!isEditing)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
