import React from "react";

const CurrencyOutput = (props) => {
  return (
    <input
      className="amount-convert"
      value={props.outputAmount}
      type="text"
      placeholder="PLN"
      readOnly
    />
  );
};

export default CurrencyOutput;
