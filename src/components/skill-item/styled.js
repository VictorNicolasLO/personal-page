import styled from "styled-components";

export const SkillItemContainer = styled.div`
  width: 180px;
  height: 180px;

  position: relative;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Overlay = styled.div`
  width: 180px;
  height: 180px;
  cursor: pointer;
  color: white;

  opacity: 0;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  transition: opacity 0.2s;
  &:hover {
    backdrop-filter: blur(5px);
    opacity: 1;
  }
`;
