import React from "react";
import "./styles/Diagonal.css";

function Diagonal(props) {
  return (
    <React.Fragment>
      <div className="Diagonal-bg">
        <div className="Diagonal-info">
          <h1>{props.title}</h1>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Diagonal;
