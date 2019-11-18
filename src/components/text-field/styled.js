import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  padding: 10px;
`;
export const InputText = styled.input`
  outline: none;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: none;
  padding: 10px;
  font-size: 1.5em;
  width: 100%;
  border-radius: 5px;
  max-width: 700px;
  min-width: 700px;
  &:focus {
    outline: none;
    border: none;
  }
`;
