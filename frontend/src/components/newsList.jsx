import React, { useState, useEffect } from "react";
import { getAllNews } from "../api/newsAPI";
import NavBar from "./navBar";
import Diagonal from "./diagonal";

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
    <div>
      {news.map((news) => {
        if (news !== null) {
          return <h4>{news.title}</h4>;
        }
      })}
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
