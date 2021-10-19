import React from "react";
import picture from "../../images/kitten.jpeg";
import "./contactZoo.css";

import { connect } from "react-redux";

import * as actions from "./actions";

const ContactZoo = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="contactZoo">
      <div className="intro">
        <img className="pictures" src={picture} alt="" />
      </div>
      <div className="content">
        <div>
          <button onClick={inc} className="btn text-middle btn-inc">
            погладить ПО шерстке
          </button>
          <button onClick={rnd} className="btn text-middle btn-rnd">
            ПОЧЕСАТЬ за ушком
          </button>
          <button onClick={dec} className="btn text-middle btn-dec">
            погладить ПРОТИВ шерстки
          </button>
          <p className="counter text-large">Уровень удовольствия котика - {counter}*</p>
        </div>
        <p className="text-small">
          (*уровень удовольствия котика равен количеству Ваших лайков сайтику)
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(ContactZoo);
