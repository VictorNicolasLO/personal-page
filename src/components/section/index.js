import React from 'react';
import styled from 'styled-components';

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
