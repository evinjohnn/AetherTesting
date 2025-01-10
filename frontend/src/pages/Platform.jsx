import React, { useEffect, useState } from "react";

import AboutPage from "../components/platform/About";

import { colors } from "../ThemeConfig";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";
import AboutSection from "../components/platform/About";
import FeaturesPlatform from "../components/platform/Features";
import Demo from "../components/Demo";
import CaseStudies from "../components/common/CaseStudies";
import FAQ from "../components/common/Faq";
import Video from "../components/common/Video";

const Platform = () => {
  return (
    <div>
      <PageSpotlight text="platform" />
      <AboutSection />
      <FeaturesPlatform />
      <Video section="platform" sub_section="home" />
      <CaseStudies section="platform" sub_section="home" />
      <Demo />
      <FAQ section="platform" sub_section="home" />
    </div>
  );
};

export default Platform;
