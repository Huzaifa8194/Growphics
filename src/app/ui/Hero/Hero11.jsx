import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import SocialWidget from '../Widget/SocialWidget';
import imgUrl from '../../../../public/images/hero_img_5.png'
import Image from 'next/image';

export default function Hero11({
  introTitle,
  title,
  subtitle,
  btnLink,
  btnText,
  experienceTitle,
  experienceNumber,
  projectTitle,
  projectNumber,
}) {
  return (
    <div className="cs-hero cs-style8 cs-shape_wrap_1" id="home">
      <div className="cs-shape_1" />
      <div className="container">
        <div className="cs-hero_img_box">
          <Image src={imgUrl} alt="Hero" placeholder='blur' />
          <div className="cs-hero_card cs-position_1">
            <h3 className="mb-0 text-black">{experienceNumber}</h3>
            <p className="mb-0 text-black">{experienceTitle}</p>
          </div>
          <div className="cs-hero_card cs-position_2">
            <h3 className="mb-0 text-black">{projectTitle}</h3>
            <p className="mb-0 text-black">{projectNumber}</p>
          </div>
        </div>
        <div className="cs-height_0 cs-height_lg_50" />
        <div className="cs-hero_text">
          {/* <h2 className="cs-hero_intro_title">{parse(introTitle)}</h2> */}
          <h1 className="cs-hero_title text-primary-orange">Welcome To Growphics</h1>
          <div className="cs-hero_subtitle">
            <p className='font-bold text-zinc-900'>Grow Your Business with Professional Graphics</p>
            <p className='font-bold text-zinc-900'>Unlock the full potential of your brand and stand out from the competition with our expertly crafted, eye-catching graphics.</p>
          </div>
          <SocialWidget />
          <div className="cs-hero_btn">
            <Button  btnLink={btnLink} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}
