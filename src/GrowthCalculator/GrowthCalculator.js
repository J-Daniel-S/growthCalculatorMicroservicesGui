import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./GrowthCalculator.css";
import { Container, CardGroup, Row } from "react-bootstrap";

import FixedCard from "../components/fixedAssets/FixedCard";
import StockCard from "../components/stocks/StockCard";
import ResultCard from "../components/results/ResultCard";
import Navigation from "../components/Navigation";
import AssetContext from "../context/AssetContext.js";
import HowToStock from "../HowTos/HowToStock";
import HowToFixed from "../HowTos/HowToFixed";

const GrowthCalculator = (props) => {
  const [fixedState, setFixedState] = useState([]);
  const [stockState, setStockState] = useState([]);
  const [fixedHowToState, setFixedHowToState] = useState(false);
  const [stockHowToState, setStockHowToState] = useState(false);

  const assets = [
    fixedState,
    setFixedState,
    stockState,
    setStockState,
    fixedHowToState,
    setFixedHowToState,
    stockHowToState,
    setStockHowToState,
  ];

  const getResult = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const assets = fixedState;

    let principle = Number.parseInt(form.principle.value);
    const iLength = Number.parseInt(form.investmentLength.value) / 12;
    let compound = form.compound.value;
    let rate = form.rate.value/100;
    let amount;

    if (form.amount) {
      amount = form.amount.value;
      principle = principle * amount;
    }

    if (isNaN(rate) || rate < 0) {
      alert(
        'As much fun as it would be to calculate the result with "' +
          rate +
          "\", it can't be done.  Please enter a valid number"
      );
    } else {
      if (compound === "Monthly") {
        compound = 12;
      } else if (compound === "Annually") {
        compound = 1;
      } else if (compound === "Quarterly") {
        compound = 4;
      } else {
        compound = 365;
      }

      fetch(
        `http://localhost:8765/fixed-asset-provider/?principle=${principle}&interest=${rate}&length=${iLength}&compoundFrequency=${compound}`
      ).then(res => res.json()).then(res => {
        assets.push(res);
        setFixedState([...assets]);
        fixedState.map((asset) => console.log(asset));
      });
    }
  };

  const getStockPrice = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const stocks = stockState;

    const roi = form.roi.value;
    const mos = form.mos.value;
    const equity = form.equity.value * 1000;
    const shares = form.shares.value * 1000000;
    const ticker = form.ticker.value;
    let growth;

    if (form.growth.value) {
      growth = Number.parseInt(form.growth.value);
    }

    if (roi <= 0) {
      alert("You probably don't want to make nothing on your investment");
    } else if (mos < 0 || mos > 50) {
      alert(
        "Margin of safety must be between 0 (I don't recommend this) and 50"
      );
    } else if (shares <= 0) {
      alert("Are you sure that's the correct number of shares?");
    } else {

      let body;

      let url;

      if (form.fcf1) {
        let fcf1;
        let fcf2;
        let fcf3;
        let fcf4;
        let fcf5;

        fcf1 = form.fcf1.value * 1000;
        fcf2 = form.fcf2.value * 1000;
        fcf3 = form.fcf3.value * 1000;
        fcf4 = form.fcf4.value * 1000;
        fcf5 = form.fcf5.value * 1000;

        const fcf = [fcf5, fcf4, fcf3, fcf2, fcf1];

        if (growth) {
          growth += 100;
          url = "http://localhost:8765/stock-provider/fcf/" + growth;
        } else {
          url = "http://localhost:8765/stock-provider/fcf";
        }

        body = {
          desiredReturn: roi,
          currentEquity: equity,
          marginOfSafety: mos,
          shares: shares,
          freeCashFlow: fcf,
          ticker: ticker.toUpperCase(),
        };
        console.log("pre-request body:")
        console.log(body);

        fetch(
          url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
          }
        ).then(res => res.json()).then(res=> {
          console.log("response:");
          console.log(res);
          stocks.push(res);
          setStockState([...stocks]);
        }).catch(err => console.log(err));

      } else {
        let cf1;
        let cf2;
        let cf3;
        let cf4;
        let cf5;
        let capex1;
        let capex2;
        let capex3;
        let capex4;
        let capex5;

        cf1 = form.cf1.value * 1000;
        cf2 = form.cf2.value * 1000;
        cf3 = form.cf3.value * 1000;
        cf4 = form.cf4.value * 1000;
        cf5 = form.cf5.value * 1000;

        capex1 = form.capex1.value * 1000;
        capex2 = form.capex2.value * 1000;
        capex3 = form.capex3.value * 1000;
        capex4 = form.capex4.value * 1000;
        capex5 = form.capex5.value * 1000;

        const cf = [cf5, cf4, cf3, cf2, cf1];
        const capex = [capex5, capex4, capex3, capex2, capex1];

        if (growth) {
          growth += 100;
          url = "http://localhost:8765/stock-provider/" + growth;
        } else {
          url = "http://localhost:8765/stock-provider";
        }


        body = {
          desiredReturn: roi,
          currentEquity: equity,
          marginOfSafety: mos,
          shares: shares,
          cashFlows: cf,
          capitalExpenditures: capex,
          ticker: ticker.toUpperCase(),
        };

        console.log("pre-request body:")
        console.log(body);

        fetch(
          url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
          }
        ).then(res => res.json()).then(res=> {
          console.log("response:");
          console.log(res);
          stocks.push(res);
          setStockState([...stocks]);
        }).catch(err => console.log(err));
      }
    }
  };

  const fixedModalToggle = () => {
    setFixedHowToState(!fixedHowToState);
  };

  const stockModalToggle = () => {
    setStockHowToState(!stockHowToState);
  };

  const fixedHowToModal = (
    <div className="modal is-active">
      <div
        onClick={() => setFixedHowToState(false)}
        className="modal-background"
      ></div>
      <div className="modal-content">
        <HowToFixed />
      </div>
      <button
        onClick={() => setFixedHowToState(false)}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  );

  const stockHowToModal = (
    <div className="modal is-active">
      <div
        onClick={() => setStockHowToState(false)}
        className="modal-background"
      ></div>
      <div className="modal-content">
        <HowToStock />
      </div>
      <button
        onClick={() => setStockHowToState(false)}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  );

  return (
    <main>
      <AssetContext.Provider value={[...assets]}>
        {fixedHowToState && fixedHowToModal}
        {stockHowToState && stockHowToModal}
        <Container>
          <Row>
            <br></br>
            <Navigation />
          </Row>
        </Container>
        <br></br>
        <Container>
          <Row>
            <CardGroup>
              <FixedCard getResult={getResult} toggleModal={fixedModalToggle} />
              <br></br>
              <StockCard getStock={getStockPrice} toggleModal={stockModalToggle}  />
              <br></br>
              <ResultCard />
            </CardGroup>
          </Row>
        </Container>
        <br></br>
        <br></br>
      </AssetContext.Provider>
    </main>
  );
};

export default GrowthCalculator;
