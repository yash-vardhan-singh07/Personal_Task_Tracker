import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const counts = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length
  };

  return (
    <div className="filters">
      {['all', 'completed', 'pending'].map(f => (
        <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>
          {f.charAt(0).toUpperCase() + f.slice(1)} ({counts[f]})
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
