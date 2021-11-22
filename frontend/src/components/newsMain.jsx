import React from "react";
import NavBar from "./navBar";
import Diagonal from "./diagonal";
import "./styles/newsMain.css";

function NewsCard(props) {
  return (
    <div className="card-frame">
      <div className="news-card">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

function NewsMain() {
  return (
    <React.Fragment>
      <NavBar />
      <Diagonal title="News" />
      <NewsCard name="건축세계저널" />
    </React.Fragment>
  );
}

export default NewsMain;
