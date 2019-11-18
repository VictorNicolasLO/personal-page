import React from 'react';
import { ButtonContainer } from './styled';
import { useThemeCtx } from '../../ctx/theme.ctx';

function Button({ color, onClick, size, label, style, className }) {
  const {
    color: { primary, secondary },
  } = useThemeCtx();
  return (
    <ButtonContainer
      style={style}
      role="button"
      className={className}
      size={size}
      color={color}
      primaryColor={primary}
      secondaryColor={secondary}
      onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
