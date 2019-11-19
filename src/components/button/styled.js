import styled from 'styled-components';

const sizeOptions = {
  large: `padding:20px 100px; font-size:1.5em;   font-weight: 100;`,
  medium: `padding:15px 50px; font-size:1em;   font-weight: 100;`,
};

const colorOptions = (primary, secondary) => ({
  primary: `background:${primary} 0% 0% no-repeat padding-box; color: ${secondary};`,
  secondary: `background: ${secondary} 0% 0% no-repeat padding-box; color: ${primary};`,
});

export const ButtonContainer = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 40px;
  display: inline-block;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing: 4.9px;
  user-select: none;
  transition: 0.3s;
  ${({ size, color, primaryColor, secondaryColor }) =>
    `${sizeOptions[size]} ${colorOptions(primaryColor, secondaryColor)[color]}`}
  &:hover {
    box-shadow: 0px 8px 10px #00000039;
  }
  &:active {
    box-shadow: 0px 3px 10px #00000039;
    transform: scale(0.95);
  }
`;
