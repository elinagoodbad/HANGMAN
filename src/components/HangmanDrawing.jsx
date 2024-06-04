import React from "react";

const HangmanDrawing = ({ wrong }) => {
  const parts = [
    <line x1="60" y1="20" x2="60" y2="50" key="rope" />,
    <circle cx="60" cy="70" r="20" key="head" />,
    <line x1="60" y1="90" x2="60" y2="150" key="body" />,
    <line x1="60" y1="110" x2="30" y2="90" key="left-arm" />,
    <line x1="60" y1="110" x2="90" y2="90" key="right-arm" />,
    <line x1="60" y1="150" x2="30" y2="180" key="left-leg" />,
    <line x1="60" y1="150" x2="90" y2="180" key="right-leg" />,
  ];

  return (
    <svg height="200" width="120" className="hangman">
      <line x1="10" y1="200" x2="100" y2="200" />
      <line x1="10" y1="20" x2="10" y2="200" />
      <line x1="10" y1="20" x2="60" y2="20" />
      {parts.slice(0, wrong)}
    </svg>
  );
};

export default HangmanDrawing;
