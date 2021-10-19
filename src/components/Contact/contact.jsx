import React from "react";
import picture from "../../images/laptop.jpeg";

import "./contact.css";
import ContactZoo from "../ContactZoo/contactZoo";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="intro">
          <img className="pictures" src={picture} alt="" />
        </div>
        <div className="content">
          <h1 className="header">Не звоните мне и не пишите.</h1>
          <p className="text-middle">
            Но можно лайкнуть мой сайтик, погладив котика:
          </p>
        </div>
        <ContactZoo />
      </div>
    </div>
  );
}

export default Contact;
