import React, { useEffect, useState } from "react";
import styled from "styled-components";
import diff from "../../assets/icons/howDiff.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
const HowWeDifferent = () => {
  const [howDifferent, setHowDifferent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    // Fetch mission data from API
    fetchDifferent();
  }, []);

  const fetchDifferent = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/howDifferents`, {
        params: {
          isNeedFull: true,
        },
      });
      setHowDifferent(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Different data:", error);
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <div className="wrapper">
        <Title className="sub-head">How We Different</Title>
        <GridContainer>
          {howDifferent.map((item) => (
            <Card key={item.id}>
              <IconContainer>
                <Icon src={item.image} alt="icon" />
              </IconContainer>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </GridContainer>
        <GridContainer className="mobile">
          {howDifferent.map((item, index) => (
            <Card key={item.id} data-aos="zoom-in-up">
              <IconContainer>
                <Icon src={item.image} alt="icon" />
              </IconContainer>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </GridContainer>
      </div>
    </Container>
  );
};

export default HowWeDifferent;
const Container = styled.section``;

const Title = styled.h3`
  margin-bottom: 30px;
  text-align: center;
`;
const GridContainer = styled.div`
  min-height: 320px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1080px) {
    min-height: unset;
    justify-items: center;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  /* @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  } */
  @media screen and (max-width: 480px) {
    display: none;
  }

  &.mobile {
    min-height: unset;

    display: none;
    @media screen and (max-width: 480px) {
      display: block;
    }
  }
`;
const Card = styled.div`
  padding: 30px 20px;
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  display: grid;
  justify-items: center;
  gap: 20px;
  align-self: flex-start;

  &:nth-child(even) {
    align-self: flex-end;
  }
`;
const IconContainer = styled.div`
  height: 50px;
  width: 50px;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;
const Description = styled.p`
  font-size: 15px;
  text-align: center;
`;
