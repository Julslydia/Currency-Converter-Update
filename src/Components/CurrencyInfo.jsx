import React from "react";

const CurrencyInfo = (props) => {
  return (
    <div className="info-text">
      <div className="currency-info">
        The current rate {props.currencyInfo} for {props.currencyData} equals to{" "}
        {props.currencyAmount.toFixed(2)} PLN
      </div>
    </div>
  );
};

export default CurrencyInfo;
