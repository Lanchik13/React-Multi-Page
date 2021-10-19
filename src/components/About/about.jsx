import React from "react";
import picture from "../../images/lamps.jpeg";
import './about.css';
import ByTheWay from "../ByTheWay/byTheWay";

function About() {
  return (
    <div className="about">
      <div className="container">
          <div className="intro">
            <img
              src={picture}
              alt=""
            />
          </div>
          <div className="content">
            <h1 className="header">Ну, что тут скажешь...</h1>
            <p className="text-middle">
              Я, образцовый туполобик, создала этот сайт, чтобы ослепить своими знаниями и
              запредельной улетностью.
            </p>
          <ByTheWay />
          </div>
      </div>
    </div>
  );
}

export default About;
