import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import aboutBg from "../../assets/images/aboutBg.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
export const Mission = () => {
  const [mission, setmission] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    // Fetch mission data from API
    fetchMission();
  }, []);

  const fetchMission = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/missions`, {
        params: {
          isNeedFull: true,
        },
      });
      setmission(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Mission data:", error);
      setIsLoading(false);
    }
  };
  const data = [
    {
      id: 1,
      title: "Mission",
      description:
        "Life like animations, nuanced facial expressions, and emotionally inflected voices. Lifelike animations, nuanced facial expressions, and emotionally inflected voices. Tailored to match brand identity, with flexibility in appearance and personality Full-body digital avatars support interactions across 100 languages globally. Full-body digital avatars support interactions across 100 languages globally. Full-body digital avatars support interactions across 100 languages globally.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Life like animations, nuanced facial expressions, and emotionally inflected voices. Lifelike animations, nuanced facial expressions, and emotionally inflected voices. Tailored to match brand identity, with flexibility in appearance and personality Full-body digital avatars support interactions across 100 languages globally. Full-body digital avatars support interactions across 100 languages globally. Full-body digital avatars support interactions across 100 languages globally.",
      image: "https://picsum.photos/200/300",
    },
  ];
  console.log("mission", mission);

  return (
    <Container>
      <div className="wrapper">
        <Head className="sub-head">
          <span>Our </span> Mission & Vision
        </Head>
        <MissionVisionContainer>
          {mission &&
            mission.map((item, index) => (
              <Section key={index}>
                <ImageContainer className={index % 2 === 0 ? "" : "filter-invert"}>
                  <StatImage src={item.image} alt={item.title} />
                </ImageContainer>
                <Content className={index % 2 === 0 ? "filter-invert" : ""}>
                  <Title>{item.title}</Title>
                  <P>{item.description}</P>
                </Content>
              </Section>
            ))}
        </MissionVisionContainer>
        <MobileVision>
          {mission &&
            mission.map((item, index) => (
              <Section
                key={index}
                className="mobile-mission"
                background={item.image}
              >
                <Top data-aos="fade-right">
                  <ImageContainer
                    className={index % 2 === 0 ? "mobile" : "filter-invert mobile"}
                  >
                    <StatImage src={item.image} alt={item.title} />
                  </ImageContainer>
                  <Title className="mobile">{item.title}</Title>
                </Top>
                <Content
                  className={index % 2 === 0 ? "mobile filter-invert" : "mobile"}
                >
                  <P data-aos="fade-left">{item.description}</P>
                </Content>
              </Section>
            ))}
        </MobileVision>
      </div>
    </Container>
  );
};
// Styled Components
const Container = styled.section`
  background: url(${aboutBg});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
`;

const Head = styled.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 60px;
  span {
    color: ${colors.theme_red};
  }
`;

const MissionVisionContainer = styled.div`
  display: grid;
  gap: 80px;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  flex-shrink: 0;

  position: absolute;
  left: -150px;
  bottom: -10px;

  &.filter-invert {
    left: unset;
    position: absolute;
    right: -130px;
    @media screen and (max-width: 940px) {
      position: unset;
    }
  }

  @media screen and (max-width: 940px) {
    position: unset;
  }

  @media screen and (max-width: 940px) {
    width: 170px;
    height: 170px;
  }

  /* mobile */
  &.mobile {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-right: 20px;
    @media screen and (max-width: 940px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const StatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Section = styled.div`
  display: flex;
  width: 80%;
  overflow: visible;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  position: relative;
  &:first-child {
    justify-self: end;
  }
  &:last-child {
    flex-direction: row-reverse;
    justify-self: start;
  }

  @media screen and (max-width: 940px) {
    display: grid;
    place-items: start;
    gap: 20px;
    padding: 20px;
    width: 100%;
    border: 1px solid transparent;
    border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
    border-image-slice: 1;
  }
  @media screen and (max-width: 940px) {
    padding: 10px;
  }

  /* mobile styles */
  &.mobile-mission {
    position: unset;
    margin: 20px 0;
    padding: 10px 20px;
    /* min-height: 300px;
    background: ${({ background }) => `url(${background})`};
    background-position: center;
    background-size: cover;
    margin: 20px 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }
   */
  }
`;

const Content = styled.div`
  padding: 20px;
  &.filter-invert {
    padding-left: 82px;

    @media screen and (max-width: 940px) {
      padding-left: unset;
      padding: 20px;
    }
  }
  &.mobile {
    /* position: absolute;
    z-index: 2; */
    max-height: 200px;
    overflow-y: scroll;
    padding: 00px;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
  &.mobile {
    color: ${colors.theme_red};
  }
`;
const P = styled.p`
  font-size: 15px;
  font-weight: 300;

  width: 90%;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;
const MobileVision = styled.div`
  display: none;
  @media screen and (max-width: 940px) {
    display: block;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
`;
