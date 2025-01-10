import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { axiosInstance, clientaxiosInstance } from "../../utils/baseurl";
import { FaRegFaceSadTear } from "react-icons/fa6";

const OurProcess = ({ section, sub_section }) => {
  const sliderRef = useRef(null); // Ref for Slider instance

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch blog data from API
    const fetchProcess = async () => {
      setIsLoading(true);

      try {
        const response = await clientaxiosInstance.get("/process", {
          params: {
            isNeedFull: true,
            section: section,
            sub_section: sub_section,
          },
        });
        console.log(response.data.data);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching process data:", error);
      }
    };

    fetchProcess();
  }, [section, sub_section]);

  console.log("process", data);
  if (data && data.length === 0) {
    return null;
  }
  return (
    <MainContainer>
      <Head className="sub-head">
        Our <span>Process</span>
      </Head>
      {isLoading ? (
        <>
          <div className="loader">Loading</div>
        </>
      ) : data && data.length === 0 ? ( // Check if data is empty
        <NoData>
          <FaRegFaceSadTear />
          <p>{`No Data Availale - ${sub_section ? sub_section : section}`}</p>
        </NoData>
      ) : (
        <>
          {data && data.length < 4 ? (
            <Cards>
              {data.map((card, index) => {
                return (
                  <Card key={card._id}>
                    <ImageContainer>
                      <Image src={card.image} />
                    </ImageContainer>
                    <Title>{card.title}</Title>
                    <P>{card.description}</P>
                  </Card>
                );
              })}
            </Cards>
          ) : (
            <Container className="slider-container">
              <Slider {...settings} ref={sliderRef}>
                {data &&
                  data.map((card, index) => (
                    <Card key={card._id}>
                      <ImageContainer>
                        <Image src={card.image} />
                      </ImageContainer>
                      <Title>{card.title}</Title>
                      <P>{card.description}</P>
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
            </Container>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default OurProcess;

const MainContainer = styled.section``;
const Head = styled.h3`
  margin-bottom: 30px;
  text-align: center;
  span {
    color: ${colors.theme_red};
  }
`;

const P = styled.p`
  text-transform: capitalize;
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
const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  padding: 15px;
  background-color: ${colors.theme_red};

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;
const Title = styled.h4`
  padding-top: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 15px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  padding-right: 20px;
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
const Cards = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
