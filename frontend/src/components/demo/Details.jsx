import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";

import one from "../../assets/icons/one.svg";
import two from "../../assets/icons/two.svg";
import three from "../../assets/icons/three.svg";
import four from "../../assets/icons/four.svg";

import Aos from "aos";
const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Head className="sub-head">Demo details</Head>
          <Description>
            {" "}
            Aetherbot.ai is making strides in its development, concentrating on
            attracting investment and entering new markets. Our advancement is
            organized around four essential areas:
          </Description>
          <TimelineBox>
            <Box>
              <Div className="no-border" data-aos="fade-right">
                {" "}
                <ImageContainer>
                  <Image src={one} alt="Step 1" />
                </ImageContainer>{" "}
                <P>Answer The Questionnaire And Book A Slot For Demo</P>
              </Div>
              <Div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                possimus!
              </Div>
            </Box>
            <Box>
              <Div> </Div>
              <Div className="no-border left" data-aos="fade-left">
                {" "}
                <P>
                  A Functional Prototype Of Our Digital Human Technology Is
                  Ready For Interaction And To Explore Functionality
                </P>
                <ImageContainer>
                  <Image src={two} alt="Step 2" />
                </ImageContainer>{" "}
              </Div>
            </Box>
            <Box>
              <Div className="no-border" data-aos="fade-right">
                {" "}
                <ImageContainer>
                  <Image src={three} alt="Step 3" />
                </ImageContainer>{" "}
                <P>
                  Q and A session and possible customization solutions and
                  requirements gathering
                </P>
              </Div>
              <Div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                possimus!
              </Div>
            </Box>
            <Box>
              <Div> </Div>
              <Div className="no-border left" data-aos="fade-left">
                {" "}
                <P>
                  Post Demo feedback gathering and solutions to your problems
                </P>
                <ImageContainer>
                  <Image src={four} alt="Step 4" />
                </ImageContainer>{" "}
              </Div>
            </Box>
          </TimelineBox>
          <MobileTimeline>
            <MobileBox>
              <ImageContainer>
                <Image src={one} alt="Step 1" />
              </ImageContainer>{" "}
              <P className="mobile">
                Answer The Questionnaire And Book A Slot For Demo
              </P>
            </MobileBox>
            <MobileBox>
              <P className="mobile right">
                Answer The Questionnaire And Book A Slot For Demo
              </P>
              <ImageContainer>
                <Image src={two} alt="Step 2" />
              </ImageContainer>{" "}
            </MobileBox>
            <MobileBox>
              <ImageContainer>
                <Image src={three} alt="Step 1" />
              </ImageContainer>{" "}
              <P className="mobile">
                Answer The Questionnaire And Book A Slot For Demo
              </P>
            </MobileBox>
            <MobileBox>
              <P className="mobile right">
                Answer The Questionnaire And Book A Slot For Demo
              </P>
              <ImageContainer>
                <Image src={four} alt="Step 1" />
              </ImageContainer>{" "}
            </MobileBox>
          </MobileTimeline>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Details;

const MainContainer = styled.div``;

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Head = styled.h2`
  color: ${colors.theme};
`;

const Description = styled.p``;
const TimelineBox = styled.div`
  width: 70%;
  margin: 40px auto;
  @media screen and (max-width: 1180px) {
    width: 100%;
  }
  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const Box = styled.div`
  padding: 0 20px;
  /* border: 1px solid white; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  position: relative;

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-right: 3px dashed ${colors.white};
    z-index: -2;
  }
`;
const Div = styled.div`
  max-height: 150px;
  display: grid;
  grid-template-columns: 0.1fr 2fr;

  gap: 30px;
  opacity: 0;
  &.no-border {
    opacity: 1;
    border-bottom: 1px solid ${colors.white};
    position: relative;
    &::after {
      position: absolute;
      bottom: -10px;
      right: -11px;
      content: "";
      height: 20px;
      width: 20px;
      background-color: ${colors.white};
      border-radius: 50%;
      z-index: 2;
    }
  }
  &.left {
    grid-template-columns: 2fr 0.1fr;

    &::after {
      position: absolute;
      bottom: -10px;
      left: -11px;
      content: "";
      height: 20px;
      width: 20px;
      background-color: ${colors.white};
      border-radius: 50%;
    }
  }
`;

const ImageContainer = styled.div`
  height: 100px;
  width: 70px;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const P = styled.p`
  width: 80%;
  justify-self: center;
  text-transform: capitalize;
  &.mobile {
    height: 100%;
    border-left: 2px dotted white;
    padding: 40px 20px;
    &.right {
      border-right: 2px dotted white;
      border-left: none;
    }
  }
`;
const MobileTimeline = styled.div`
  display: none;
  margin-top: 40px;
  @media screen and (max-width: 880px) {
    display: block;
  }
`;
const MobileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
