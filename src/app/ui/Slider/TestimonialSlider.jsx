import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'WOW!!! I had an amazing experience working with Behroz Graphics, I sent them a sketch of what I was thinking and a picture of our existing sign and their first version was almost perfect. I had a couple small edits which were very promptly done and sent back to me. I will definitely work with them again! Highly Recommend!!!',
    avatarName: 'sambranditt',
    avatarDesignation: 'Canada',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      "wow. I must say I'm very impressed with the execution of my project gig. behrozgraphics really work to execute at the highest of expectations with changes edits and more. i look forward to doing more business with him coming soon. highly recommend to family friends coworkers & etc. ⭐⭐⭐⭐⭐",
    avatarName: 'royalphoxx1',
    avatarDesignation: 'United States',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'it was a whole experience working with he, he really got my ideas and I make a perfect boss design 100% better that I was thinking 100% recommend and im definitely gonna work with he next time thanks',
    avatarName: 'andrssilva435',
    avatarDesignation: 'Chile',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Excellent, very understanding and patient with my requests. Understood the brief really well. Happy to use again. Thank you',
    avatarName: 'repeakltd',
    avatarDesignation: 'United Kingdom',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'I highly recommend this team for creating product photo infographics. They did an outstanding job for our company, producing visually stunning and informative graphics that effectively conveyed our product features and benefits. The team was very professional, easy to work with, and delivered the final product on time and within budget. We were extremely pleased with the results and have received many positive comments from customers and colleagues alike. We will definitely be using them again in the future.',
    avatarName: 'dustingilmour',
    avatarDesignation: 'Canada',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'excellent work done, everything done on time, we are very satisfied',
    avatarName: 'miloskrunic398',
    avatarDesignation: 'Serbia',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Outstanding service! This company is very professional. I have used their services several times and will continue to use their services. Always willing to make updates and give their honest opinion. Thank you for your continued trustworthy services!',
    avatarName: 'tamarawalker73',
    avatarDesignation: 'United States',
    ratings: '5',
  },
];


export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
