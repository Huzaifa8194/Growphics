"use client";
import Cta from "@/app/ui/Cta";
import CtaStyle2 from "@/app/ui/Cta/CtaStyle2";
import Div from "@/app/ui/Div";
import Hero10 from "@/app/ui/Hero/Hero10";
import IconBox from "@/app/ui/IconBox";
import {UniqueIconBox} from "@/app/ui/IconBox";
import SectionHeading from "@/app/ui/SectionHeading";
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import PostSlider from "@/app/ui/Slider/PostSlider";
import TestimonialSliderStyle3 from "@/app/ui/Slider/TestimonialSliderStyle3";
import Spacing from "@/app/ui/Spacing";
import Card from "./ui/Card";
import Hero11 from "./ui/Hero/Hero11";

// Hero Social Links
const heroSocialLinks = [
  {
    name: "Behance",
    links: "/",
  },
  {
    name: "Twitter",
    links: "/",
  },
];
// FunFact Data
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40K",
  },
  {
    title: "Project Completed",
    factNumber: "50K",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: "Product Packaging",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_1.jpeg",
  },
  {
    title: "Listing Images Design",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/22.jpg",
  },
  {
    title: "EBC/A+ Images",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_0.jpg",
  },
  {
    title: "Logo Design",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_3.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Hero11
        // introTitle="Hello, I am 👋"
        title="Mila Decosta"
        subtitle="Hailing from London, UK, I come with a wealth of web & app UI/UX design expertise. I'm eager to engage in a conversation with you about our distinctive offerings and passions."
        btnLink="/portfolio"
        btnText="See Portfolio"
        experienceTitle="years experience in web design"
        experienceNumber="07+"
        projectTitle="250+"
        projectNumber="Project completed"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Design working process"
          subtitle="UI/UX Design"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="Sketching"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="Wireframing"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="Prototyping"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      {/* Start About Section */}
      <section>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5">
              <img
                src="/images/about_img_9.jpeg"
                alt="About"
                className="w-100 cs-radius_5"
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="cs-height_0 cs-height_lg_40" />
              <SectionHeading
                title="What Makes Us Unique?"
                subtitle=""
                btnText="Learn More"
                btnLink="/about"
              >
                <Spacing lg="30" md="20" />
                <UniqueIconBox />
              </SectionHeading>
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
      </section>
      {/* End About Section */}
      {/* Start Servide Section */}
      <div className="cs-gradient_1">
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Product Photography"
                      link="/service/ui-ux-design"
                      src="/images/service_1.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Product Packaging Design"
                      link="/service/reactjs-development"
                      src="/images/service_2.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Videography"
                      link="/service/digital-marketing"
                      src="/images/service_3.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Enhanced Brand Content"
                      link="/service/technology"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Brand Logo Design"
                      link="/service/consultancy"
                      src="/images/service_5.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Amazon Storefront Design"
                      link="/service/creative-design"
                      src="/images/service_6.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
      </div>
      {/* End Servide Section */}
      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4 text-center">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}
      {/* Start Testimonial Section */}
      <section>
        <div className="cs-height_145 cs-height_lg_75" />
        <div className="container">
          <SectionHeading
            title="Voices of delights testimonials that <br />speak to our excellence"
            subtitle="Clients Feedback"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <TestimonialSliderStyle3 />
        </div>
        <Spacing lg="150" md="80" />
      </section>
      {/* End Testimonial Section */}
      {/* Start CTA Section */}
      <Cta
        title="Let’s disscuse make <br />something <i>cool</i> together"
        btnText="Apply For Meeting"
        btnLink="/contact"
        bgSrc="/images/home_banner.jpg"
        variant="cs-type_1"
      />
      {/* End CTA Section */}
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}
      <Spacing lg="150" md="80" />
      <CtaStyle2
        bgUrl="/images/video_bg_3.jpeg"
        btnText="Lets start <span>creative</span> things"
        btnLink="/contact"
      />
    </>
  );
}
