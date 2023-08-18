import React from "react";
import {
  Form,
  Button
} from "react-bootstrap";

const Navigation = (props) => {
  const tickerSearch = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    window.open(
      "https://finance.yahoo.com/quote/" +
        form.ticker.value +
        "/cash-flow?p=" +
        form.ticker.value,
      "_blank"
    );
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <article className="container is-fluid">
        <section className="column">
          <div className="navbar-brand">
            <span className="glyphicon glyphicon-usd" aria-hidden="true"></span>{" "}
            <span className="title">Growth Calculator</span>
          </div>
        </section>
        <section className="column">
          <section className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Discover Stocks</a>
            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://finance.yahoo.com/"
              >
                Yahoo finance
              </a>
              <hr class="navbar-divider"></hr>
              <a
                className="navbar-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/finance"
              >
                Google finance
              </a>
              <hr className="navbar-divider"></hr>
              <a
                className="navbar-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.finviz.com/screener.ashx"
              >
                Finviz stock screener
              </a>
              <hr className="navbar-divider"></hr>
              <a
                className="navbar-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.zacks.com/screening/stock-screener"
              >
                Zach's stock screener
              </a>
            </div>
          </section>
        </section>
        <section className="column">
          <Form inline onSubmit={tickerSearch}>
            <Form.Group controlId="ticker" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Ticker search"
                className="mr-sm-2"
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form.Group>
          </Form>
        </section>
      </article>
    </nav>
  );
};

export default Navigation;
