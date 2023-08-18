import React from "react";

const HowToStock = () => {
  const field = { fontWeight: 500 };

  return (
    <article className="card">
      <header className="card-header">
        <p className="card-header-title block">
          Stock: with free cash flow or without
        </p>
      </header>
      <section className="card-content block">
        <div className="content">
          There is a lot that goes into assigning a dollar value to a stock but
          this tool can help you determine an approximate fair value and a good
          value at which to purchase said stock based on the previous 5 years
          cash flow statements and the current shareholder equity. (No gains are
          ever guaranteed and nothing here is a recommendation to buy any
          stock).
          <br></br>
          There are a few tools available on the navbar above to help you find
          stocks if you don't have any in mind. Screen based on your desired
          criteria and then come on back here with some of your favorite
          tickers. You can take your cash flows values from anywhere if you
          would rather but the search bar above takes you to the cash flows
          statements provided by Yahoo finance given whatever stock ticker you
          search for.
        </div>
      </section>
      <section className="card-content block">
        <div className="content">
          <span style={field}>
            <strong>Operations cash flow and Capital expenditures:</strong>
          </span>{" "}
          If you want to get your own numbers feel free to enter those numbers
          <br></br>
          <span style={field}><strong>Free cash flow:</strong></span> When the new tab opens, the
          values on the very bottom of the table (labeled Free Cash Flow) can be
          entered into the fields below starting with TTM in the "current"
          field.
          <br></br>
          <span style={field}><strong>Current equity:</strong></span> above the table you'll see
          three links. Click "Balance Sheet". When the new sheet pops up, expand
          the "Liabilities and stockholder's equity" tab and copy the most
          recent number from the "Stockholder's Equity" row.
          <br></br>
          <span style={field}><strong>MOS:</strong></span> margin of safety this protects your
          investment. For large companies a mos of 25% is fine. As companies get
          smaller, increase your mos to up to 50%. This helps protect you in
          case the valuation is wrong or if other factors lead to the company
          permanently decreasing in value.
          <br></br>
          <span style={field}><strong>Set growth rate:</strong></span> sometimes cash flows are
          inconsistent. You can enter your own estimated growth rate if you
          like.
          <br></br>
          <span style={field}><strong>ROI:</strong></span> return on investment. Sets the fair
          price for the stock based on the return on investment you require from
          your stock purchase.
          <br></br>
          <span style={field}><strong>Shares:</strong></span> the total number of shares the
          company has issued. It's on the "Summary" page on Yahoo finance.
          <br></br>
          <span style={field}><strong>Ticker:</strong></span> not necessary but will help you
          keep your valuations straight in the table if you enter more than one
          set of numbers
        </div>
      </section>
    </article>
  );
};

export default HowToStock;
