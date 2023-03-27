import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import "./index.scss";
function FromJob() {
  const [error, setError] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [post, setPost] = React.useState("");
  const [text, setText] = React.useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !surname) {
      setError("Имя или Фамилия не заполнены");
      return;
    } else if (!validateEmail(email)) {
      setError("Неверная почта");
    } else if (!email || !number) {
      setError("Телефон или Почта не заполнены");
    } else if (!post) {
      setError("Не указана должность");
    } else {
      const data = {
        name: name,
        surname: surname,
        email: email,
        number: number,
        post: post,
        text: text,
      };

      await axios
        .post("http://localhost:8000/job/", data)
        .catch((error) => {
          console.error(error.data);
        });
      setError(null);
    }
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      {error && <div className="error mb30">{error}</div>}
      <div className="right__elements">
        <div className="right__elements-input">
          <label htmlFor="lastname">Фамилия</label>
          <input
            name="lastname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="right__elements-input">
          <label htmlFor="name">Имя</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="right__elements">
        <div className="right__elements-input">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="right__elements-input">
          <label htmlFor="phone">Номер телефона</label>
          <InputMask
            mask="+7(999)999-99-99"
            name="phone"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></InputMask>
        </div>
      </div>
      <div className="right__elements ">
        <div className="right__elements-input w100">
          <label htmlFor="job">Должность</label>
          <input
            name="job"
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      </div>
      <div className="right__check">
        <div className="right__check-title">График работы</div>
        <div className="right__check-elements">
          <div className="right__check-item">
            <label>
              <input type="radio" name="radio" value="option1" />
              Полный рабочий день
            </label>
          </div>
        </div>
        <div className="right__check-elements">
          <div className="right__check-item">
            <label>
              <input type="radio" name="radio" value="option3" />
              Сокращенный рабочий день
            </label>
          </div>
        </div>
        <div className="right__check-elements">
          <div className="right__check-item">
            <label>
              <input type="radio" name="radio" value="option3" />
              Гибкий график
            </label>
          </div>
        </div>
        <div className="right__check-elements">
          <div className="right__check-item">
            <label>
              <input type="radio" name="radio" value="option4" />
              Удаленная работа
            </label>
          </div>
        </div>
      </div>
      <div className="right__elements ">
        <div className="right__elements-input w100">
          <label htmlFor="job">О себе</label>
          <textarea
            name="about"
            type="text"
            placeholder="Введите свое сообщение"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className="right__actions">
        <div className="right__actions-check">
          <label htmlFor="">
            <input
              className="right__actions-input"
              checked={isChecked}
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <span>Соглашаетесь на обработку персональных данных</span>
          </label>
        </div>
        <div className="right__actions-button">
          <button
            className={
              isChecked ? "button active__button" : "button disabled__button"
            }
            disabled={!isChecked}
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
}

export default FromJob;
