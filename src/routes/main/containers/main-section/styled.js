import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

export const Container = styled(Row)`
  z-index: 900;
  & > * {
    margin: 15px 0;
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
`;

export const SocialContainers = styled(Col)`
  margin: 0 10px;
`;
