import React, { useState } from "react";

const WordInput = ({ onGuess, arrLetters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const letter = inputValue.trim().toLowerCase();
    if (letter && !arrLetters.includes(letter)) {
      onGuess(letter);
    }
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength="1"
        className="form-control"
        autoFocus
        required
      />
      <br />
      <button type="submit" className="btn">
        GO!
      </button>
    </form>
  );
};

export default WordInput;
