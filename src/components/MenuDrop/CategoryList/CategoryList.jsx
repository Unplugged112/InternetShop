import React from 'react'
import "./CategoryList.scss"
function CategoryList({ category, selectedCategory, onCategorySelect }) {
  return (
    <ul className="list">
      <li className="list__element">
        <span>Все товары</span>
      </li>
      {category &&
        category.map((obj) => (
          <li
            key={obj.id}
            className={
              category.id == selectedCategory
                ? "list__element active"
                : "list__element"
            }
            onClick={() => onCategorySelect(obj.id)}
          >
            <span>{obj.name}</span>
          </li>
        ))}
    </ul>
  );
}

export default CategoryList