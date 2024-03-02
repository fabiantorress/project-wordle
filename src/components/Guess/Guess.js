import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const characters = guess ? checkGuess(guess.label, answer) : "";
  const key = guess ? guess.id : crypto.randomUUID();
  return (
    <p className="guess" key={key}>
      {range(0, 5).map((item, index) => (
        <span className={`cell ${characters[index] ? characters[index].status : ""}`}>
          {characters[index] ? characters[index].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
