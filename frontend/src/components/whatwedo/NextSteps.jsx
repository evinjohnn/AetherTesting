import React, { useEffect } from "react";
import styled from "styled-components";
import ns1 from "../../assets/icons/nextStep1.svg";
import ns2 from "../../assets/icons/nextStep2.svg";
import ns3 from "../../assets/icons/nextStep3.svg";
import { colors } from "../../ThemeConfig";

import Aos from "aos";
import "aos/dist/aos.css";
const NextSteps = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Head className="sub-head">
            <span>Next</span> Steps
          </Head>
          <BoxContainer>
            <Box data-aos="fade-right">
              <ImageContainer>
                <Image src={ns1} alt="next steps" />
              </ImageContainer>
              <Description>
                CUSTOMIZE THE PRODUCT INTEGRATED WITH DIGITAL HUMAN WITH OUR SDK
              </Description>
            </Box>
            <Box className="center" data-aos="fade-up">
              <ImageContainer>
                <Image src={ns2} alt="next steps" />
              </ImageContainer>
              <Description>
                DEPLOY OUR PRODUCT ENVIRONMENT AS A KIOSK, MOBILE APP, WEBSITE
                OR AS AR/VR
              </Description>
            </Box>
            <Box data-aos="fade-left">
              <ImageContainer>
                <Image src={ns3} alt="next steps" />
              </ImageContainer>
              <Description>CONTINUOUS CUSTOMER TECHNICAL SUPPORT </Description>
            </Box>
          </BoxContainer>
        </Container>
      </div>
    </MainContainer>
  );
};

export default NextSteps;
const MainContainer = styled.section``;
const Container = styled.div``;
const Head = styled.div`
  text-align: center;
  span {
    color: ${colors.theme_red};
  }
`;
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 50px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Box = styled.div`
  width: 90%;
  display: grid;
  justify-items: center;
  gap: 20px;
  &.center {
    transform: scale(1.2);
    p {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      transform: scale(1);
      p {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    &:last-child {
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 480px) {
    &:last-child {
      grid-column: unset;
    }
  }
`;
const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.theme_red};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const Description = styled.p`
  text-align: center;
`;
