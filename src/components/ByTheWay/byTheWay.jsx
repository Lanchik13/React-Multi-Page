import React from "react";
import "./byTheWay.css";

import { connect } from "react-redux";

const ByTheWay = ({ counter }) => {
  return (
    <div className="byTheWay text-small">
      <p>(...и, между прочим, Вы лайкнули сайтик {counter} раз)</p>
      <p>Это можно исправить на последней странице</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps)(ByTheWay);
