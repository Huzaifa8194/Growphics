import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'Product Packaging Design',
    href: '/service/service-details',
  },
  {
    title: 'Enhanced Brand Content',
    href: '/service/service-details',
  },
  {
    title: 'Brand Logo Design',
    href: '/service/service-details',
  },

];


const linksMenu = [
  {
    title: 'Home',
    href: '/service/service-details',
  },
  {
    title: 'About',
    href: '/service/service-details',
  },
  {
    title: 'Services',
    href: '/service/service-details',
  },
  {
    title: 'Portfolio',
    href: '/service/service-details',
  },
  {
    title: 'Blog',
    href: '/service/service-details',
  },


];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.svg"
                  logoAlt="Logo"
                  text="WE COMMIT! WE DESIGN! WE DELIVER!"
                />
                <SocialWidget />
              </Div>
            </Div>

            
           
            <Div className="col-lg-3 col-sm-8">
              <Div className="cs-footer_item ml-20 align-middle">
                <MenuWidget menuItems={linksMenu} menuHeading="Quick Links" />
              </Div>
            </Div>
              
            <Div className="col-lg-3 col-sm-8">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                 <ContactInfoWidget title="Contact Us" /> 
              </Div>
            </Div> */}
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="STAY IN TOUCH"
                  subtitle=""
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`}.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
