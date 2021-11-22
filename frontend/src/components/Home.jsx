import React from "react";
import Nav from "./navBar";
import Diagonal from "./diagonal";

function Home() {
  return (
    <React.Fragment>
      <Nav />
      <Diagonal title="Welcome to Archi Times" />
    </React.Fragment>
  );
}

export default Home;
