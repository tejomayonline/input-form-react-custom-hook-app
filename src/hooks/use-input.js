import { useState } from "react";

const useInput = (validatedInput) => {
  const [inputVal, setInputValue] = useState("");
  const [isInputValid, setInputValid] = useState(null);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    if (validatedInput(e.target.value)) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  };
  const onInputBlur = (e) => {
    if (validatedInput(e.target.value)) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  };
  return {
    inputVal,
    isInputValid,
    onChangeHandler,
    onInputBlur,
    setInputValue,
  };
};

export default useInput;
