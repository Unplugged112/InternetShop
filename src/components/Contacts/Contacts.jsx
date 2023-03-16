import React from 'react'
import './Contacts.scss'
function Contacts() {
  return (
    <div className="main__contacts">
      <div className="main__contacts-left contacts__left">
        <div className="contacts__left-title">Контакты</div>
        <div className="contacts__left-text">
          Оставить свой вопрос можете здесь:
        </div>
        <div className="contacts__left-form">
          <form action="">
            <ul className="contacts__left-list">
              <li>
                <label htmlFor="name">Имя</label>
                <input name="name" type="text" />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" />
              </li>
              <li>
                <label htmlFor="message">Сообщение</label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Введите текст сообщения..."
                />
              </li>
              <li>
                <button type="submit">Оставить вопрос</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="main__contacts-right contacts__right">
        <img src="/image/FAQ/Image.png" alt="" />
      </div>
    </div>
  );
}

export default Contacts