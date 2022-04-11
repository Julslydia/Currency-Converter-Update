import React, { useEffect, useState } from "react";
import CurrencyHeader from "./Components/CurrencyHeader";
import CurrencyInfo from "./Components/CurrencyInfo";
import CurrencySelector from "./Components/CurrencySelector";
import CurrencyInput from "./Components/CurrencyInput";
import CurrencyOutput from "./Components/CurrencyOutput";
import "./App.css";

const API_URL = "https://api.nbp.pl/api/exchangerates/rates/a/";

const App = () => {
  const [currency, setCurrency] = useState("EUR");
  const [currencyDate, setCurrencyDate] = useState(0);
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);

  const amountAfterConvert = (currencyAmount * inputAmount).toFixed(2) + " PLN";

  useEffect(() => {
    fetch(API_URL + currency)
      .then((resp) => resp.json())
      .then((resp) => {
        setCurrencyAmount(resp.rates[0].mid);
        setCurrencyDate(resp.rates[0].effectiveDate);
      })
      .catch((error) => error + alert("Ooups, an error occured"));
  }, [currency]);

  return (
    <>
      <div className="container">
        <main>
          <CurrencyHeader />
          <CurrencyInfo
            currencyData={currencyDate}
            currencyInfo={currency}
            currencyAmount={currencyAmount}
          />
          <div className="container-title">
            <CurrencyInput
              inputChange={(e) => setInputAmount(e.target.value)}
            />
            <CurrencySelector
              selectClick={(e) => setCurrency(e.target.value)}
            />
            <span className="no-name-span">TO</span>
            <CurrencyOutput outputAmount={amountAfterConvert} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
