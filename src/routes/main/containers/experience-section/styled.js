import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const Container = styled(Row)`
  max-width: 1000px;
  & > * {
    margin: 20px 0;
  }
`;
