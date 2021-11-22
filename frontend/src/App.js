import React from "react";
import Home from "./components/Home";
import News from "./components/newsList";
import { Routes, Route } from "react-router-dom";
import NewsMain from "./components/newsMain";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/world/page/:id" element={<News />} />
        <Route path="/news" element={<NewsMain />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
