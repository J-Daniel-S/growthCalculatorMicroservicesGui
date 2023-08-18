import React from "react";

const HowToFixed = () => {
  return (
    <article className="card">
      <header className="card-header">
        <p className="card-header-title block">
          Certificate: for CDs or savings accounts
        </p>
      </header>
      <section className="card-content block">
        <div className="content">
          This one's simple. Just put in the total investment amount, the
          interest rate, and the length to get the ending balance. The compound
          frequency influences the ending balance; more frequent compounding
          results in a higher ending balance.
        </div>
      </section>
      <hr></hr>
      <section className="card-header">
        <p className="card-header-title block">Bonds</p>
      </section>
      <section className="card-content block">
        <div className="content">
          This will tell you the end balance of any bond purchases you make.
          Enter the price of each bond, the interest rate, the length to
          maturity, the payment frequency, and how many you purchased. Take note
          of whether you purchased your bonds at a premium (at greater than the
          principle amount) or at a discount (for less than principle). Some
          bonds pay interest throughout the issue length whilst others pay at
          the end. Set the frequency as accurately as possible.
        </div>
      </section>
    </article>
  );
};

export default HowToFixed;
