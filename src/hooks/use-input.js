import { useState } from "react";

const useInput = (validatedInput) => {
  const [inputVal, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isInputValid = validatedInput(inputVal);
  const hasError = !isInputValid && isTouched;

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onInputBlur = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputVal,
    isInputValid,
    onChangeHandler,
    onInputBlur,
    hasError,
    reset,
  };
};

export default useInput;
