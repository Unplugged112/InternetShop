import React from "react";
import styles from "./About.scss";
import axios from "axios";
import FromJob from "../../components/Form/FormForJob";
function About() {
  const [history, setHistory] = React.useState({});
  const [about, setAbout] = React.useState([]);
  const [advantages, setAdvantages] = React.useState([]);
 
  const getHistory = async () => {
    let response = await axios.get(`http://localhost:8000/history/`);
    setHistory(response.data);
  };

  const getAbout = async () => {
    let response = await axios.get(`http://localhost:8000/about/`);
    setAbout(response.data);
  };

  const getAdvantages = async () => {
    let response = await axios.get(`http://localhost:8000/do/`);
    setAdvantages(response.data);
  };

  React.useEffect(() => {
    getHistory();
    getAbout();
    getAdvantages();
  }, []);
  return (
    <main className="about">
      <div className="about__head">
        <div className="about__container container">
          <div className="about__head-title">О нас</div>
          <div className="about__head-subtitle">Техника - каждому!</div>
        </div>
      </div>
      <div className="about__description">
        <div className="about__container container">
          <div className="about__wrapper">
            <div className="main__head">
              <div className="main__head-title">Кратко и по делу</div>
              <div className="main__head-subtitle">
                В это разделе кратко расскажем о нашей компании
              </div>
            </div>
            <div className="about__description-column description__column">
              {about &&
                about.map((obj) => (
                  <div key={obj.id} className="description__column-element">
                    <div className="description__column-img">
                      <img src="/image/About/Column/image.svg" alt="" />
                    </div>
                    <div className="description__column-title">{obj.title}</div>
                    <div className="description__column-subtitle">
                      {obj.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about__history">
        <div className="about__container container">
          <div className="about__wrapper">
            <div className="main__head">
              <div className="main__head-title white">История tech-markt</div>
            </div>
            <div className="about__history-elements">
              <div className="about__history-head">
                <div className="about__history-text">{history.title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__quality">
        <div className="about__container container">
          <div className="about__wrapper">
            <div className="main__head">
              <div className="main__head-title">
                Что мы можем сделать для Вас ?
              </div>
            </div>
            <div className="about__quality-items">
              {advantages &&
                advantages.map((obj) => (
                  <div key={obj.id} className="about__quality-elements">
                    <div className="about__quality-title">{obj.title}</div>
                    <div className="about__quality-subtitle">{obj.text}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about__reviews">
        <div className="about__container container">
          <div className="about__wrapper">
            <div className="main__head white">
              <div className="main__head-title white">Наши отзывы</div>
              <div className="main__head-subtitle white">
                Мы прислушиваемся к нашим клиентам и учитываем каждое Ваше
                мнение
              </div>
            </div>
            <div className="about__reviews-wrapper">
              <div className="about__reviews-card card__reviews">
                <div className="card__reviews-img">
                  <img src="/image/About/Reviews/Image.png" alt="" />
                </div>
                <div className="card__reviews-title">Имя пользователя</div>
                <div className="card__reviews-text">Отзыв.</div>
              </div>

              <div className="about__reviews-card card__reviews">
                <div className="card__reviews-img">
                  <img src="/image/About/Reviews/Image.png" alt="" />
                </div>
                <div className="card__reviews-title">Имя пользователя</div>
                <div className="card__reviews-text">Отзыв.</div>
              </div>
              <div className="about__reviews-card card__reviews">
                <div className="card__reviews-img">
                  <img src="/image/About/Reviews/Image.png" alt="" />
                </div>
                <div className="card__reviews-title">Имя пользователя</div>
                <div className="card__reviews-text">Отзыв.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__work">
        <div className="about__container container">
          <div className="about__wrapper">
            <div className="about__work-wrapper">
              <div className="about__work-left left">
                <div className="left__title">Вступить в нашу команду</div>
                <div className="left__subtitle">
                  Мы ищем ответственных и настроенных на работу сотрудников
                </div>
                <div className="left__items">
                  <ul className="left__items-list">
                    <li>
                      <img src="/image/Icons/Email.svg" alt="" />
                      <span>info@tech-markt.ru</span>
                    </li>
                    <li>
                      <img src="/image/Icons/Phone.svg" alt="" />
                      <span>+79686535418</span>
                    </li>
                    <li>
                      <img src="/image/Icons/Pin.svg" alt="" />
                      <span>123 Sample St, Sydney NSW 2000 AU</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about__work-right right">
                <FromJob />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
