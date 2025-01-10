import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import ButtonComponent from "./ButtonComponent";
import BgText from "./BgText";
import { colors } from "../ThemeConfig";
import black from "../assets/images/blackBg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../utils/baseurl";


const PageSpotlight = ({ text, subtext, button, page }) => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    // Fetch blog data from API
    const fetchBanner = async () => {
      try {
        const response = await clientaxiosInstance.get("/banners");
        setBanner(response.data.data.data);
      } catch (error) {
        console.error("Error fetching faq data:", error);
      }
    };

    fetchBanner();
  }, []);
  //console.log(banner);
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const filteredBg = banner && banner.find((data) => data.section === page);

  console.log("filteredBg", filteredBg);

  return (
    <Section bgImage={filteredBg ? filteredBg.image : black}>
      <div className="wrapper">
        <Container>
          <BgText
            align="center"
            text={filteredBg?.title ? filteredBg.title : text}
          />
          {filteredBg && (
            <P data-aos="zoom-in-up">
              {filteredBg?.description ? filteredBg.description : subtext}
            </P>
          )}
          {button && (
            <Button data-aos="fade-up">
              <Line className="top" />
              <Line className="right" />
              <ButtonComponent text={button} />
              <Line className="bottom" />
              <Line className="left" />
            </Button>
          )}
        </Container>
      </div>
    </Section>
  );
};

export default PageSpotlight;

const Section = styled.section`
  background: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Container = styled.div`
  padding-top: 140px;
  display: grid;
  place-items: center;
`;

const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
  line-height: 1.5;
  padding: 30px 0;
`;
const Button = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px 0;
`;
const Line = styled.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${colors.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${colors.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${colors.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${colors.white};
  }
`;
