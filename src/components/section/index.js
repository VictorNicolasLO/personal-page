import React from 'react';
import styled from 'styled-components';
import { deviceMax } from '../../utils/devices';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  @media ${deviceMax.mobileS} {
    justify-content: center;
    align-items: flex-start;
    height: fit-content;
    padding-top: 0;
  }
`;

function Section({ style, className, type, children }) {
  return (
    <SectionContainer
      style={{
        ...{ background: type === 'primary' ? '#262626' : '#E6E6E6' },
        ...style,
      }}
      className={className}>
      {children}
    </SectionContainer>
  );
}

export default Section;
