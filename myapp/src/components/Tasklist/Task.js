import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function addTask() {
    setTasks([...tasks, { name: task, date: date, time: time, location: location, description: description, completed: false }]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
        setTask('');
        setDate('');
        setTime('');
        setLocation('');
        setDescription('');
      }}>
        <input type="text" name="task" placeholder="Add new task" value={task} onChange={(e) => setTask(e.target.value)} />
        <input type="date" name="date" placeholder="Add task date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" name="time" placeholder="Add task time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="text" name="location" placeholder="Add task location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="text" name="description" placeholder="Add task description" style={{width: "500px"}} value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.name}</h3>
            <p>Due Date: {task.date}</p>
            <p>Due Time: {task.time}</p>
            <p>Location: {task.location}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

