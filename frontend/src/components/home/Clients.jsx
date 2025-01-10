import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiArrowDownLight } from "react-icons/pi";
import { clientaxiosInstance } from "../../utils/baseurl";
import { colors } from "../../ThemeConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdDirectionsSubwayFilled } from "react-icons/md";
// Carousel
const Clients = () => {
  const [clients, setClients] = useState([]);
  const [sectionDetails, setSectionDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [expandDescription, setExpandDescription] = useState(false);
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, // Enables autoplay
    autoplaySpeed: 3000, // Removes delay for seamless scrolling
    cssEase: "linear", // Makes the scrolling continuous
  };
  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/clients`, {
        params: {
          isNeedFull: true,
        },
      });
      setClients(response.data.data || []);
      setCurrentIndex(Math.floor(response.data.data.length / 2));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
    }
  };
  useEffect(() => {
    fetchSection();
  }, []);

  const fetchSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/section`, {
        params: { section: "home", subsection: "clients" },
      });
      setSectionDetails(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error Fetching Section Details:", error);
    }
  };

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % clients.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  // Automatically slide images
  useEffect(() => {
    if (clients.length > 0) {
      const interval = setInterval(() => {
        moveItems();
      }, 3000); // Change images every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [clients, currentIndex]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (clients.length === 0) {
    return <p>No clients available.</p>;
  }

  return (
    <>
      <CarouselContainer>
        <div className="wrapper">
          <Head className="sub-head">
            {sectionDetails.title ? sectionDetails.title : "Who We Are"}
          </Head>
          {sectionDetails.subtitle && (
            <Subhead className="red-head">Digital Human Interference</Subhead>
          )}
          {sectionDetails.description && (
            <PageDescription data-aos="fade-left">
              {sectionDetails.description}
            </PageDescription>
          )}

          <CarouselItems>
            {Array(5)
              .fill()
              .map((_, index) => {
                const imageItem =
                  clients[
                    getCircularIndex(currentIndex + index - 2, clients.length)
                  ];
                if (!imageItem) return null; // Skip rendering if imageItem is undefined
                return (
                  <CarouselItem
                    key={index}
                    isCenter={index === 2}
                    isEnd={index === 0 || index === 4}
                    onClick={() =>
                      handleItemClick(
                        getCircularIndex(
                          currentIndex + index - 2,
                          clients.length
                        )
                      )
                    }
                  >
                    <ImageContainer>
                      <img src={imageItem.image} alt="item" />
                    </ImageContainer>
                  </CarouselItem>
                );
              })}
          </CarouselItems>
          <Content>
            <Arrow onClick={() => setExpandDescription(!expandDescription)}>
              <PiArrowDownLight
                className={expandDescription ? "active" : ""}
                fontSize={20}
                color="#fff"
              />
            </Arrow>

            <Description className={expandDescription ? "active" : ""}>
              <p>
                <b>{clients[currentIndex]?.name}</b>
              </p>
              <p>{clients[currentIndex]?.description}</p>
            </Description>
          </Content>
        </div>
      </CarouselContainer>
      <MobileContainer>
        <div className="wrapper">
          <Container className="slider-container">
            <Slider {...settings} ref={sliderRef}>
              {clients &&
                clients.map((client, index) => {
                  return (
                    <InnerContainer>
                      <SliderTop>
                        <SliderImage>
                          <Image src={client.image} />
                        </SliderImage>
                      </SliderTop>
                      <SliderMid>
                        <PiArrowDownLight color="#fff" />
                      </SliderMid>
                      <SliderBottom>
                        <p>{client.description}</p>
                      </SliderBottom>
                    </InnerContainer>
                  );
                })}
            </Slider>
          </Container>
        </div>
      </MobileContainer>
    </>
  );
};

export default Clients;

const Head = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;
const Subhead = styled.h4`
  text-align: center;
  margin: 20px 0;
`;
const PageDescription = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

const CarouselItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  transition: transform 0.5s ease-in-out; /* Smooth transition for the entire carousel */
  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 20px;
  }
`;

const CarouselItem = styled.div`
  margin: 0 5px;

  transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth scaling and opacity transition */
  opacity: ${({ isCenter }) => (isCenter ? "1" : "0.7")};
  transform: ${({ isCenter, isEnd }) =>
    isCenter ? "scale(1.3)" : isEnd ? "scale(0.8)" : "scale(1)"};
  margin: ${({ isCenter, isEnd }) =>
    isCenter ? "2rem" : isEnd ? "-15px" : "0"};
  filter: ${({ isCenter }) => (isCenter ? "grayscale(0)" : "grayscale(100%)")};
  @media screen and (max-width: 760px) {
    display: ${({ isEnd }) => (isEnd ? "none" : "unset")};
  }
  @media screen and (max-width: 620px) {
    margin: ${({ isCenter, isEnd }) =>
      isCenter ? "1rem" : isEnd ? "-15px" : "0"};
  }
  @media screen and (max-width: 480px) {
    transform: ${({ isCenter, isEnd }) =>
      isCenter ? "scale(1)" : isEnd ? "scale(0.5)" : "scale(.9)"};
  }
  @media screen and (max-width: 620px) {
    margin: ${({ isCenter, isEnd }) =>
      isCenter ? "0rem" : isEnd ? "-15px" : "0"};
  }
  @media screen and (max-width: 480px) {
    display: ${({ isCenter }) => (isCenter ? "grid" : "none")};
    justify-items: center;
    margin: unset;
    transform: unset;
  }
`;

const Description = styled.div`
  border-radius: 10px;
  width: 100%;
  border: 1px solid #6b6b6b;
  padding: 0 80px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  p {
    color: #fff;
  }
  b {
    font-size: 28px;
    color: ${colors.theme_red};
  }
  @media screen and (max-width: 620px) {
    padding: 40px;
  }

  max-height: 0;
  overflow: hidden;
  transition: max-height 2s ease;
  transition: padding 1s ease;

  opacity: 0;
  &.active {
    transition: opacity 1s ease;

    opacity: 1;
    padding: 40px 80px;
    max-height: 300px;
  }
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  @media screen and (max-width: 1080px) {
    width: 120px;
  }
  @media screen and (max-width: 620px) {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 130px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: block;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out; /* Smooth transition for image opacity */
  }
`;
const Content = styled.div`
  position: relative;
`;
const Arrow = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: -15px;
  transform: translateX(-50%);
  border-top: 1px solid #000;
  background-color: #000;
  padding: 5px 7px;
  border-radius: 50%;
  border: 2px solid #6b6b6b;
  cursor: pointer;
  svg {
    transition: all 2s ease;
    &.active {
      transform: rotate(180deg);
    }
  }
`;
const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 540px) {
    display: block;
  }
`;
const Container = styled.div``;
const InnerContainer = styled.div`
  display: grid !important;
  justify-items: center;
  gap: 20px;
`;
const SliderTop = styled.div``;
const SliderImage = styled.div`
  height: 80px;
  width: 180px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const SliderMid = styled.div`
  border: 2px solid #6b6b6b;
  border-radius: 50%;
  padding: 10px;

  svg {
    font-size: 20px;
  }
`;
const SliderBottom = styled.div`
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 20px;
`;
