import React from 'react';
import { CardContainer } from './styled';

function Card({ children, style, className }) {
  return <CardContainer {...{ style, className }}>{children}</CardContainer>;
}

export default Card;
