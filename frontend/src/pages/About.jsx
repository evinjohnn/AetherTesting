import React from "react";
import AboutPage from "../components/about/About";
import { Mission } from "../components/about/Mission";
import HowWeDifferent from "../components/about/HowWeDifferent";
import { colors } from "../ThemeConfig";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";
import Timeline from "../components/about/Timeline";
import Demo from "../components/Demo";
import Team from "../components/about/Team";
import { clientaxiosInstance } from "../utils/baseurl";
const About = () => {
  return (
    <div>
      <PageSpotlight text="" button="Book A Demo" page="whoweare" />

      <AboutPage />
      <Mission />
      <HowWeDifferent />
      <Timeline />
      <Team />
      <Demo />
    </div>
  );
};

export default About;
