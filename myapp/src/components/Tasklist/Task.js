import React, { useState } from 'react';


function TaskList() {
 const [tasks, setTasks] = useState([]);


 function addTask(task) {
   setTasks([...tasks, task]);
 }


 function removeTask(index) {
   setTasks(tasks.filter((task, i) => i !== index));
 }


 return (
   <div>
     <form onSubmit={(e) => {
         e.preventDefault();
         addTask({ name: e.target.task.value, date: e.target.date.value, time: e.target.time.value, location: e.target.location.value, description: e.target.description.value, completed: false });
         e.target.task.value = '';
         e.target.date.value = '';
         e.target.description.value = '';
         e.target.location.value = '';
         e.target.time.value = '';
       }}>
       <input type="text" name="task" placeholder="Add new task" />
       <input type="date" name="date" placeholder="Add task date" />
       <input type="time" name="time" placeholder="Add task time"/>
       <input type="text" name="location" placeholder="Add task location" />
       <input type="text" name="description" placeholder="Add task description" style={{width: "500px"}} />
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
