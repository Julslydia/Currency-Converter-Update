import React from "react";
import NumberFormat from "react-number-format";

const CurrencyInput = (props) => {
  return (
    <NumberFormat
      className="amount-convert"
      value={props.amount}
      onChange={props.inputChange}
      placeholder="Amount"
      decimalSeparator="."
      allowedDecimalSeparators=","
    />
  );
};

export default CurrencyInput;
