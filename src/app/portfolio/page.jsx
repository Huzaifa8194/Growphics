'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { portData1 } from "./portfolioData1";
import { portData2 } from "./portfolioData2";
import { portData3 } from "./portfolioData3";
import { portData4 } from "./portfolioData4";
import { portData5 } from "./portfolioData5";
import { portData6 } from "./portfolioData6";
import { portData7 } from "./portfolioData7";


import { useEffect } from "react";


const categoryMenu = [
  {
    title: 'Product Packing Designs',
    category: 'p_pack_design', //product packing design
  },
  {
    title: 'Insert/Tank You Card Designs',
    category: 'card_design',
  },
  {
    title: 'Listing Image Creation',
    category: 'listing_design',
  },
  {
    title: 'EBC/A+ Designs',
    category: 'ebc_design',
  },
  {
    title: 'Brand Logo Design',
    category: 'logo_design',
  },
  {
    title: 'Amazon Storefront Designs',
    category: 'storefront_design',
  },
  {
    title: 'Product Photography Designs',
    category: 'p_photo_design',
  },
];



export default function PortfolioPage( {passedstate}) {
  const [active, setActive] = useState('p_pack_design');
  const [itemShow, setItemShow] = useState(15);
  const [portfolioData, setPortfolioData] = useState(portData1);


  useEffect(() => {
    switch (active) {
      case 'listing_design':
        setPortfolioData(portData3);
        break;
      case 'p_pack_design':
        setPortfolioData(portData1);
        break;
      case 'card_design':
        setPortfolioData(portData2);
        break;
      case 'ebc_design':
        setPortfolioData(portData4);
        break;
      case 'logo_design':
        setPortfolioData(portData5);
        break;
      case 'storefront_design':
        setPortfolioData(portData6);
        break;
      case 'p_photo_design':
        setPortfolioData(portData7);
        break;

      
      default:
        setPortfolioData([]);
        break;
    }
  }, [active]);
 

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/home_banner.jpg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title = "Grow Your Business with Growphics!" subtitle = "" />
          <SectionHeading title="" subtitle="At Growphics, we are a team of professional graphic designers and photography experts who specialize in providing high-quality and unique design solutions for Amazon FBA sellers and online business owners. We offer a range of print-ready and editable design services, including package/box design, label design, Amazon listing images, EBC/A+ content, product photography, and product insert card/book design. Our designs are carefully crafted to create a powerful impression on your customers, helping you to stand out from the competition and grow your brand. With our expertise and attention to detail, we can help make your Amazon online business a success. Don't just take our word for it - read the trusted reviews from our satisfied customers and see for yourself why we are the go-to choose for professional graphic design and photography services for online businesses." />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
