import React, { useState } from "react";
import CurrencySelect from "./components/inputContainers/CurrencySelect";
import AmountInput from "./components/inputContainers/AmountInput";
import ResultDisplay from "./components/Result/ResultDisplay";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [currencyCode, setCurrencyCode] = useState("EUR");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState("");

  const handleCurrencyChange = (event) => {
    setCurrencyCode(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleConvert();
    }
  };
  const handleConvert = async () => {
    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`
      );

      if (!response.ok) {
        setResult("Błąd: Nie można pobrać kursu waluty.");
        return;
      }

      const data = await response.json();
      const exchangeRate = data.rates[0].mid;

      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setResult("Podaj prawidłową kwotę większą od zera.");
        return;
      }

      const convertedAmount = (parsedAmount * exchangeRate).toFixed(2);

      setResult(
        `${parsedAmount.toFixed(2)} ${currencyCode} = ${convertedAmount} PLN`
      );
    } catch (error) {
      console.error("Wystąpił błąd:", error);
      setResult("Wystąpił błąd podczas przeliczania waluty.");
    }
  };

  return (
    <div className="container">
      <h1>Przelicznik Walut</h1>
      <CurrencySelect
        currencyCode={currencyCode}
        onCurrencyChange={handleCurrencyChange}
      />
      <AmountInput
        amount={amount}
        onAmountChange={handleAmountChange}
        pressEnter={handleKeyUp}
      />
      <Button handleClick={handleConvert} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
