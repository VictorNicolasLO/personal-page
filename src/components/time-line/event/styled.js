import styled from 'styled-components';
export const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    & > .date-container {
      text-align: right;
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
