import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Image from 'next/image';
import shape1Url from "../../../../public/images/hero_img_2.png"

export default function Hero10({
  // title,
  subtitle,
  btnLink,
  btnText,
  shape2Url,
  shape3Url,
}) {
  return (
    <div className="cs-hero cs-style7" id="home">
      <div className="container">
        <h1 className="cs-hero_title text-primary-orange">Welcome to Growphics</h1>
          <div className="cs-hero_subtitl text-center font-bold text-primary-orange text-xl ">Grow Your Business with Professional Graphics</div>
          <div className="cs-hero_subtitl text-center font-bold text-primary-orange text-xl ">Unlock the full potential of your brand and stand out from the competition with our expertly crafted, eye-catching graphics.</div>
      </div>
      <div className="container">
        <div className="cs-hero_text_in">
          <div className="cs-hero_btn">
            <Button btnLink={btnLink} btnText={btnText} />
          </div>
        </div>
      </div>
      <div className="cs-hero_img_1">
        <Image src={shape1Url} alt="Hero Img" placeholder='blur' />
      </div>
      <div className="cs-hero_img_2">
        <img src={shape2Url} alt="Hero Img" />
      </div>
      <div className="cs-hero_img_3">
        <img src={shape3Url} alt="Hero Img" />
      </div>
    </div>
  );
}
