import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";

import AssetContext from "../../context/AssetContext";

const ResultCard = (props) => {
  const [fixed, setFixed, stocks, setStocks] = useContext(AssetContext);
  const [fixedAssets, setFixedAssets] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    setFixedAssets([...fixed]);
    setCompany([...stocks]);
  }, [fixed, stocks]);

  const formClear = () => {
    setFixed([]);
    setStocks([]);
  };

  return (
    <article className="card">
      <header className="card-header">
        <p className="card-header-title">Result card</p>
      </header>
      <section>
        <p>
          <span className="tag is-light is-large">Compounding assets</span>
        </p>
        <Table
          striped
          borderless
          hover
          size="sm"
          variant="secondary"
          responsive
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Principle</th>
              <th>length</th>
              <th>End value</th>
            </tr>
          </thead>
          <tbody>
            {fixedAssets &&
              fixedAssets.map((asset, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>${asset.principle}</td>
                  <td>{asset.iLength.toFixed(2)} yrs</td>
                  <td>${asset.endValue}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <p>
          <span className="tag is-light is-large">Stocks</span>
        </p>
        <Table
          striped
          borderless
          hover
          size="sm"
          variant="secondary"
          responsive
        >
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Market</th>
              <th>Discounted</th>
              <th>Avg growth %</th>
            </tr>
          </thead>
          <tbody>
            {company &&
              company.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.ticker}</td>
                  <td>
                    ${Number.parseFloat(asset.buyAndHoldValue).toFixed(2)}
                  </td>
                  <td>
                    ${Number.parseFloat(asset.discountedValue).toFixed(2)}
                  </td>
                  <td>{(asset.avgChange - 100).toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
	  <hr></hr>
	  <section className="buttons container">
        <div className="column">
          <button
            className="button is-link is-light is-large"
            onClick={() => formClear()}
          >
            Clear form
          </button>
        </div>
      </section>
    </article>
  );
};

export default ResultCard;
