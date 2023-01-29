import React, { useState, useEffect } from 'react';
import './TaskList.css'; // import the CSS file

function TaskList() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks([...tasks, task].sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time)));
  }
 
  function removeTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }
 
  return (
    <div className="task-list-container">
      <form className="add-task-form" onSubmit={(e) => {
        e.preventDefault();
        // check if input is empty
        if (e.target.task.value.trim() === '') {
          return;
        }
        addTask({ name: e.target.task.value, date: e.target.date.value, time: e.target.time.value, location: e.target.location.value, description: e.target.description.value, completed: false });
        e.target.task.value = '';
        e.target.date.value = '';
        e.target.description.value = '';
        e.target.location.value = '';
        e.target.time.value = '';
      }}>
       
        <input type="text" name="task" placeholder="Add new task" />
        <input type="date" name="date" placeholder="Add task date" />
        <input type="time" name="time" placeholder="Add task time" />
        <input type="text" name="location" placeholder="Add task location" />
        <input type="text" name="description" placeholder="Add task description" style={{ height: "100px" }} />
        <button className="submit-button" type="submit">Add</button>
        
      </form>
      <div className="task-box" style={{height: "300px", overflowY: "scroll"}}>
      <ul style ={{listStyle:'none'}}>
        {tasks
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((task, index) => (
            <li key={index}>
              <h3>{task.name}</h3>
              { task.date && <p>Due Date: {task.date}</p> }
              { task.time && <p>Due Time: {task.time}</p> }
              { task.location && <p>Location: {task.location}</p> }
              { task.description && <p>Description: {task.description}</p> }
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
         
      </ul>
      </div>
    </div>
     );
    }

export default TaskList;

