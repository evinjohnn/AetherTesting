import React, { useEffect, useState } from "react";

import AboutPage from "../components/platform/About";

import { colors } from "../ThemeConfig";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";
import AboutSection from "../components/platform/About";
import FeaturesPlatform from "../components/platform/Features";

import Video from "../components/common/Video";
import Demo from "../components/Demo";
import CaseStudies from "../components/common/CaseStudies";
import FAQ from "../components/common/Faq";
import { useParams } from "react-router-dom";

const SpecificPlatform = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <PageSpotlight text={`${name}`} />
      <AboutSection />
      <FeaturesPlatform />
      <Video section="platform" sub_section="home" />
      <CaseStudies section="platform" sub_section={`${name}`} />
      <Demo />
      <FAQ section="platform" sub_section={`${name}`} />
    </div>
  );
};

export default SpecificPlatform;
