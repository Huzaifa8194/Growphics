import React from 'react';
import Div from '../Div';
import Slider from 'react-slick';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';
const testimonialData = [
  {
    avatarImgUrl: '/images/reviews/client1.jpeg',
    testimonialText:
      "WOW!!! I had an amazing experience working with Behroz Graphics, I sent them a sketch of what I was thinking and a picture of our existing sign and their first version was almost perfect. I had a couple small edits which were very promptly done and sent back to me. I will definitely work with them again! Highly Recommend!!!",
    avatarName: 'sambranditt',
    avatarDesignation: 'Canada',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/reviews/client2.jpeg',
    testimonialText: "wow. I must say I'm very impressed with the execution of my project gig. behrozgraphics really work to execute at the highest of expectations with changes edits and more. i look forward to doing more business with him coming soon. highly recommend to family friends coworkers & etc.",
    avatarName: 'royalphoxx1',
    avatarDesignation: 'United States',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/reviews/client3.jpg',
    testimonialText:'it was a whole experience working with he, he really got my ideas and I make a perfect boss design 100% better that I was thinking 100% recommend and im definitely gonna work with he next time thanks',
    avatarName: 'andrssilva435',
    avatarDesignation: 'Chile',
    ratings: '4',
  },
  {
    avatarImgUrl: '/images/reviews/client4.jpeg',
    testimonialText:
      'Excellent, very understanding and patient with my requests. Understood the brief really well. Happy to use again. Thank you',
    avatarName: 'repeakltd',
    avatarDesignation: 'United Kingdom',
    ratings: '4',
  },
  {
    avatarImgUrl: '/images/reviews/client5.jpeg',
    testimonialText:
      'I highly recommend this team for creating product photo infographics. They did An outstanding job for our company, producing visually stunning and informative graphics that effectively conveyed our product features and benefits. The team was very professional, easy to work with, and delivered the final product on time and within budget. We were extremely pleased with the results and have received many positive comments from customers and colleagues alike. We will definitely be using them again in the future.',
    avatarName: 'dustingilmour',
    avatarDesignation: 'Canada',
    ratings: '4',
  },
];

export default function TestimonialSliderStyle3() {
  /** Slider Settings **/
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-slider cs-gap-24">
      {testimonialData.map((item, index) => (
        <Div key={index}>
          <TestimonialStyle2 {...item} />
        </Div>
      ))}
    </Slider>
  );
}
