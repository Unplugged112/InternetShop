import React from "react";
import Contacts from "../../components/Form/Contacts/Contacts";
import "./FAQ.scss";
import axios from "axios";
import api from "../../api/api";
function FAQ() {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    let response = await api.get(`/answer/`);
    setQuestions(response.data);
  };

  React.useEffect(() => {
    getQuestions();
  }, []);
  const handleShowMenu = (id) => {
    setShowDropDown(!showDropDown);
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id === id) {
        questions[i].show = showDropDown;
      }
    }
  };
  return (
    <main>
      <div className="main__container container">
        <div className="main__wrapper">
          <div className="main__question-head">
            <div className="main__question-title">Часто задаваемые вопросы</div>
            <div className="main__question-subtitle">
              Мы стараемся улучшить качество обслуживание, по этому, для Вас
              составили список вопросов для всех категорий
            </div>
          </div>
          <div className="main__question-card questions">
            <div className="questions__columns">
              {questions &&
                questions.map((obj) => (
                  <div key={obj.id} className="questions__columns-element">
                    <div
                      className="questions__column-head"
                      onClick={() => handleShowMenu(obj.id)}
                    >
                      <div className="questions__columns-title">{obj.title}</div>
                      <div className="questions__columns-img">
                        <img
                          src={
                            obj.show
                              ? "/image/Product/active.svg"
                              : "/image/Product/unactive.svg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={
                        obj.show
                          ? "questions__columns-drop show"
                          : "questions__columns-drop"
                      }
                    >
                      {obj.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="main__question-contacts question__contacts">
          <div className="main__wrapper">
            <div className="question__contacts-head">
              <div className="question__contacts-title">Остались вопросы?</div>
              <div className="question__contacts-subtitle">
                Вы можете написать нам в поддержку
              </div>
            </div>
            <div className="question__contacts-element">
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
