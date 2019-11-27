import styled from 'styled-components';
import { deviceMax } from '../../utils/devices';
export const TimeLineContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: auto;
  padding: 30px 0;
  padding-bottom: 80px;
`;
export const VerticalLine = styled.div`
  width: 2px;
  heigh: 100%;
  background: #8d8d8d;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  @media ${deviceMax.mobileL} {
    opacity: 0;
  }
`;

const Dot = styled.div`
  width: 50px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 50%;
  @media ${deviceMax.mobileL} {
    opacity: 0;
  }
`;

export const TopDot = styled(Dot)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
`;

export const BottomDot = styled(Dot)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
