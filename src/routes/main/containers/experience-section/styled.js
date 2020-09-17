import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import { createAnimationScrolleableComponent } from "../../../../components/animation";

export const Container = styled(Row)`
  max-width: 1000px;
  & > * {
    margin: 20px 0;
  }
`;

export const EASE_OUT_CIRC = "cubic-bezier(0,1.02,.5,1)";
export const ShowScrollable = createAnimationScrolleableComponent({
  easing: EASE_OUT_CIRC,
  duration: 1,
  keyframes: `
  from{
    opacity:0;
    transform:translateY(100px)
  }
  to{
    opacity:1;
    transform:translateY(0)
  }
  `,
});
