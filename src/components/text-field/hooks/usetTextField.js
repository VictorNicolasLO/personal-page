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

  return {
    input: {
      error,
      onInput,
    },
    validate,
    text,
  };
}

export default useTextField;
