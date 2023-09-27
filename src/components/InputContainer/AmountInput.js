import "./InputStyles.css";

function AmountInput({ amount, onAmountChange, pressEnter }) {
  return (
    <div className="input-container">
      <label htmlFor="amount">Podaj kwotę: </label>
      <input
        className="currency"
        type="number"
        step="0.01"
        value={amount}
        onChange={onAmountChange}
        onKeyUp={pressEnter}
      />
    </div>
  );
}

export default AmountInput;
