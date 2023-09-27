import "./InputStyles.css";

function AmountInput({ amount, onAmountChange, pressEnter }) {
  return (
    <div className="input-container">
      <label htmlFor="amount">Podaj kwotę: </label>
      <input
        className="currency"
        type="number"
        step="0.01"
        required
        min="0.01"
        name="amount"
      />
    </div>
  );
}

export default AmountInput;
