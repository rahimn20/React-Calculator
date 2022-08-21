import React from "react";
import "./Calc.css";

function Calc() {

    const numpad = [
        {label: "7", buttonCount: 7, buttonPressed: 0},
        {label: "8", buttonCount: 8, buttonPressed: 0},
        {label: "9", buttonCount: 9, buttonPressed: 0},
        {label: "4", buttonCount: 4, buttonPressed: 0},
        {label: "5", buttonCount: 5, buttonPressed: 0},
        {label: "6", buttonCount: 6, buttonPressed: 0},
        {label: "1", buttonCount: 1, buttonPressed: 0},
        {label: "2", buttonCount: 2, buttonPressed: 0},
        {label: "3", buttonCount: 3, buttonPressed: 0},
        {label: "0", buttonCount: 0, buttonPressed: 0},
    ]

    const [numFields, setNumFields] = React.useState(numpad);

    // const handleNumClick = (event) => {
    //   setNumFields({numFields.buttonPressed: event.target.id});
    // }

  const [result, setResult] = React.useState("");
  const handleOnClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleBackspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleResults = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <div className="calc-wrapper">
        <input
          type="text"
          placeholder="0"
          value={result}
          id="answer"
          className="text-field"
        />
        <input
          type="button"
          value="Clear"
          className="button clear highlight"
          onClick={handleClear}
        />
        <input
          type="button"
          value="C"
          className="button highlight"
          onClick={handleBackspace}
        />
        <input
          type="button"
          value="/"
          className="button highlight"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={handleOnClick}
        />

        <input
          type="button"
          value="8"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="9"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="*"
          className="button highlight"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="-"
          className="button highlight"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="+"
          className="button highlight"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={handleOnClick}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={handleOnClick}
        />

        <input
          type="button"
          value="="
          className="button equal highlight"
          onClick={handleResults}
        />
      </div>
    </>
  );
}

export default Calc;
