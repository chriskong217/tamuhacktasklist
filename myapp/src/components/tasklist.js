import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a task" value={newTask} onChange={handleChange}/>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskList;