import React from "react";
import "./InputStyles.css";

function CurrencySelect({ currencyCode, onCurrencyChange }) {
  return (
    <div className="input-container">
      <label htmlFor="currency">Wybierz walutę: </label>
      <select
        className="currency"
        id="currency"
        value={currencyCode}
        onChange={onCurrencyChange}
      >
        <option value="EUR">Euro (EUR)</option>
        <option value="USD">Dolary amerykańskie (USD)</option>
        <option value="CHF">Franki szwajcarskie (CHF)</option>
      </select>
    </div>
  );
}

export default CurrencySelect;
