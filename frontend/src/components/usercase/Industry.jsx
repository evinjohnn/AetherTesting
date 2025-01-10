import React from "react";
import styled from "styled-components";

import icon from "../../assets/icons/howDiff.svg";
import { colors } from "../../ThemeConfig";
const Industry = () => {
  return (
    <Section>
      <div className="wrapper">
        <MainContainer>
          <Title className="sub-head">
            <span>I</span>ndustry <span>C</span>hallenges
          </Title>
          <Description>
            At Aetherbot.AI we aim to cater to your industry needs with our
            Digital Human. We provide a workforce of digital humans which can be
            easily customized for your business needs.
          </Description>

          <Container>
            {Array.from({ length: 5 }).map((_, index) => (
              <Card key={index}>
                <CardTitle>Problem</CardTitle>
                <CardSubtitle>
                  Inefficiencies in customer service and engagement
                </CardSubtitle>
                <CardImageContainer>
                  <CardImage src={icon} alt={`Card ${index + 1}`} />
                </CardImageContainer>
                <CardTitle>Solution</CardTitle>
                <CardSubtitle>
                  Inefficiencies in customer service and engagement
                </CardSubtitle>
              </Card>
            ))}
          </Container>
        </MainContainer>
      </div>
    </Section>
  );
};

export default Industry;

const Section = styled.section``;

const MainContainer = styled.div`
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${colors.white};
  margin-bottom: 2rem;
  text-align: center;
  span {
    color: ${colors.theme_red};
    font-weight: bold;
  }
`;

const Description = styled.p`
  color: ${colors.white};
  width: 60%;
  margin: auto;
  text-align: center;
  margin: 50px auto;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${colors.background};
  border: 1px solid ${colors.grey_border};
  width: 100%;
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px;
  transition: all 0.3s linear;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const CardSubtitle = styled.p`
  font-size: 14.5px;
`;
