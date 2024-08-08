import React, { useState } from 'react';
import Div from '../Div';
import { Modal } from 'antd'; // Import Modal from antd
//import './styles.css'; // Import the stylesheet where custom CSS is defined

export default function Portfolio({ src, title, subtitle, variant }) {
  const [open, setOpen] = useState(false); // State to control modal visibility

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
        onClick={showModal} // Open modal on click
        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable area
      >
        <>
          <Div className="cs-portfolio_hover" />
          <Div
            className="cs-portfolio_bg cs-bg"
            style={{ backgroundImage: `url("${src}")` }}
          />
          <Div className="cs-portfolio_info">
            <Div className="cs-portfolio_info_bg cs-accent_bg" />
            <h2 className="cs-portfolio_title">{title}</h2>
            <Div className="cs-portfolio_subtitle">{subtitle}</Div>
          </Div>
        </>
      </div>
      
      <Modal
        title={title}
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width= {1000} // Apply custom class
      >
        <img src={src} alt={title} style={{ width: '100%' }} /> {/* Display image */}
      </Modal>
    </>
  );
}
