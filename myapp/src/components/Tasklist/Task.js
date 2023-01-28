import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(["Go to the store", "Buy milk", "Do laundry"]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
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