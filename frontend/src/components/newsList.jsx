import React, { useState, useEffect } from "react";
import { getAllNews } from "../api/newsAPI";
import NavBar from "./navBar";
import Diagonal from "./diagonal";
import "./styles/newsList.css";

function NewsList() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setNews(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await getAllNews();
        setNews(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>{error}</div>;
  if (!news) return null;
  return (
    <div className="list-frame">
      <ol className="news-list">
        {news.map((news) => {
          return (
            <li>
              <a target="blank" href={news.link}>
                {news.title}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function News() {
  return (
    <React.Fragment>
      <NavBar />
      <Diagonal />
      <NewsList />
    </React.Fragment>
  );
}

export default News;
