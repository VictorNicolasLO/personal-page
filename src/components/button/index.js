import React from 'react';
import { AnimationScale } from '../animations';

import { ButtonContainer } from './styled';
import { useThemeProvider } from '../../providers/theme.provider';

import { BarLoader } from 'react-spinners';

function Button({
  color,
  onClick,
  size,
  label,
  style,
  className,
  loading,
  disable,
}) {
  const {
    color: { primary, secondary },
  } = useThemeProvider();

  return (
    <ButtonContainer
      style={style}
      role="button"
      className={className}
      size={size}
      color={color}
      primaryColor={primary}
      secondaryColor={secondary}
      onClick={!disable ? onClick : () => {}}>
      {loading ? (
        <AnimationScale time={0.5} delay={0.2}>
          <div>
            <BarLoader color={primary} />
          </div>
        </AnimationScale>
      ) : (
        <div>{label}</div>
      )}
    </ButtonContainer>
  );
}

export default Button;
