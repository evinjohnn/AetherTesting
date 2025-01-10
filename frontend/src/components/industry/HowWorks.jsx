import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import upc1 from "../../assets/icons/upcoming1.svg";
import upc2 from "../../assets/icons/wi7White.svg";
import upc3 from "../../assets/icons/wi3White.svg";
import mobile from "../../assets/images/mobile.jpg";
import kiosk from "../../assets/images/kiosk.jpg";
import hologram from "../../assets/images/hologram.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const HowWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [active, setActive] = useState(0);
  const handleChangeActive = (id) => {
    setActive(id);
  };
  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Head className="sub-head">
            Products We Integrate Digital Human With
          </Head>
          <Box onClick={() => handleChangeActive(0)} data-aos="fade-right">
            <ImageContainer className={active === 0 ? "active" : ""}>
              <Image src={mobile} alt="mobile" />
            </ImageContainer>
            <Text className={active === 0 ? "active" : ""}>Mobile App</Text>
          </Box>
          <Box onClick={() => handleChangeActive(1)} data-aos="fade-left">
            <ImageContainer className={active === 1 ? "active" : ""}>
              <Image src={kiosk} alt="kiosk" />
            </ImageContainer>
            <Text className={active === 1 ? "active" : ""}>Kiosk</Text>
          </Box>
          <Box onClick={() => handleChangeActive(2)} data-aos="fade-right">
            <ImageContainer className={active === 2 ? "active" : ""}>
              <Image src={hologram} alt="hologram" />
            </ImageContainer>
            <Text className={active === 2 ? "active" : ""}>Hologram</Text>
          </Box>
        </Container>
        <div style={{ margin: "50px 0" }}>
          <Head className="sub-head">
            Products We Integrate Digital Human With
          </Head>
          <Upcoming>
            <UpcomingBox>
              <Text className="upcoming">
                Digital human inference in Websites
              </Text>
              <IconContainer>
                <Icon src={upc1} alt="Upcoming" />
              </IconContainer>
            </UpcomingBox>
            <UpcomingBox>
              <Text className="upcoming">
                Digital human powered shopify capsule
              </Text>
              <IconContainer>
                <Icon src={upc2} alt="Upcoming" />
              </IconContainer>
            </UpcomingBox>
            <UpcomingBox>
              <Text className="upcoming">Interactive Game Plugin</Text>
              <IconContainer>
                <Icon src={upc3} alt="Upcoming" />
              </IconContainer>
            </UpcomingBox>
          </Upcoming>
        </div>
      </div>
    </MainContainer>
  );
};

export default HowWorks;
const MainContainer = styled.section``;
const Container = styled.div``;
const Head = styled.div`
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${colors.theme_red};
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }
`;
const Box = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Text = styled.h3`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 29px;
  width: 50%;
  margin: auto;
  color: ${colors.white};
  &.active {
    color: ${colors.theme_red};
  }
  &.upcoming {
    position: unset;
    transform: unset;
    font-size: 20px;
    font-weight: 300;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  transition: height 0.4s linear;
  &.active {
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    height: 140px;
    &.active {
      height: 180px;
    }
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;
const Upcoming = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;
const UpcomingBox = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  &:hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 430px) {
    &:hover {
      transform: unset;
    }
  }
`;
const IconContainer = styled.div`
  height: 80px;
  width: 80px;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
