import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  width: 100%;
  max-width: 700px;

  margin: auto;
`;
export const InputText = styled.input`
  outline: none;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: none;
  padding: 10px;
  font-size: 1.2em;
  width: 100%;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ErrorContainer = styled.div`
  color: red;
  text-align: left;

  transition: 0.2s;
`;

export const InputArea = styled.textarea`
  outline: none;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: none;
  padding: 10px;
  font-size: 1.2em;
  width: 100%;
  border-radius: 5px;
  height: 200px;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const LabelContainer = styled.div`
  text-align: left;
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 1.2em;
`;
