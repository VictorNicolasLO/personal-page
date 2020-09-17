import styled from "styled-components";
import { EASE_OUT_CIRC } from "../../../routes/main/containers/experience-section/styled";
import { deviceMax } from "../../../utils/devices";
import { createAnimationScrolleableComponent } from "../../animation";
export const EventContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  & > * {
    margin: 0 15px;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
    & > .date-container {
      text-align: right;
    }
  }
  @media ${deviceMax.mobileL} {
    margin-top: 50px;
    flex-direction: column-reverse;
    & > .date-container {
      padding-left: 20px;
      padding-bottom: 10px;
    }
    &:nth-child(odd) {
      flex-direction: column-reverse;
      & > .date-container {
        text-align: left;
      }
    }
  }
`;

export const EventContainer = createAnimationScrolleableComponent({
  component: EventContainerBase,
  easing: EASE_OUT_CIRC,
  duration: 0.6,
  keyframes: `
  from{
    opacity:0;
    transform:translateY(50px) scale(.9);
  }
  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }
  `,
});

export const DateContainer = styled.div`
  letter-spacing: 0;
  color: black;
  font-weight: 100;
  font-size: 18px;
  max-width: 300px;
  width: 100%;
  text-align: left;
`;

export const InfoContainer = styled.div`
  max-width: 300px;
  color: #2b2b2b;
  width: 100%;
  text-align: left;
`;

export const TitleContainer = styled.div`
  color: #4e4e4e;
  text-align: left;
  padding-left: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;
