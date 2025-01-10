import React from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import upc1 from "../../assets/icons/upcoming1.svg";
import upc2 from "../../assets/icons/feature2.svg";
import upc3 from "../../assets/icons/clockWhite.svg";
const Features = () => {
  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Head className="sub-head">
            Products We Integrate Digital Human With
          </Head>
          <Upcoming>
            <UpcomingBox>
              <IconContainer>
                <Icon src={upc1} alt="Upcoming" />
              </IconContainer>
              <Text className="upcoming">
                Digital human inference in Websites
              </Text>
            </UpcomingBox>
            <UpcomingBox>
              <IconContainer>
                <Icon src={upc2} alt="Upcoming" />
              </IconContainer>
              <Text className="upcoming">
                Digital human powered shopify capsule
              </Text>
            </UpcomingBox>
            <UpcomingBox>
              <IconContainer>
                <Icon src={upc3} alt="Upcoming" />
              </IconContainer>
              <Text className="upcoming">Interactive Game Plugin</Text>
            </UpcomingBox>
          </Upcoming>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Features;
const MainContainer = styled.section``;
const Container = styled.div``;
const Head = styled.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${colors.theme_red};
  }
`;
const Upcoming = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;
const UpcomingBox = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 30px;
  &:hover {
    transform: translateY(-50px);
  }

  @media screen and (max-width: 768px) {
    &:hover {
      transform: unset;
    }
  }
`;
const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  align-self: flex-end;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const Text = styled.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;
