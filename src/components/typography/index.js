import React from 'react';

function Typography({ variant, children, className, style, color }) {
  const variants = {
    h1: { font: 'Medium 38px/45px ', fontSize: '45px', fontWeight: 'regular' },
    h2: { font: 'Light 38px/51px', fontSize: '38px', fontWeight: '100' },
    h3: { font: 'Light 32px/43px', fontSize: '32px', fontWeight: '100' },
    h4: { font: 'Regular 24px/32px', fontSize: '24px', fontWeight: 'regular' },
    body1: { font: 'Light 18px/24px', fontSize: '18px', fontWeight: '100' },
    body2: {
      font: 'Regular 12px/16px',
      fontSize: '12px',
      fontWeight: 'regular',
    },
  };
  return (
    <div
      style={{
        ...{ color: '#262626' },
        ...variants[variant],
        ...{ color },
        ...style,
      }}
      className={className || ''}>
      {children}
    </div>
  );
}

export default Typography;
