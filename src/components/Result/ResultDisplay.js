import React from "react";
import "./Result.css";

function ResultDisplay({ result }) {
  return (
    <div className="result" id="result">
      {result}
    </div>
  );
}

export default ResultDisplay;
