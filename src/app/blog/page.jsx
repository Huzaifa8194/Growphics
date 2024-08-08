'use client'

import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import PostSlider from "../ui/Slider/PostSlider";

export default function BlogPage() {
  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/home_banner.jpg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="170" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/home_banner.jpg"
        />
      </Div>
    </>
  );
}
