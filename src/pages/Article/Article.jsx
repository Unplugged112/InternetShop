import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Article.scss";
import CardForArticle from "../../components/Card/CardForArticle/CardForArticle";
function Article() {
  const id = useParams().id;

  const [blog, setBlog] = React.useState({});
  const [articles, setArticles] = React.useState([]);

  let img = "http://127.0.0.1:8000/" + blog.img;
  const getBlog = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/getblogs/${id}`);
    setBlog(response.data);
  };

  const getArticles = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/getarticle/${id}`);
    setArticles(response.data);
  };

  React.useEffect(() => {
    getBlog();
    getArticles();
  }, []);
  return (
    <main className="main">
      <div className="article">
        <div
          className="article__head"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="main__container container">
            <div className="article__head-wrapper">
              <div className="article__head-title">{blog.name}</div>
              <div className="article__head-author">Автор: {blog.author}</div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>

        <div className="article__body">
          <div className="main__container container">
            {articles &&
              articles.map((item) => (
                <CardForArticle
                  name={item.name}
                  text={item.text}
                  img={item.img}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Article;
