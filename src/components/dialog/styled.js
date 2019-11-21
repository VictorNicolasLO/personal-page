import styled, { keyframes } from 'styled-components';

const backDropAnimation = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`;

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  laeft: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90000;
  animation: ${backDropAnimation} 0.2s;
`;
