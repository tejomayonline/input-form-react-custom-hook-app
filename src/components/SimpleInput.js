import React from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    inputVal: nameInput,
    isInputValid: isNameInputValid,
    onChangeHandler: onNameChangeHandler,
    onInputBlur: onNameInputBlur,
    hasError: hasNameError,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    inputVal: emailInput,
    isInputValid: isEmailInputValid,
    onChangeHandler: onEmailChangeHandler,
    onInputBlur: onEmailInputBlur,
    reset: resetEmailInput,
    hasError: hasEmailError,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;

  if (isNameInputValid && isEmailInputValid) {
    isFormValid = true;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={["form-control", hasNameError && "invalid"].join(" ")}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={onNameInputBlur}
          value={nameInput}
          onChange={onNameChangeHandler}
        />
        {hasNameError && <p className="error-text">Please enter valid input</p>}
      </div>

      <div className={["form-control", hasEmailError && "invalid"].join(" ")}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={onEmailInputBlur}
          value={emailInput}
          onChange={onEmailChangeHandler}
        />
        {hasEmailError && (
          <p className="error-text">Please enter valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
