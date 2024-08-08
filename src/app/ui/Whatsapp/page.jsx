import React from 'react';

const WhatsAppIcon = () => {
  const whatsappNumber = '+923009709543';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    cursor: 'pointer',
  };

  const iconImageStyle = {
    width: '35px',
    height: '35px',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        style={iconImageStyle}
      />
    </a>
  );
};

export default WhatsAppIcon;
