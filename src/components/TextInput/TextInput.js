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
        pattern="[A-Za-z]{1,5}$"
        required={true}
        disabled={disabledInput}
      />
    </form>
  );
}

export default TextInput;
