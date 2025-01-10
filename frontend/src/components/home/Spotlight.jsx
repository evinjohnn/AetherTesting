import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ButtonComponent from "../ButtonComponent";
import { colors } from "../../ThemeConfig";
import user from "../../assets/images/user.png";
import spotlightBg1 from "../../assets/images/spotlightBg1.png";
import spotlightBg2 from "../../assets/images/spotlightBg2.png";
import BgText from "../BgText";
import black from "../../assets/images/blackbg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spotlight = () => {
  const [banner, setBanner] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    // Fetch banner data from API
    const fetchBanner = async () => {
      try {
        const response = await clientaxiosInstance.get("/banners");
        setBanner(response.data.data.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanner();
  }, []);
  const filteredData = banner.filter((data) => data.section === "home");
  console.log(filteredData);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <Section>
      <div className="">
        <Container className="slider-container">
          <Slider {...settings}>
            {filteredData &&
              filteredData.map((item) => {
                return (
                  <SubContainer className="">
                    <Left>
                      <BgText text={item.title} />
                      <P>{item.description}</P>
                      <Button>
                        <Line className="top" />
                        <Line className="right" />
                        <Link to="/book-a-demo">
                          <ButtonComponent text="Get Started" />
                        </Link>
                        <Line className="bottom" />
                        <Line className="left" />
                      </Button>
                    </Left>
                    <Right>
                      <ImageContainer>
                        <Image src={user} alt="User Model" />
                      </ImageContainer>
                    </Right>
                  </SubContainer>
                );
              })}
          </Slider>
        </Container>
      </div>
    </Section>
  );
};

export default Spotlight;

const Section = styled.section`
  background: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 80px;
  transition: background-image 1s ease-in-out; /* Smooth transition for background */
`;
const Container = styled.div``;
const Left = styled.div`
  background-image: url(${spotlightBg1});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;

  width: 85%;
  margin: auto;
  display: grid;
  align-items: center;
  justify-items: start;
`;

const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1.5;
  padding: 30px 0;
`;
const Right = styled.div`
  background-image: url(${spotlightBg2});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
`;
const Button = styled.div`
  position: relative;
  display: inline-block;
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
const ImageContainer = styled.div`
  height: 500px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const SubContainer = styled.div`
  height: 80vh;
  display: grid !important;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: unset;
  }
`;
