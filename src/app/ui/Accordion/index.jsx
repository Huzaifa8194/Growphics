import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What do you need from me to start working?',
    answer:
      'All we need is product photos, product link(s), and your logo. In addition, if you are able to provide some more details it would be great, such as EBC layout, any inspiration, text info, etc. These allow us to provide you with the best results.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'There are unlimited revisions as we believe to satisfy all our clients.',
  },
  {
    question: 'I have more products to do EBC images for them. Can I get any discount on them?',
    answer:
      'Why not, we believe in long-term partnerships with our clients we would be more than happy to give you some discounts on them.',
  },
  {
    question: 'What happens if Amazon does not approve the EBC?',
    answer:
      'Don\'t worry, this can happen sometimes due to many reasons. We will work with you to make the necessary changes suggested by Amazon to get it approved.',
  },
  {
    question: 'I\'ve not registered my product as a brand yet. Do I have to do that before ordering your service?',
    answer:
      'Yes, you will need to register the brand before ordering our service. If this is not completed prior, we can still create the EBC, but you will not be able to submit it to Amazon before registering your brand.',
  },
  {
    question: 'All images in your portfolio are your work?',
    answer:
      'Yes, all images shown in our portfolio are our work. Also, your project after it is finished may be added to our portfolio and/or our social media. If you for any reason DO NOT WANT your design to be shown there, let us know in advance.',
  },
  {
    question: 'Do you design the images in other languages as well?',
    answer:
      'Yes, we do the images in different languages such as (German, French, Dutch, Spanish, etc.) as we work with clients from all over the world.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
