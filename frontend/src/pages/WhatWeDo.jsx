import React from "react";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";
import Mission from "../components/whatwedo/Mission";
import NextSteps from "../components/whatwedo/NextSteps";
import Products from "../components/whatwedo/Products";

import Demo from "../components/Demo";

import CaseStudies from "../components/common/CaseStudies";
import Testimonials from "../components/Testimonials";
import OurProcess from "../components/common/OurProcess";
const WhatWeDo = () => {
  return (
    <div>
      <PageSpotlight text="What We Do" />
      <Mission />
      <OurProcess section="whatwedo" />
      <NextSteps />
      <Products />
      <CaseStudies section="whatwedo" />
      <Testimonials />
      <Demo />
    </div>
  );
};

export default WhatWeDo;
