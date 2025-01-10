import React, { useEffect, useState } from "react";
import styled from "styled-components";
import wwd1 from "../../assets/images/WWD1.png";
import arrow from "../../assets/icons/arrow.svg";
import { colors } from "../../ThemeConfig";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaRegFaceSadTear } from "react-icons/fa6";

const CaseSection = ({ section, sub_section }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const navigate = useNavigate();

  const [casesection, setcasesection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionDetails, setSectionDetails] = useState([]);

  const handleNavigate = () => {
    navigate("/what-we-do");
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    fetchCaseSection();
  }, [section, sub_section]);

  useEffect(() => {
    fetchSection();
  }, []);

  const fetchCaseSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/casesections`, {
        params: {
          isNeedFull: true,
          section: section,
          sub_section: sub_section,
        },
      });
      setcasesection(response.data.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching CaseSection data:", error);
    }
  };

  const fetchSection = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/section`, {
        params: { section: "home", subsection: "what we do" },
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
  //function to trim the description to 12 words
  const trimDescription = (description) => {
    const trimmedDescription = description.split(" ").slice(0, 20).join(" ");
    return trimmedDescription + "...";
  };
  console.log("sectionDetails", sectionDetails);
  if (casesection && casesection.length === 0) {
    return null;
  }
  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head" data-aos="fade-right">
          {sectionDetails.title ? sectionDetails.title : "Case Section"}
        </Head>
        {sectionDetails.subtitle && (
          <Subhead className="red-head">
            {sectionDetails.subtitle ? sectionDetails.subtitle : ""}
          </Subhead>
        )}{" "}
        {sectionDetails.description && (
          <P data-aos="fade-left">
            {sectionDetails.description ? sectionDetails.description : ""}
          </P>
        )}
        <Container className="slider-container">
          {isLoading ? (
            <>
              <div className="loader">Loading</div>
            </>
          ) : casesection.length === 0 ? ( // Check if data is empty
            <NoData>
              <FaRegFaceSadTear />
              <p>{`No Data Availale - ${
                sub_section ? sub_section : section
              }`}</p>
            </NoData>
          ) : (
            <Slider {...settings}>
              {casesection.map((card, index) => (
                <Card key={card._id}>
                  <ImageContainer>
                    <Image src={card.image} alt="What We Do" />
                  </ImageContainer>
                  <Content>
                    <Text>{trimDescription(card.description)}</Text>
                    <ButtonContainer>
                      <Button onClick={handleNavigate}>
                        <a href={card.link}>
                          <Image src={arrow} alt="Redirect" />
                        </a>
                      </Button>
                    </ButtonContainer>
                  </Content>
                </Card>
              ))}
            </Slider>
          )}
        </Container>
      </div>
    </MainContainer>
  );
};

export default CaseSection;

const MainContainer = styled.section``;
const Head = styled.h3`
  text-align: center;
`;
const Subhead = styled.h4`
  text-align: center;
  margin: 20px 0;
`;
const P = styled.p`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`;
const Container = styled.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`;
// const Slider = styled(Slider);
const Content = styled.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s linear;
  z-index: 2;
  display: grid;
  justify-items: center;
  max-height: 50px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(1);
`;
const Card = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 30px;
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

    ${Content} {
      max-height: 200px;
    }
    ${Image} {
      filter: grayscale(0);
    }
  }
`;
const ImageContainer = styled.div`
  height: 300px;
  width: 100%;

  @media screen and (max-width: 840px) {
    height: 250px;
  }
`;

const Text = styled.p``;
const ButtonContainer = styled.button`
  display: grid;
  justify-items: center;
  width: 100%;
  margin-top: 50px;
`;
const Button = styled.button`
  background-color: ${colors.black};
  border-radius: 50%;
  padding: 12px;
  margin-top: 10px;
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
