import React, { useState } from "react";
import "./index.css";

function Calculator() {
  const [calculation, setCalculation] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;
    setCalculation(calculation + value);
  };

  const handleClear = () => {
    setCalculation("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(calculation);
      setCalculation(result.toString());
    } catch (error) {
      setCalculation("Error");
    }
  };

  const handleChange = (e) => {
    setCalculation(e.target.value);
  };

  const handleSquareRoot = () => {
    setCalculation(`Math.sqrt(${calculation})`);
  };

  const handleSquared = () => {
    setCalculation(`Math.pow(${calculation}, 2)`);
  };

  const handlePower = () => {
    setCalculation(`Math.pow(${calculation},`);
  };

  const handleLog = () => {
    setCalculation(`Math.log10(${calculation})`);
  };

  const handleNaturalLog = () => {
    setCalculation(`Math.log(${calculation})`);
  };

  const handlePi = () => {
    setCalculation(`${Math.PI}`);
  };

  const handleE = () => {
    setCalculation(`${Math.E}`);
  };

  return (
    <div className="calculator">
      <textarea
        className="input"
        value={calculation}
        onChange={handleChange}
      />
      <div className="buttons">
        <button onClick={handleClear} className="button clear">
          AC
        </button>
        <button onClick={handleClick} className="button" value="(">
          (
        </button>
        <button onClick={handleClick} className="button" value=")">
          )
        </button>
        <button onClick={handleClick} className="button" value="/">
          ÷
        </button>
        <button onClick={handleClick} className="button" value="7">
          7
        </button>
        <button onClick={handleClick} className="button" value="8">
          8
        </button>
        <button onClick={handleClick} className="button" value="9">
          9
        </button>
        <button onClick={handleClick} className="button" value="*">
          ×
        </button>
        <button onClick={handleClick} className="button" value="4">
          4
        </button>
        <button onClick={handleClick} className="button" value="5">
          5
        </button>
        <button onClick={handleClick} className="button" value="6">
          6
        </button>
        <button onClick={handleClick} className="button" value="-">
          -
        </button>
        <button onClick={handleClick} className="button" value="1">
          1
        </button>
        <button onClick={handleClick} className="button" value="2">
          2
        </button>
        <button onClick={handleClick} className="button" value="3">
          3
        </button>
        <button onClick={handleClick} className="button" value="+">
          +
        </button>
        <button onClick={handleClick} className="button" value="0">
          0
        </button>
        <button onClick={handleClick} className="button" value=".">
          .
        </button>
        <button onClick={handleClick} className="button" value="Ans">
          Ans
        </button>
        <button onClick={handleClick} className="button" value="sin(">
            sin
        </button>    
        <button onClick={handleClick} className="button" value=".">
          .
        </button>
        <button onClick={handleClick} className="button" value="sin(">
          sin
        </button>
        <button onClick={handleClick} className="button" value="cos(">
          cos
        </button>
        <button onClick={handleClick} className="button" value="tan(">
          tan
        </button>
        <button onClick={handleClick} className="button" value="ln(">
          ln
        </button>
        <button onClick={handleClick} className="button" value="log(">
          log
        </button>
        <button onClick={handleClick} className="button" value="e^(">
          e^x
        </button>
        <button onClick={handleSquareRoot} className="button" value="sqrt(">
          √
        </button>
        <button onClick={handlePower} className="button" value="^">
          x^y
        </button>
        <button onClick={handleClick} className="button" value="%">
          %
        </button>
        <button onClick={handleCalculate} className="button equal" value="=">
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;