import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useIsIntersectingByObserver from "../../hooks/use-is-intersecting-by-observer";
export const createAnimationComponent = ({
  keyframes: keyframesAnimation,
  component,
  easing: defaultEasing,
  duration: defaultDuration,
  extraCss,
}) => (component ? styled(component) : styled.div)`
  opacity: 0;
  animation: ${keyframes`${keyframesAnimation}`} ${({ animationDuration }) =>
    animationDuration || defaultDuration || 0}s;
  animation-delay: ${({ animationDelay }) => animationDelay || 0}s;
  animation-fill-mode: forwards;
  ${({ animationEasing }) =>
    animationEasing || defaultEasing
      ? `animation-timing-function: ${animationEasing || defaultEasing};`
      : ""};
  ${extraCss}
`;

export const createAnimationScrolleableComponent = ({
  keyframes: keyframesAnimation,
  component,
  easing: defaultEasing,
  duration: defaultDuration,
  extraCss,
}) => {
  const animationKeyframes = keyframes`${keyframesAnimation}`;
  const AnnimatedComponent = (component ? styled(component) : styled.div)`
  opacity: 0;
  animation: ${({ enableAnimation }) =>
      enableAnimation ? animationKeyframes : ""} ${({ animationDuration }) =>
        animationDuration || defaultDuration || 0}s;
  animation-delay: ${({ animationDelay }) => animationDelay || 0}s;
  animation-fill-mode: forwards;
  ${({ animationEasing }) =>
      animationEasing || defaultEasing
        ? `animation-timing-function: ${animationEasing || defaultEasing};`
        : ""};
  ${extraCss}
`;
  const AnimatedComponentWrapper = (props) => {
    const [element, setElement] = useState(null);
    const isIntersecting = useIsIntersectingByObserver(
      element,
      { threshold: .5 }, { keepTrue: true }
    );

    return (
      <AnnimatedComponent
        {...props}
        enableAnimation={isIntersecting}
        ref={(comingElement) => { setElement(comingElement); }}
      />
    );
  };
  return AnimatedComponentWrapper;
};

// TODO
export const createStatefulAnimationComponent = ({
  keyframes: keyframesAnimation,
  component,
  easing: defaultEasing,
  duration: defaultDuration,
  extraCss,
}) => (component ? styled(component) : styled.div)`
  opacity: 0;
  animation: ${keyframes`${keyframesAnimation}`} ${({ animationDuration }) =>
    animationDuration || defaultDuration || 0}s;
  animation-delay: ${({ animationDelay }) => animationDelay || 0}s;
  animation-fill-mode: forwards;
  ${({ animationEasing }) =>
    animationEasing || defaultEasing
      ? `animation-timing-function: ${animationEasing || defaultEasing};`
      : ""};
  ${extraCss}
`;
