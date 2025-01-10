import React, { useEffect, useState } from "react";

import Industry from "../components/usercase/Industry";
import AboutPage from "../components/usercase/About";

import { colors } from "../ThemeConfig";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";

import InAction from "../components/usercase/InAction";
import Features from "../components/usercase/Features";
import Demo from "../components/Demo";

import CaseStudies from "../components/common/CaseStudies";
import FAQ from "../components/common/Faq";
import Testimonials from "../components/Testimonials";
import ProblemSolution from "../components/common/ProblemSolution";

const UseCase = () => {
  return (
    <div>
      <PageSpotlight text="Use Case Page" />
      <ProblemSolution section="usecase" sub_section="home" />
      <AboutPage />
      <CaseStudies section="usecase" sub_section="home" />
      <InAction />
      <Features />
      <Testimonials />
      <Demo />
      <FAQ section="usecase" sub_section="home" />
    </div>
  );
};

export default UseCase;
