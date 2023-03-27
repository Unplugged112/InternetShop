import React from "react";
import "./Contacts.scss";
import axios from "axios";
function Contacts() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Имя или Email не заполнены");
      return;
    } else if (!validateEmail(email)) {
      setError("Неверная почта")
    } 
    
    else {
      const data = {
        name: name,
        email: email,
        text: message,
      };

      await axios
        .post("http://localhost:8000/questions/", data)
        .catch((error) => {
          console.error(error.data);
        });
      setError(null);
    }
  };
  return (
    <div className="main__contacts">
      <div className="main__contacts-left contacts__left">
        <div className="contacts__left-title">Контакты</div>
        <div className="contacts__left-text">
          Оставить свой вопрос можете здесь:
        </div>
        <div className="contacts__left-form">
          <form onSubmit={handleSubmit} action="">
            <ul className="contacts__left-list">
              {error && <li className="error">{error}</li>}

              <li>
                <label htmlFor="name">Имя</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="message">Сообщение</label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Введите текст сообщения..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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

export default Contacts;
