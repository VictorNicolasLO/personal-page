import styled from 'styled-components';
import { deviceMax } from '../../../utils/devices';
export const EventContainer = styled.div`
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
export const DateContainer = styled.div`
  letter-spacing: 0;
  color: #8d8d8d;
  font-weight: 100;
  font-size: 18px;
  max-width: 300px;
  width: 100%;
  text-align: left;
`;

export const InfoContainer = styled.div`
  max-width: 300px;
  color: #8d8d8d;
  width: 100%;
  text-align: left;
`;

export const TitleContainer = styled.div`
  color: #8d8d8d;
  text-align: left;
  padding-left: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;
