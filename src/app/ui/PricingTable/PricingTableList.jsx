import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

const PricingTableList = ({ category }) => {
  const [tab, setTab] = useState('monthly');

  const pricingData = {
    category1: {
      monthly: [
        {
          title: 'Standard',
          price: '36.25',
          features: ['SILVER (SINGLE-SIDEDBOX DESIGN)', 'Source File (AI,PSD)+Dielines + Print-Ready + Unlimited Revision + JPG/PNG', 'Full product wrapping', '3D mockup', '1 day Delivery time', 'Unlimited Revisions'],
        },
        {
          title: 'Professional',
          price: '51.79',
          features: ['GOLD (LABEL DESIGN)', 'Source File (AI,PSD)+ Dielines + Print-Ready + Unlimited Revision + JPG/PNG', 'Full product wrapping', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '299',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
      yearly: [
        {
          title: 'Standard',
          price: '59',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Professional',
          price: '399',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '599',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
    },
    category2: {
      monthly: [
        {
          title: 'Standard',
          price: '29',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Professional',
          price: '199',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '299',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
      yearly: [
        {
          title: 'Standard',
          price: '59',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Professional',
          price: '399',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '599',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
    },
    category3: {
      monthly: [
        {
          title: 'Standard',
          price: '29',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Professional',
          price: '199',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '299',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
      yearly: [
        {
          title: 'Standard',
          price: '59',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Professional',
          price: '399',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
        {
          title: 'Ultimate',
          price: '599',
          features: ['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword'],
        },
      ],
    },
  };

  const currentPricing = pricingData[category][tab];

  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? 'active' : ''} onClick={() => setTab('monthly')}>
          Monthly
        </li>
        <li className={tab === 'yearly' ? 'active' : ''} onClick={() => setTab('yearly')}>
          Yearly
        </li>
      </ul>
      <Section className="row">
        {currentPricing.map((plan, index) => (
          <Section key={index} className="col-lg-4">
            <PricingTable
              title={plan.title}
              price={plan.price}
              currency="$"
              timeline={tab}
              features={plan.features}
              btnText="Purchase Now"
              btnLink="/"
            />
            <Spacing lg="25" md="25" />
          </Section>
        ))}
      </Section>
    </Section>
  );
};


export default PricingTableList;
