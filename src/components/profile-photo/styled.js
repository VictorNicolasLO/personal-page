import styled, { keyframes } from 'styled-components';
// Loader animation
const animation = keyframes`
 0%{
     transform: translate3d(-100%, 0, 0);
   }
  100%{
     transform: translate3d(100%, 0, 0);
   }
`;

export const ProfilePhotoContainer = styled.div`
  border-radius: 50%;
  wdith: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLoader = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: #dedede;

  position: relative;
  overflow: hidden;
  &:only-child {
    margin-top: 0;
  }

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: ${animation};
    animation-timing-function: linear;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    background: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
  }
`;
