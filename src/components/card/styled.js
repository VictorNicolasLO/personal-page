import styled from 'styled-components';

export const CardContainer = styled.div`

  &  > div > div {
    padding: 12px;
    display: inline-block;
    box-sizing: border-box;
    background: white;
  /* https://smoothshadows.com/#djEsMiw1LDAuMSw0LDQsMCwjMDMwNzEyLCNmM2Y0ZjYsI2ZmZmZmZiwy */
box-shadow: 0px 0px 0px rgba(3, 7, 18, 0.10),
  0px 1px 1px rgba(3, 7, 18, 0.08),
  0px 1px 1px rgba(3, 7, 18, 0.06),
  0px 3px 3px rgba(3, 7, 18, 0.04),
  0px 4px 4px rgba(3, 7, 18, 0.02);

    border-radius: 5px;
    margin-bottom: 4px;
    margin-top: 4px;
  }

`;
