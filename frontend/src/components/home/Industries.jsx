import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "../../ThemeConfig";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { clientaxiosInstance } from "../../utils/baseurl";

var settings = {
  dots: false,
  infinite: true, // Enable infinite scrolling
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const Industries = () => {
  const sliderRef = useRef(null); // Ref for Slider instance
  const [hoveredCard, setHoveredCard] = useState(null);
  const [industry, setindustry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionDetails, setSectionDetails] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    fetchSection();
  }, []);

  const fetchSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/section`, {
        params: { section: "home", subsection: "industry" },
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
  useEffect(() => {
    fetchIndustry();
  }, []);

  const fetchIndustry = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/industries`, {
        params: {
          isNeedFull: true,
        },
      });
      setindustry(response.data.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Industry data:", error);
    }
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head">
          {sectionDetails.title ? sectionDetails.title : "Industries We Serve"}
        </Head>
        {industry && industry.length > 8 ? (
          <SlickContainer className="slider-container">
            <Slider {...settings} ref={sliderRef}>
              {industry &&
                industry.map((card, index) => (
                  <Card
                    data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                    onMouseEnter={() => setHoveredCard(card._id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <ImageContainer>
                      <Image
                        src={hoveredCard === card._id ? card.image : card.image}
                        alt={card.name}
                      />
                    </ImageContainer>
                    <Text>{card.name}</Text>
                  </Card>
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
          </SlickContainer>
        ) : (
          <Container>
            {industry &&
              industry.map((card, index) => (
                <Card
                  data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                  onMouseEnter={() => setHoveredCard(card._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <ImageContainer>
                    <Image
                      src={hoveredCard === card._id ? card.image : card.image}
                      alt={card.name}
                    />
                  </ImageContainer>
                  <Text>{card.name}</Text>
                </Card>
              ))}
          </Container>
        )}
      </div>
    </MainContainer>
  );
};

export default Industries;

const MainContainer = styled.section``;
const Head = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
`;
const SlickContainer = styled.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`;
const Text = styled.p`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`;

const Card = styled.div`
  display: grid;
  justify-items: center;

  &:hover {
    ${Text} {
      color: ${colors.theme_red};
    }
  }
`;
const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
  padding: 5px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: end;
  margin: 30px 0;

  display: none;
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
`;
