import React from 'react'
import "./CardForBlog.scss";
import { Link } from 'react-router-dom';
function CardForBlog({id,img, title, desc, author}) {
  return (
    <div className="blog-card">
      <img
        src={`http://127.0.0.1:8000/${img}`}
        alt={title}
        className="blog-card__image"
      />
      <div className="blog-card__content">
        <div className="blog-card__title">
          <Link to={`/blog/article/${id}`}>{title}</Link>
        </div>
        <div className="blog-card__description">
          <p>{desc}</p>
        </div>
        <div className="blog-card__author">
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

export default CardForBlog