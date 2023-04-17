import React from "react";
import CardForBlog from "../../components/Card/CardForBlog/CardForBlog";
import "./Blog.scss";
import api from "../../api/api";
function Blog() {
  const [blogs, setBlogs] = React.useState([{}]);

  const getBlogs = async () => {
    let response = await api.get(`/getblog/`);
    setBlogs(response.data);
  };

  React.useEffect(() => {
    getBlogs();
  }, []);
  return (
    <main className="main">
      <div className="main__container container">
        <div className="blog">
          <div className="blog__head">
            <div className="blog__head-title">Блог</div>
            <div className="blog__head-subtitle">Обзор и анализ</div>
            <div className="blog__head-desc">
              Наши специалисты подготовили доскональный обзор продукции, которую
              мы продаем
            </div>
          </div>
          <div className="blog__row">
            {blogs &&
              blogs.map((item) => (
                <CardForBlog
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.name}
                  desc={item.desc}
                  author={item.author}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
