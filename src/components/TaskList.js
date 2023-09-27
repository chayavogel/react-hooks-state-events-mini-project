import React from "react";
import Task from "./Task"

function TaskList( {tasks, setTasks} ) {
  return (
    <div className="tasks">
      {tasks.map((task) => (<Task key={task.text} tasks={tasks} text={task.text} category={task.category} setTasks={setTasks}/>))}
    </div>
  );
}

export default TaskList
