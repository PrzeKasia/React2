import "./Button.css";

function Button({ handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
      Przelicz
    </button>
  );
}

export default Button;
