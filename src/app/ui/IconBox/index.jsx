import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';

export default function IconBox({ title, subtitle, icon }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
      <img src={icon} alt="Icon" style={{ maxWidth: '60px' }} />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}


export function UniqueIconBox() {
  return (
    <div className="unique-section">
    <div className="unique-item">
      <img src={"/images/Adherence-to-Amazon-Guidelines-icon.png"} alt="Amazon Guidelines Icon" />
      <div>
        <h3>Adherence to Amazon Guidelines:</h3>
        <p>We are well-versed in Amazon's guidelines, ensuring all our designs meet platform standards.</p>
      </div>
    </div>
    <div className="unique-item">
      <img src={"/images/Outstanding-and-Memorable-Branding-icon.png"} alt="Memorable Branding Icon" />
      <div>
        <h3>Outstanding and Memorable Branding:</h3>
        <p>Our focus is on creating standout and memorable branding images that leave a lasting impression.</p>
      </div>
    </div>
    <div className="unique-item">
      <img src={"/images/Competitive-Edge-icon.png"} alt="Competitive Edge Icon" />
      <div>
        <h3>Competitive Edge:</h3>
        <p>We know how to make your brand stand out from competitors, providing you with a distinct market presence.</p>
      </div>
    </div>
    <div className="unique-item">
      <img src={"/images/Pro-Graphic-Designers-for-Amazon-Branding-icon.png"} alt="Pro-Graphic Designers Icon" />
      <div>
        <h3>Pro-Graphic Designers for Amazon Branding:</h3>
        <p>Our team comprises pro-graphic designers specializing in Amazon branding, bringing expertise to every project.</p>
      </div>
    </div>
    <div className="unique-item">
      <img src={"/images/Cutting-Edge-Software-and-High-Quality-Assets-icon.png"} alt="Cutting-Edge Software Icon" />
      <div>
        <h3>Cutting-Edge Software and High-Quality Assets:</h3>
        <p>We leverage the latest software and use high-quality assets to deliver top-notch design solutions.</p>
      </div>
    </div>
  </div>
  );
}

