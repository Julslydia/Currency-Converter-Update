import React from "react";

const currencyOptions = [
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "CHF",
    value: "CHF",
  },
];

const CurrencySelector = (props) => {
  return (
    <select className="select-currency-option" onChange={props.selectClick}>
      {currencyOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      ;
    </select>
  );
};

export default CurrencySelector;
