import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput/TextInput";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("idle");
  const [disabledInput, setDisabledInput] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.log({ answer });

  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses];
    nextGuesses.push({ label: guess, id: crypto.randomUUID() });
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setDisabledInput(true);
      if (guess !== answer) {
        setStatus("lose");
      }
    }
    if (guess === answer) {
      setStatus("win");
      setDisabledInput(true);
    }
    setGuesses(nextGuesses);
    setGuess("");
  }

  function handleChangeInput(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleClickRestart() {
    setGuesses([]);
    setAnswer(sample(WORDS));
    setGuess("");
    setDisabledInput(false);
    setStatus("idle");
  }

  return (
    <>
      <div class="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((item, index) => (
          <Guess guess={guesses[index]} answer={answer} />
        ))}
      </div>
      <TextInput
        guess={guess}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
        disabledInput={disabledInput}
      />
      {status === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
          <button
            onClick={handleClickRestart}
            style={{
              border: "1px solid",
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingTop: "4px",
              paddingBottom: "4px",
              borderRadius: '14px',
              marginTop: '2px',
              alignItems: 'center',
            }}
          >
            Restart Game
          </button>
        </div>
      ) : status === "lose" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button
            onClick={handleClickRestart}
            style={{
              border: "1px solid",
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingTop: "4px",
              paddingBottom: "4px",
              borderRadius: '14px',
              marginTop: '2px',
              alignItems: 'center',
            }}
          >Restart Game</button>
        </div>
      ) : null}
    </>
  );
}

export default Game;
