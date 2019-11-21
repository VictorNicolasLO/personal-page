import { useState } from 'react';

function useTextField(validation, errorMessage) {
  const [text, setText] = useState('');
  const [error, setError] = useState(undefined);

  function onInput(ev) {
    setText(ev.target.value);
    if (error) setError(undefined);
  }

  function validate() {
    const newIsValid = validation(text);
    if (!newIsValid) setError(errorMessage);
    return newIsValid;
  }

  function clear() {
    setText('');
  }

  return {
    input: {
      error,
      onInput,
      value: text,
    },
    validate,
    text,
    clear,
  };
}

export default useTextField;
