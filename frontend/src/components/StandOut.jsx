import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import arrow from "../assets/icons/arrow.svg";
import { colors } from "../ThemeConfig";
import { clientaxiosInstance } from "../utils/baseurl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
const StandOut = () => {
  const [technology, setTechnology] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sectionDetails, setSectionDetails] = useState([]);
  const sliderRef = useRef(null); // Ref for Slider instance

  useEffect(() => {
    fetchTechnology();
    fetchSection();
  }, []);

  const fetchTechnology = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/technologies`, {
        params: {
          isNeedFull: true,
        },
      });
      setTechnology(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Technology data:", error);
    }
  };

  const fetchSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/section`, {
        params: { section: "home", subsection: "stand out" },
      });
      // const filteredData =
      //   response.data.data.filter((data) => data.subsection === "clients") ||
      //   [];

      setSectionDetails(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error Fetching Section Details:", error);
    }
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log("technology", technology);

  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head">
          {sectionDetails.title
            ? sectionDetails.title
            : "How Aetherbot.ai’s Digital Human Technology Stands Out?"}
        </Head>
      </div>
      <Marquee>
        <Container className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {technology &&
              technology.map((card, index) => (
                <Span key={card._id}>
                  <Top>
                    <ImageContainer>
                      <Icon src={card.image} alt="Latest Works" />
                    </ImageContainer>

                    <P>{card.text}</P>

                    <Button>
                      <Icon src={arrow} alt="redirect" />
                    </Button>
                  </Top>
                  <Points>
                    {card.points.map((point, index) => (
                      <Point key={index}>{point}</Point>
                    ))}
                  </Points>
                </Span>
              ))}
          </Slider>
          <Buttons>
            <SliderButton onClick={() => sliderRef.current.slickPrev()}>
              <HiArrowLeft />
            </SliderButton>
            <SliderButton onClick={() => sliderRef.current.slickNext()}>
              <HiArrowRight />
            </SliderButton>
          </Buttons>
        </Container>
        {/* <MarqueeGroup>
          {technology &&
            [...technology, ...technology].map((card, index) => (
              <Span key={card._id}>
                <ImageContainer>
                  <Icon src={card.image} alt="Latest Works" />
                </ImageContainer>

                <P>{card.text}</P>

                <Button>
                  <Icon src={arrow} alt="redirect" />
                </Button>
                <Points>
                  {card.points.map((point, index) => (
                    <Point key={index}>{point}</Point>
                  ))}
                </Points>
              </Span>
            ))}
        </MarqueeGroup> */}
      </Marquee>
    </MainContainer>
  );
};

export default StandOut;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;
const rotate = keyframes`
 from {
    transform: rotate(0);
  }
    to {
     transform: rotate(90deg); 
    } `;
const MainContainer = styled.section`
  /* padding-bottom: 120px; */
`;
const Head = styled.h3`
  text-align: center;
  width: 50%;
  margin: auto;
  font-size: 45px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 80%;
  }
`;
const PageDescription = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
`;
const Marquee = styled.div`
  padding: 30px 0 0 0;
`;
const Container = styled.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`;

const Description = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 20px;
  z-index: 2;
`;
const Content = styled.p`
  font-size: 13px;
  font-weight: 300;
  text-transform: capitalize;
  text-align: center;
`;
const Button = styled.div`
  width: 50px; /* Ensure fixed size */
  height: 50px; /* Ensure fixed size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  padding: 14px;
  transform-origin: center; /* Rotate around its center */
  transition: transform 0.3s ease; /* Add smooth transition if needed */
  z-index: 3;
  position: absolute;
  bottom: -30px;
`;

const Points = styled.ul`
  /* position: absolute;
  bottom: -140px; */
  opacity: 0;
  background-color: ${colors.grey_background};
  padding: 0 20px;
  border-radius: 5px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #ff2a00, #ffffff1e);
  border-image-slice: 1;
  margin-top: 40px;
`;
const Top = styled.div`
  background-color: ${colors.grey_background};
  display: grid;
  justify-items: center;
  position: relative;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, #c4c4c423 0%, #ff2a009d 76%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
const Span = styled.span`
  display: grid;
  place-items: center;
  position: relative;
  padding: 20px;

  &:hover {
    ${Content} {
      /* max-height: 300px; */
    }
    ${Button} {
      animation: ${rotate} 1s linear forwards;
      transform-origin: center; /* Ensure rotation doesn't affect layout */
    }
    ${Description} {
      background-color: #fff;
      p {
        color: #000;
      }
    }

    ${Points} {
      transition: all 2s ease;
      opacity: 1;
    }
  }
`;
const ImageContainer = styled.div`
  height: 160px;
  width: 250px;
  padding: 0 70px;

  @media screen and (max-width: 1180px) {
    height: 300px;
    width: 300px;
  }
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 5px;
`;
const InnerIcon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;
const P = styled.p`
  font-size: 13px;

  text-transform: capitalize;
  text-align: center;
  padding-bottom: 50px;
`;

const Point = styled.li`
  padding: 10px 0;
  /* min-width: max-content; */
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  /* padding-right: 20px; */
`;
const SliderButton = styled.div`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${colors.theme_red};

  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${colors.theme_red};
  }
`;
