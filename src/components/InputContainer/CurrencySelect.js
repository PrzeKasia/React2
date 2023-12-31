import "./InputStyles.css";

function CurrencySelect({ currencyCode, onCurrencyChange }) {
  return (
    <div className="input-container">
      <label htmlFor="currency">Wybierz walutę: </label>
      <select className="currency" name="currency">
        <option value="EUR">Euro (EUR)</option>
        <option value="USD">Dolary amerykańskie (USD)</option>
        <option value="CHF">Franki szwajcarskie (CHF)</option>
      </select>
    </div>
  );
}

export default CurrencySelect;
