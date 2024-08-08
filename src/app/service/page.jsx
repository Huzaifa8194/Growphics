'use client'
import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import IconBox from "@/app/ui/IconBox";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../public/images/service_img_1.jpeg'
import Servicedetailslider1 from "../ui/Slider/Servicedetailslider1";
import Servicedetailslider2 from "../ui/Slider/Servicedetailslider2";
import Servicedetailslider3 from "../ui/Slider/Servicedetailslider3";
import Servicedetailslider4 from "../ui/Slider/Servicedetailslider4";
import PricingTableList from "../ui/PricingTable/PricingTableList";

import { useEffect, useState } from "react";

export default function ServiceDetailsPage({ id }) {

  const services = [
    'Amazon product photography editing',
    'Background removal/changing',
    'Product image retouch',
    'Unique product Infographics',
    'Removing dust or any kind of scratches/spots',
    'Before/After Images',
    'Infographics images (shows the product\'s features)',
    'Professional product listing for AMAZON, EBAY, ALIBABA',
    'Lifestyle photo editing',
    'Add logo, Badges, Custom icon etc.',
    'Comparison charts',
    'Photo retouching/editing'
  ];

  

  const renderPrice = () => {
    switch (id) {
      case 1:
        return <PricingTableList category = {'category1'} />;
      case 2:
        return <PricingTableList category = {'category2'} />;
      case 3:
        return <PricingTableList category = {'category3'}/>;
      case 4:
        return <PricingTableList category = {'category1'}/>;
      default:
        return <PricingTableList category = {'category1'}/>; // Default slider
    }
  };

  const renderSlider = () => {
    switch (id) {
      case 1:
        return <Servicedetailslider1 />;
      case 2:
        return <Servicedetailslider2 />;
      case 3:
        return <Servicedetailslider3 />;
      case 4:
        return <Servicedetailslider4 />;
      default:
        return <Servicedetailslider1 />; // Default slider
    }
  };

  console.log("HERE TEST: " + id);
  const renderHeading = () => {
    switch (id) {
      case 1:
        return 'Packaging Design';
      case 2:
        return 'Product Photography';
      case 3:
        return 'EBC';
      case 4:
        return 'Brand Logo Design';
      default:
        return 'Packaging Design'; // Default slider
    }
  };

  const headingtext = renderHeading();


  return (
    <>
      <PageHeading 
        title='Service Details'
        bgSrc='/images/home_banner.jpg'
        pageLinkText='SERVICE-DETAILS'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title={headingtext}
          subtitle='growphics' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Sketching'
              subtitle='Our design process begins with sketching, where we brainstorm and draft multiple concepts for your brand logo. This stage allows our designers to explore creative ideas and visualize the initial look and feel of your brand identity.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing'
              subtitle='In the wireframing phase, we refine the selected sketches into structured outlines, focusing on layout and positioning. This step ensures that the logos elements are harmonized and ready for the next stage of development, keeping your brands core values in mind.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Prototyping'
              subtitle='Prototyping is where the final touches come together. Using advanced design software, we bring the wireframes to life, creating a versatile and scalable logo prototype. This phase ensures your logo is ready to make a powerful and lasting impression across various media platforms.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Service" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">What You'll Get!</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-2 rounded-full">
                      <span className="material-icons text-white"></span>
                    </div>
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <div className="flex justify-center">
  <SectionHeading
    title="Catalog" 
    subtitle=""
  />
</div>

      {renderSlider()}
      <Spacing lg='150' md='80'/>

      <TestimonialSlider />

      <Spacing lg='145' md='80'/>
      {renderPrice()}
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/home_banner.png'
        />
      </Div>
    </>
  )
}
