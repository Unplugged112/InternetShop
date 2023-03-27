import React from 'react'
import "./SlidebarMenu.scss"
function SlidebarMenu() {
  return (
    <div className="sticky">
      <div className="sticky__container sticky__container-header">
        <ul className="sticky__list">
          <li>
            <div className="sticky__list-item">Имя и фамилия</div>
          </li>
          <li>
            <div className="sticky__list-item">Email</div>
          </li>
          <li>
            <div className="sticky__list-item">Телефон</div>
          </li>
          <li>
            <div className="sticky__list-item">Адреса</div>
          </li>
          <li>
            <div className="sticky__list-item">Избранное</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SlidebarMenu;