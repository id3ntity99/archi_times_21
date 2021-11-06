import React from "react";
import Home from "./components/Home";
import Users from "./components/newsList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Users />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
