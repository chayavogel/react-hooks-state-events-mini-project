import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [currentCategory, setCurrentCategory] = useState("All")

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  const updatedItems = tasks.filter((task) => {
    if (currentCategory === "All") {
      return task
    } else if (task.category === currentCategory) {
      return task
    } else {
      return null
    }})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={CATEGORIES}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
      <NewTaskForm categories={CATEGORIES} tasks={tasks} setTasks={setTasks} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={updatedItems} setTasks={setTasks}/>
    </div>
  );
}

export default App;
