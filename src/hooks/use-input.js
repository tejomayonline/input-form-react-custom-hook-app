import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "INPUT_CHANGE":
      newState = {
        ...state,
        value: action.value,
      };
      break;
    case "ON_BLUR":
      newState = {
        ...state,
        isTouched: true,
      };
      break;
    case "RESET_INPUT":
      newState = initialInputState;
      break;
    default:
      newState = state;
  }
  return newState;
};

const useInput = (validatedInput) => {
  // const [inputVal, setInputValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const [inputState, dispatchInputEvent] = useReducer(
    inputReducer,
    initialInputState
  );

  const isInputValid = validatedInput(inputState.value);
  const hasError = !isInputValid && inputState.isTouched;

  const onChangeHandler = (e) => {
    // setInputValue(e.target.value);
    dispatchInputEvent({ type: "INPUT_CHANGE", value: e.target.value });
  };
  const onInputBlur = (e) => {
    // setIsTouched(true);
    dispatchInputEvent({ type: "ON_BLUR" });
  };

  const reset = () => {
    dispatchInputEvent({ type: "RESET_INPUT" });
  };

  return {
    inputVal: inputState.value,
    isInputValid,
    onChangeHandler,
    onInputBlur,
    hasError,
    reset,
  };
};

export default useInput;
