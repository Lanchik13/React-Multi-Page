import React from "react";
import picture from "../../images/eyes.jpeg";
import "./home.css";
import ByTheWay from "../ByTheWay/byTheWay";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="intro">
          <img src={picture} alt="" />
        </div>
        <div className="content">
          <h1 className="header">Дратути</h1>
          <p className="text-middle">всем</p>
          <ByTheWay />
        </div>
      </div>
    </div>
  );
}

export default Home;
