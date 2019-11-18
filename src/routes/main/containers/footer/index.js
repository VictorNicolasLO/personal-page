import React from 'react';

function Footer() {
  return (
    <div
      style={{
        width: '100%',
        height: '60px',
        display: 'flex',
        background: '#262626',
        boxSizing: 'border-box',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '50px',
      }}>
      <a
        href="https://github.com/VictorNicolasLO/personal-page"
        style={{ color: 'white', fontWeight: 'bold' }}>
        Check this Project in my repo!
      </a>
    </div>
  );
}

export default Footer;
