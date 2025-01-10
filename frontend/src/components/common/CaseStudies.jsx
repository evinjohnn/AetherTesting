import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import csIcon from "../../assets/icons/csIcon.png";
import { colors } from "../../ThemeConfig";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { FaRegFaceSadTear } from "react-icons/fa6";

const CaseStudies = ({ section, sub_section }) => {
  const sliderRef = useRef(null); // Ref for Slider instance

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 5000, // Removes delay for seamless scrolling
    cssEase: "linear", // Makes the scrolling continuous
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  useEffect(() => {
    Aos.init({
      offset: 200, // Adjust offset to control when animation starts
      duration: 3000, // Animation duration
      easing: "ease", // Easing function
    });
  }, []);

  // Duplicate the data to create a seamless loop
  const [marqueeData, setmarqueeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionDetails, setSectionDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog data from API
    const fetchCaseStudy = async () => {
      setIsLoading(true);

      try {
        const response = await clientaxiosInstance.get("/casestudies", {
          params: {
            isNeedFull: true,
            section: section,
            sub_section: sub_section,
          },
        });
        console.log(response.data.data);
        setmarqueeData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching casestudy data:", error);
      }
    };

    fetchCaseStudy();
  }, [section, sub_section]);

  useEffect(() => {
    fetchSection();
  }, []);

  const fetchSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/section`, {
        params: { section: "home", subsection: "case study" },
      });

      setSectionDetails(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error Fetching Section Details:", error);
    }
  };

  //function to trim the description to 12 words
  const trimDescription = (description) => {
    const trimmedDescription = description.split(" ").slice(0, 12).join(" ");
    return trimmedDescription + "...";
  };

  const handleCaseStudyDetail = (id) => {
    navigate(`/casestudydetail/${id}`);
  };

  console.log("marqueeData", marqueeData);
  if (marqueeData && marqueeData.length === 0) {
    return null;
  }
  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head" data-aos="fade-right">
          {sectionDetails.title ? sectionDetails.title : "Case Studies"}
        </Head>
        {sectionDetails.description && (
          <PageDescription data-aos="fade-left">
            {sectionDetails.description}
          </PageDescription>
        )}
      </div>
      <Marquee>
        {isLoading ? (
          <>
            <div className="loader">Loading</div>
          </>
        ) : marqueeData.length === 0 ? ( // Check if data is empty
          <NoData>
            <FaRegFaceSadTear />
            <p>{`No Data Availale - ${sub_section ? sub_section : section}`}</p>
          </NoData>
        ) : (
          <>
            {marqueeData.length > 4 ? (
              <Container className="slider-container">
                <Slider {...settings} ref={sliderRef}>
                  {marqueeData &&
                    marqueeData.map((card, index) => (
                      <Span key={card._id}>
                        <ImageContainer className="slider">
                          <Icon src={card.image} alt="Latest Works" />
                        </ImageContainer>
                        <Description>
                          <IconContainer>
                            <InnerIcon
                              src={card.icon ? card.icon : csIcon}
                              alt="case studies"
                            />
                          </IconContainer>
                          <P>{card.title}</P>
                          <Content>
                            {trimDescription(card.description)}
                            <Button
                              className="read"
                              onClick={() => handleCaseStudyDetail(card._id)}
                            >
                              READ MORE
                            </Button>
                          </Content>
                        </Description>
                      </Span>
                    ))}
                </Slider>
                <Buttons>
                  <Button onClick={() => sliderRef.current.slickPrev()}>
                    <HiArrowLeft />
                  </Button>
                  <Button onClick={() => sliderRef.current.slickNext()}>
                    <HiArrowRight />
                  </Button>
                </Buttons>
              </Container>
            ) : (
              <Container className="grid grid-cols-4 wrapper gap-3">
                {marqueeData &&
                  marqueeData.map((card, index) => (
                    <Span key={card.id}>
                      <ImageContainer className="slider">
                        <Icon src={card.image} alt="Latest Works" />
                      </ImageContainer>
                      <Description>
                        <IconContainer>
                          <InnerIcon
                            src={card.icon ? card.icon : csIcon}
                            alt="case studies"
                          />
                        </IconContainer>
                        <P>{card.title}</P>
                        <Content>
                          {trimDescription(card.description)}
                          <Button
                            className="read"
                            onClick={() => handleCaseStudyDetail(card._id)}
                          >
                            READ MORE
                          </Button>
                        </Content>
                      </Description>
                    </Span>
                  ))}
              </Container>
            )}
          </>
        )}
      </Marquee>
      <ButtonContainer to="/blogs">
        <Line />
        <ButtonComponent text="Learn More" />
        <Line />
      </ButtonContainer>
    </MainContainer>
  );
};

export default CaseStudies;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;
const MainContainer = styled.section``;
const Head = styled.h3`
  text-align: center;
`;
const PageDescription = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`;
const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  padding: 30px 0 0 0;

  display: block;
`;
const Container = styled.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }

  .not-slider {
  }
`;
const Card = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 90px;
  padding: 5px 30px;

  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  @media screen and (max-width: 430px) {
    padding: 5px 14px;
  }
`;
const Title = styled.h4`
  padding-top: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 15px;
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  animation: ${scroll} 30s linear infinite;
  width: calc(200%); /* Ensures seamless animation */

  &:hover {
    animation-play-state: paused;
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
  max-height: 265px;
`;
const Content = styled.p`
  font-size: 13px;
  max-height: 0px;
  overflow: hidden;
  font-weight: 300;

  text-transform: capitalize;
  text-align: center;
  transition: max-height 1s linear;
`;
const Span = styled.span`
  color: #fff;

  text-transform: uppercase;
  /* font-size: 120px; */
  font-weight: 100;
  font-family: "regular";
  @media screen and (max-width: 1080px) {
    font-size: 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 74px;
  }
  @media screen and (max-width: 640px) {
    font-size: 64px;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }

  position: relative;

  &:hover {
    ${Content} {
      max-height: 300px;
    }
    ${Description} {
      background-color: #fff;
      p {
        color: #000;
      }
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      background: linear-gradient(180deg, #c4c4c423 26%, #ff2a009d 90%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  &.slider {
    height: 300px;
    width: 100%;
  }
  @media screen and (max-width: 1180px) {
    height: 300px;
    width: 300px;
  }
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 5px;
  background-color: #000;
`;
const InnerIcon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 500;

  text-transform: capitalize;
  text-align: center;
`;
const ButtonContainer = styled(Link)`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Line = styled.div`
  border-top: 1px solid ${colors.grey_border};
  width: 100px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  /* padding-right: 20px; */
`;
const Button = styled.div`
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

  &.read {
    background-color: ${colors.black};
    padding: 5px;
    margin: 5px;
    color: ${colors.theme_red};
    border-radius: 0;
    border: none;
    &:hover {
      color: ${colors.white};
    }
  }
`;
