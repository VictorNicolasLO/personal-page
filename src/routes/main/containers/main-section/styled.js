import styled, { keyframes } from "styled-components";
import { Col, Row } from "react-flexbox-grid";

const showLine = keyframes`
  from{
    opacity:0;
    transform: scaleX(0);
  }
  to{
    opacity:1;
    transform: scaleX(1);
  }
`;

export const Container = styled(Row)`
  z-index: 900;
  & > * {
    margin: 12px 0;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Line = styled.div`
  position: relative;
  margin: 10px auto;
  max-width: 600px;
  width: 100%;
  height: 2px;
  background: white;
  opacity: 0;
  animation: ${showLine} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  animation-delay: 0.7s;

  animation-fill-mode: forwards;
`;

export const SocialContainers = styled(Col)`
  margin: 0 10px;
`;
