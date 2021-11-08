import React from "react";
import Home from "./components/Home";
import News from "./components/newsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/page/2" element={<News />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
