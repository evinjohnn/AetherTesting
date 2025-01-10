import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import core1 from "../../assets/icons/core1.svg";
import core2 from "../../assets/icons/core2.svg";
import core3 from "../../assets/icons/core3.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const CoreValues = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const values = [
    {
      title: "Innovation",
      description: "We Embrace Creativity To Drive AI Advancements.",
      icon: core1,
    },
    {
      title: "Sustainability",
      description: "Building Ethical And Sustainable AI Solutions.",
      icon: core3,
    },
    {
      title: "Collaboration",
      description: "Fostering Teamwork And Mutual Growth.",
      icon: core2,
    },
    {
      title: "Collaboration",
      description: "Fostering Teamwork And Mutual Growth.",
      icon: core2,
    },
  ];

  return (
    <CoreValuesSection>
      <div className="wrapper">
        <Title className="sub-head">
          Our Core <span>Values</span>
        </Title>
        <ValuesGrid>
          <Box data-aos="fade-right">
            {values.slice(0, 2).map((value, index) => (
              <ValueCard key={index}>
                <IconContainer>
                  <Icon src={value.icon} alt={value.title} />
                </IconContainer>
                <ContentWrapper>
                  <h2 className="red-head">{value.title}</h2>
                  <p>{value.description}</p>
                </ContentWrapper>
              </ValueCard>
            ))}
          </Box>
          <Box className="bottom" data-aos="fade-left">
            {values.slice(2, 4).map((value, index) => (
              <ValueCard key={index}>
                <IconContainer>
                  <Icon src={value.icon} alt={value.title} />
                </IconContainer>
                <ContentWrapper>
                  <h2 className="red-head">{value.title}</h2>
                  <p>{value.description}</p>
                </ContentWrapper>
              </ValueCard>
            ))}
          </Box>
        </ValuesGrid>
      </div>
    </CoreValuesSection>
  );
};

export default CoreValues;

const CoreValuesSection = styled.section`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  span {
    color: #f44336; /* Red color for "Values" */
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 40px;
`;
const ValueCard = styled.div`
  padding: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: 0.3fr 2fr;
  gap: 20px;
  align-items: center;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  gap: 80px;
  width: 100%;
  &.bottom {
    margin-left: 15%;

    @media screen and (max-width: 1180px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${colors.white};
  padding: 10px;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};

  h2 {
    margin: 0;
    color: ${colors.white};
  }

  @media screen and (max-width: 1180px) {
    h2,
    p {
      text-align: center;
    }
  }
`;
