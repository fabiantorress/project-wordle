import React from "react";

function TextInput({guess, handleSubmit, handleChangeInput, disabledInput}) {

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChangeInput}
        pattern="[A-Za-z]{5}$"
        maxLength={5}
        minLength={5}
        required={true}
        disabled={disabledInput}
        title="5 letter word"
      />
    </form>
  );
}

export default TextInput;
