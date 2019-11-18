import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import Button from '../../../../components/button';
import { device } from '../../../../utils/devices';

export const Container = styled(Row)`
  & > * {
    margin: 10px 0;
  }
`;

export const CustomButton = styled(Button)`
  margin-left: 0;
  @media ${device.tablet} {
    margin-left: 480px;
  }
`;
