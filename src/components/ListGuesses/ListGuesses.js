import React from "react";

function ListGuesses({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map(({label, id}) => (
        <p className="guess" id={id}>{label}</p>
      ))}
    </div>
  );
}

export default ListGuesses;
