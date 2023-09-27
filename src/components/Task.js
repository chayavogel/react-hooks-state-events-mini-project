import React from "react";

function Task( { tasks, text, category, setTasks } ) {


  function handleDelete() {
    const updatedItems = tasks.filter((task) => task.text !== text)
    setTasks(updatedItems)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
