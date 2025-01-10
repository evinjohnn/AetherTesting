import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import ButtonComponent from "../ButtonComponent";
import generateBg from "../../assets/images/generateBg.png";
import in1 from "../../assets/icons/wi1.svg";
import in1White from "../../assets/icons/wi1white.svg";
import in2 from "../../assets/icons/wi2.svg";
import in2White from "../../assets/icons/wi2white.svg";
import in3 from "../../assets/icons/wi3.svg";
import in3White from "../../assets/icons/wi3white.svg";
import in4 from "../../assets/icons/wi4.svg";
import in4White from "../../assets/icons/wi4white.svg";
import in5 from "../../assets/icons/wi5.svg";
import in5White from "../../assets/icons/wi5white.svg";
import in6 from "../../assets/icons/wi6.svg";
import in6White from "../../assets/icons/wi6white.svg";
import in7 from "../../assets/icons/wi7.svg";
import in7White from "../../assets/icons/wi7white.svg";
import in8 from "../../assets/icons/wi8.svg";
import in8White from "../../assets/icons/wi8white.svg";
import in9 from "../../assets/icons/wi9.svg";
import in9White from "../../assets/icons/wi9white.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
import { Link } from "react-router-dom";
const categories = [
  {
    title: "Automobile",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in1,
    hoverImage: in1White,
  },
  {
    title: "Entertainment",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in2,
    hoverImage: in2White,
  },
  {
    title: "Gaming",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in3,
    hoverImage: in3White,
  },
  {
    title: "Government",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in4,
    hoverImage: in4White,
  },
  {
    title: "Financing & Banking",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in5,
    hoverImage: in5White,
  },
  {
    title: "Healthcare",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in6,
    hoverImage: in6White,
  },
  {
    title: "Retail & E-commerce",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in7,
    hoverImage: in7White,
  },
  {
    title: "HR & Recruitment",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in8,
    hoverImage: in8White,
  },
  {
    title: "Tech & Software",
    description:
      "Tailored to match brand identity, with flexibility in appearance and personality",
    image: in9,
    hoverImage: in9White,
  },
];

const Mission = () => {
  const [hoverState, setHoverState] = useState(false);
  const [mission, setmission] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [industry, setindustry] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    // Fetch mission data from API
    fetchMission();
    fetchIndustry();
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
  console.log("mission", mission);

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
        <Container>
          <Head className="sub-head">
            <span>Our</span> Industries
          </Head>
          <CardContainer>
            {industry &&
              industry.map((category) => {
                return (
                  <Card onMouseOver={() => setHoverState(!setHoverState)}>
                    <CardInner>
                      <Front>
                        <ImageContainer>
                          <Image
                            // src={
                            //   hoverState ? category.hoverImage : category.image
                            // }
                            src={category.image}
                            alt={category.name}
                          />
                        </ImageContainer>
                        <Industry>{category.name}</Industry>
                      </Front>
                      <Back>
                        <Title>{category.name}</Title>
                        <Description>{category.description}</Description>
                        <ButtonContainer to={`/industry/${category.route}`}>
                          <Line />
                          <ButtonComponent text="Explore Industry" />
                          <Line />
                        </ButtonContainer>
                      </Back>
                    </CardInner>
                  </Card>
                );
              })}
          </CardContainer>
        </Container>
        {/* Generate Section */}
        <Generate>
          <Head className="sub-head" data-aos="zoom-in-up">
            <span>Generate</span> Voice
          </Head>
          <BoxContainer>
            <Box data-aos="fade-right">
              <Industry className="box">
                Generate voice using text- to-speech platforms.
              </Industry>
            </Box>
            <Box data-aos="fade-left">
              <Industry className="box">clone voice of a real Person</Industry>
            </Box>
          </BoxContainer>
        </Generate>
      </div>
    </MainContainer>
  );
};

export default Mission;

const MainContainer = styled.section``;
const Container = styled.div``;
const Head = styled.div`
  text-align: center;
  span {
    color: ${colors.theme_red};
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 40px 0;
  gap: 20px;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;
const Card = styled.div`
  position: relative;
  perspective: 1000px; /* Enables 3D effect */
  height: 180px;
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  border: 1px solid ${colors.grey_border};

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${colors.background}; /* Add your preferred background color */

  display: grid;
  place-items: center;
  gap: 20px;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: grid;
  place-items: center;
  padding: 10px;
`;
const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
  align-self: end;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  /* background-color: ${colors.background}; */
  /* filter: invert(100); */
`;
const Industry = styled.h4`
  font-size: 18px;
  font-weight: 500;
  align-self: start;
  text-transform: capitalize;
  text-align: center;
  &.box {
    font-size: 22px;
  }
`;
const Title = styled.h3`
  font-size: 20px;
  color: ${colors.theme_red};
  text-align: center;
  font-weight: 500;
`;
const Description = styled.div`
  text-align: center;
  padding-top: 10px;
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
  width: 35px;
`;

const Generate = styled.div``;
const BoxContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 40px 20px;
  background: url(${generateBg});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
`;
