import React, { useState } from "react";

import Cd from "./types/Cd";
import Bond from "./types/Bond";

const FixedCard = (props) => {
  const [bond, setBond] = useState(false);

  const getResult = (event) => {
    props.getResult(event);
  };

  const linkCursor = { cursor: "pointer" };

  const toggleBond = () => {
    setBond(true);
  };

  const toggleCert = () => {
    setBond(false);
  };

  return (
    <article className="card">
      <header className="card-header">
        <p className="card-header-title">
        <button 
          className="button is-link is-light is-large"
          onClick={() => props.toggleModal()}
        >
          <i style={linkCursor} className="glyphicon glyphicon-question-sign"></i>
        </button>
          Compount interest calculator
        </p>
      </header>
      <section className="buttons container">
        <div className="column">
          <button
            className="button is-link is-light is-large"
            onClick={() => toggleCert()}
            style={linkCursor}
          >
            Certificate
          </button>
        </div>
        <div className="column">
          <button
            className="button is-link is-light is-large"
            onClick={() => toggleBond()}
            style={linkCursor}
          >
            Bond
          </button>
        </div>
      </section>
      <br></br>
	  <div className="container">
      {bond ? <Bond getResult={getResult} /> : <Cd getResult={getResult} />}
      </div>
	  <br></br>
    </article>
  );
};

export default React.memo(FixedCard);
