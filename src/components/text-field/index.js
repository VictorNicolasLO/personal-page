import React from 'react';
import {
  TextFieldContainer,
  InputText,
  LabelContainer,
  InputArea,
  ErrorContainer,
} from './styled';

function TextField({ label, multiline, onInput, error, value }) {
  return (
    <TextFieldContainer>
      <LabelContainer>{label}</LabelContainer>
      {multiline ? (
        <InputArea value={value} onInput={onInput} />
      ) : (
        <InputText value={value} onInput={onInput} />
      )}
      <ErrorContainer
        style={{
          opacity: error ? 1 : 0,
          transform: `translateY(${error ? 10 : 0}px)`,
        }}>
        {error || <br />}
      </ErrorContainer>
    </TextFieldContainer>
  );
}

export default TextField;
