import styled, { keyframes } from 'styled-components';

const animationShow = keyframes`
from{
  opacity:0;
  transform:translateY(50px)
}
to{
  opacity:1;
  transform:translateY(0)
}
`;

const AnimationTopDown = keyframes`
from{
  opacity:0;
  transform:translateY(-40%)
}
to{
  opacity:1;
  transform:translateY(0%)
}
`;

const animationOpacity = keyframes`
from{
  opacity:0;


}
to{
  opacity:1;
}
`;

const animationScale = keyframes`
from{
  opacity:0;
  transform: scale(0);

}
to{
  opacity:1;
  transform: scale(1);
}
`;

export const AnimationBottomToUp = styled.div`
  opacity: 0;
  animation: ${animationShow} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;

export const AnimationTopToDown = styled.div`
  opacity: 0;
  animation: ${AnimationTopDown} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;

export const AnimationOpacity = styled.div`
  opacity: 0;
  animation: ${animationOpacity} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;

export const AnimationScale = styled.div`
  opacity: 0;
  animation: ${animationScale} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;
