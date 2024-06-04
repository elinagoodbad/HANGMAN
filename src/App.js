import React, { useState } from "react";
import WordDisplay from "./components/WordDisplay";
import WordInput from "./components/WordInput";
import HangmanDrawing from "./components/HangmanDrawing";

const App = () => {
  const [word, setWord] = useState("bootcamp");
  const [arrLetters, setArrLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  const maxAttempts = 7;

  const handleGuess = (letter) => {
    if (!arrLetters.includes(letter)) {
      setArrLetters([...arrLetters, letter]);
      if (!word.includes(letter)) {
        setWrong(wrong + 1);
      }
    }
  };

  const isGameOver = wrong >= maxAttempts;
  const isGameWon = word
    .split("")
    .every((letter) => arrLetters.includes(letter));

  return (
    <div className="App">
      <h1>HANGMAN</h1>
      <HangmanDrawing wrong={wrong} />
      <WordDisplay word={word} arrLetters={arrLetters} />
      {isGameOver ? (
        <h2>
          GAME OVER!
          <br />
          The word was: {word}
        </h2>
      ) : isGameWon ? (
        <h2>Hooray! You won! {word}</h2>
      ) : (
        <WordInput onGuess={handleGuess} arrLetters={arrLetters} />
      )}
      <p>
        YOUR ATTEMPTS: {wrong} out of {maxAttempts}
      </p>
    </div>
  );
};

export default App;
