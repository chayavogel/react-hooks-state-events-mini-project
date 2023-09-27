import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit } ) {

  const categoriesWithoutAll = categories.filter((category) => category !== "All")
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function handleTextInput(event) {
    setText(event.target.value)
  }

  function handleCategoryInput(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newTask = {
      text: text,
      category: category
    }

    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryInput}>
          {/* render <option> elements for each category here */
          categoriesWithoutAll.map((category) => (<option key={category}>{category}</option>))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
