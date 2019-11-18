import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const Container = styled(Row)`
  & > * {
    margin: 10px 0;
  }
`;
