import React, {useState} from "react";

function CategoryFilter( { categories, setCurrentCategory, currentCategory }) {

  const [clicked, setClicked] = useState(false)

  function handleButtonClick(event) {
    setClicked(!clicked)
    const key = event.target.textContent
    setCurrentCategory(key)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map((category) => (
        <button className={currentCategory === category ? "selected" : ""} onClick={handleButtonClick} key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
