import styled, { keyframes } from 'styled-components';

const showToastAnimation = keyframes`
  from{
    opacity:0;
    transform: scaleX(0);
  }
  to{
    opacity:1;
    transform: scaleX(1);
  }
`;

const showOpacity = keyframes`
  from{
    opacity:0;

  }
  to{
    opacity:1;

  }
`;

export const NotificationContainer = styled.div`
  max-width: 400px;
  color: gray;
  padding: 10px 20px;
  z-index: 9000;
  background: ${({ background }) => background};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: fixed;
  top: 10px;
  left: 0;
  transition: 0.2s;
  right: 0;
  margin: auto;
  animation: ${showToastAnimation} 0.4s;
  & > * {
    opacity: 0;
    animation: ${showOpacity} 0.4s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }
`;
