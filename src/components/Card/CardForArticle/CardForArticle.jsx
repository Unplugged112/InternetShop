import React from "react";
import "./CardForArticle.scss"
function CardForArticle({ name, text, img }) {
  return (
    <div className="article__body-wrapper">
      <div className="article__body-title">{name}</div>
      <div className="article__body-text">{text}</div>
      {img && (
        <div className="article__body-img">
          <img src={`http://127.0.0.1:8000/${img}`} alt="" />
        </div>
      )}
    </div>
  );
}

export default CardForArticle;
