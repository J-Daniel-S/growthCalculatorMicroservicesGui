import React, { useState } from "react";

import Fcf from "./stockElements/Fcf";
import OpsCashFlow from "./stockElements/OpsCashFlow";

const StockCard = (props) => {
  const [fcf, setFcf] = useState(true);
  const [mosState, setMosState] = useState(false);
  const [growthState, setGrowthState] = useState(false);
  const [roiState, setRoiState] = useState(false);

  const toggleFcf = () => {
    setFcf(true);
  };

  const toggleNoFcf = () => {
    setFcf(false);
  };

  const linkCursor = { cursor: "pointer" };

  const renderGrowthTooltip = () => {
    setGrowthState(!growthState);
  };

  const renderRoiTooltip = () => setRoiState(!roiState);

  const renderMosTooltip = () => {
    setMosState(!mosState);
  };

  const mosTip = (
    <div className="notification is-info is-light">
      <button
        onClick={() => renderMosTooltip()}
        className="delete"
      ></button>
      Margin of safety. Click the question mark above.
    </div>
  );

  const growthTip = (
    <div className="notification is-info is-light">
      <button
        onClick={() => renderGrowthTooltip()}
        className="delete"
      ></button>
      Only enter a growth rate% here if you have a good reason to believe yours
      is correct
    </div>
  );

  const roiTip = (
    <div className="notification is-info is-light">
      <button
        onClick={() => renderRoiTooltip()}
        className="delete"
      ></button>
      Return on investment. Should be {">"}6%
    </div>
  );

  return (
    <article className="card">
      <header className="card-header">
        <p className="card-header-title">
          <button
            className="button is-link is-light is-large"
            onClick={props.toggleModal}
          >
            <i
              style={linkCursor}
              className="glyphicon glyphicon-question-sign"
            ></i>
          </button>
          Share price calculator
        </p>
      </header>
      <section className="buttons container">
        <div className="column">
          <button
            className="button is-link is-light is-large"
            onClick={() => toggleFcf()}
          >
            Enter free cash flow
          </button>
        </div>
        <div className="column">
          <button
            className="button is-link is-light is-large"
            onClick={() => toggleNoFcf()}
          >
            Calculate free cash flow
          </button>
        </div>
      </section>
      <br></br>
      <article className="container">
        {fcf ? (
          <Fcf
            getStock={props.getStock}
            renderGrowthTooltip={renderGrowthTooltip}
            renderMosTooltip={renderMosTooltip}
            renderRoiTooltip={renderRoiTooltip}
            mosState={mosState}
            roiState={roiState}
            growthState={growthState}
            roiTip={roiTip}
            mosTip={mosTip}
            growthTip={growthTip}
          />
        ) : (
          <OpsCashFlow
            getStock={props.getStock}
            renderGrowthTooltip={renderGrowthTooltip}
            renderMosTooltip={renderMosTooltip}
            renderRoiTooltip={renderRoiTooltip}
            mosState={mosState}
            roiState={roiState}
            growthState={growthState}
            roiTip={roiTip}
            mosTip={mosTip}
            growthTip={growthTip}
          />
        )}
      </article>
      <br></br>
    </article>
  );
};

export default StockCard;
