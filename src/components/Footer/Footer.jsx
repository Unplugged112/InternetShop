import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__title">Logo</div>
            <div className="footer__contacts">
              <div className="footer__contacts-title">Контакты:</div>
              <ul className="footer__contacts-list">
                <li>
                  <Link to="">+79686535418</Link>
                </li>
                <li>
                  <Link to="">+79296352373</Link>
                </li>
                <li>
                  <span>info@tech-markt.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__right">
            <ul className="footer__right-list">
              <li>
                <h3>О компании</h3>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/question">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Блог</Link>
              </li>
              <li>
                <Link to="/stock">Акции</Link>
              </li>
              <li>
                <Link to="/catalog/0">Услуги</Link>
              </li>
            </ul>
            <ul className="footer__right-list">
              <li>
                <h3>Оплата и доставка</h3>
              </li>
              <li>
                <Link to="">Способы оплаты</Link>
              </li>
              <li>
                <Link to="">Доставка</Link>
              </li>
            </ul>
            <ul className="footer__right-list">
              <li>
                <h3>Гарантия и возврат товара</h3>
              </li>
              <li>
                <Link to="">Гарантия</Link>
              </li>
              <li>
                <Link to="">Обмен и возврат товара</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__down">
          <div className="footer__down-right">
            2023 © tech-markt.ru - Все права защищены
          </div>
          <div className="footer__down-left">
            <Link to="">Договор публичной оферты</Link>
            <Link to="">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
