import React from "react";
import Spotlight from "../components/home/Spotlight";
import Clients from "../components/home/Clients";
import WhoWeAre from "../components/home/WhoWeAre";
import WhatWeDo from "../components/common/CaseSection";
import Industries from "../components/home/Industries";
import Demo from "../components/Demo";
import CaseStudies from "../components/common/CaseStudies";
import StandOut from "../components/StandOut";
import Video from "../components/common/Video";

const Home = () => {
  return (
    <div>
      <Spotlight />
      {/* <Clients /> */}
      <WhoWeAre />
      <StandOut />
      <WhatWeDo section="home" />
      <Industries />
      <Video section="home" />
      <CaseStudies section="global" sub_section="" />
      <Demo />
    </div>
  );
};

export default Home;
