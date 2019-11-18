import React from 'react';
import {
  TextFieldContainer,
  InputText,
  LabelContainer,
  InputArea,
} from './styled';

function TextField({ label, multiline }) {
  return (
    <TextFieldContainer>
      <LabelContainer>{label}</LabelContainer>
      {multiline ? <InputArea /> : <InputText />}
    </TextFieldContainer>
  );
}

export default TextField;
