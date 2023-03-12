import React from "react";
import styles from "./About.scss";
function About() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);

  };

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
              <div className="description__column-element">
                <div className="description__column-img">
                  <img src="/image/About/Column/image.svg" alt="" />
                </div>
                <div className="description__column-title">
                  Чем мы занимаемся?
                </div>
                <div className="description__column-subtitle">
                  Мы реализуем товары китайского и турецкого производства
                  хорошего качества по низкой цене!
                </div>
              </div>
              <div className="description__column-element">
                <div className="description__column-img">
                  <img src="/image/About/Column/image.svg" alt="" />
                </div>
                <div className="description__column-title">Наше видение</div>
                <div className="description__column-subtitle">
                  21 век можно охарактеризовать веком высоких технологий. Наша
                  цель – обеспечение доступа к технологиям для каждого жителя
                  нашей страны!
                </div>
              </div>
              <div className="description__column-element">
                <div className="description__column-img">
                  <img src="/image/About/Column/image.svg" alt="" />
                </div>
                <div className="description__column-title">История начала</div>
                <div className="description__column-subtitle">
                  Мы молодая компания, начавшая свой путь в 2022 году. Наша
                  команда, вобравшая в себя лучшие практики антикризисный
                  решений и перспективных тенденций, состоит из профессионалов,
                  полных энергии и настойчивости!
                </div>
              </div>
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
                <div className="about__history-text">
                  Мы молодая компания, начавшая свой путь в 2022 году. Наша
                  команда, вобравшая в себя лучшие практики антикризисный
                  решений и перспективных тенденций, состоит из профессионалов,
                  полных энергии и настойчивости!
                </div>
              </div>
              <div className="about__history-img">
                <img src="/image/Product/Image.png" alt="" />
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
              <div className="about__quality-elements">
                <div className="about__quality-title">На связи 24/7</div>
                <div className="about__quality-subtitle">
                  Когда мы пишем про энергию нашей команды, то делаем это без
                  преувеличения. Пишите или звоните в любое время, каждый день!
                </div>
              </div>
              <div className="about__quality-elements">
                <div className="about__quality-title">
                  Много довольных клиентов
                </div>
                <div className="about__quality-subtitle">
                  Без лишних слов, мы просто гордимся их количеством!
                </div>
              </div>
              <div className="about__quality-elements">
                <div className="about__quality-title">Хорошее качество</div>
                <div className="about__quality-subtitle">
                  О качестве наших товаров лучше всего Вам расскажут наши
                  довольные клиенты!
                </div>
              </div>
              <div className="about__quality-elements">
                <div className="about__quality-title">
                  Клиентоориентированность
                </div>
                <div className="about__quality-subtitle">
                  Мы всегда готовы выслушать пожелания и рекомендации клиента, и
                  реализовать их по мере возможности
                </div>
              </div>
              <div className="about__quality-elements">
                <div className="about__quality-title">Быстрая доставка</div>
                <div className="about__quality-subtitle">
                  Товар в наличии поставляется в течение 1-2 дней по г. Москва.
                  Сроки доставки позиций под заказ составляют от 4-30 дней!
                </div>
              </div>
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
                <form action="">
                  <div className="right__elements">
                    <div className="right__elements-input">
                      <label htmlFor="lastname">Фамилия</label>
                      <input name="lastname" type="text" />
                    </div>
                    <div className="right__elements-input">
                      <label htmlFor="name">Имя</label>
                      <input name="name" type="text" />
                    </div>
                  </div>
                  <div className="right__elements">
                    <div className="right__elements-input">
                      <label htmlFor="email">Email</label>
                      <input name="email" type="text" />
                    </div>
                    <div className="right__elements-input">
                      <label htmlFor="phone">Номер телефона</label>
                      <input name="phone" type="text" />
                    </div>
                  </div>
                  <div className="right__elements ">
                    <div className="right__elements-input w100">
                      <label htmlFor="job">Должность</label>
                      <input name="job" type="text" />
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
                        <span>
                          Соглашаетесь на обработку персональных данных
                        </span>
                      </label>
                    </div>
                    <div className="right__actions-button">
                      <button
                        className={
                          isChecked
                            ? "button active__button"
                            : "button disabled__button"
                        }
                        disabled={!isChecked}
                      >
                        Отправить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
