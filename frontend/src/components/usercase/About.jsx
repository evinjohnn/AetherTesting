import React from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import clock from "../../assets/icons/clock.svg";
import aboutBg from "../../assets/images/WhoWeAre.png";
const AboutPage = () => {
  return (
    <Section>
      <div className="wrapper">
        <Container>
          <Left>
            <Title className="sub-head">
              How this use case helped this industry
            </Title>
            <Description>
              At Aetherbot.AI, we are dedicated to addressing the unique
              requirements of your industry with our cutting-edge Digital Human
              solutions. Our innovative workforce of digital humans is designed
              to be highly adaptable and can be effortlessly customized to align
              with your specific business goals. Whether you’re looking to
              enhance customer experiences, streamline operations, or bring
              efficiency to your processes, our Digital Humans are tailored to
              meet your needs with precision and ease.
            </Description>
          </Left>
          <Middle>
            <StatsContainer>
              <StatBox>
                <StatContent>
                  <StatImage src={clock} alt="Avatar" />
                  <div>
                    <p>X Hours</p>
                    <span>saved</span>
                  </div>
                </StatContent>
              </StatBox>

              <StatBox>
                <StatContent>
                  <StatImage src={clock} alt="Avatar" />
                  <div>
                    <p>X Hours</p>
                    <span>saved</span>
                  </div>
                </StatContent>
              </StatBox>
              <StatBox>
                <StatContent>
                  <StatImage src={clock} alt="Avatar" />
                  <div>
                    <p>X Hours</p>
                    <span>saved</span>
                  </div>
                </StatContent>
              </StatBox>
            </StatsContainer>
          </Middle>

          <Right>
            <LargeImageContainer>
              <LargeImage src={aboutBg} alt="Avatar" />
            </LargeImageContainer>
          </Right>
        </Container>
      </div>
    </Section>
  );
};

export default AboutPage;

const Section = styled.section``;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`;

const Left = styled.div``;

const Middle = styled.div``;

const Right = styled.div`
  @media screen and (max-width: 980px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 640px) {
    grid-column: unset;
  }
`;
const LargeImageContainer = styled.div`
  height: 400px;
`;
const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const Title = styled.h3`
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const Name = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${colors.theme_red};
  display: block;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${colors.white};

  span {
    color: ${colors.theme_red};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  gap: 50px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;

const StatBox = styled.div``;

const StatImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    color: ${colors.theme_red};
  }

  p {
    font-size: 22px;
    font-weight: 500;
    color: ${colors.white};
    text-transform: capitalize;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
  span {
    font-size: 12px;
    color: ${colors.white};
    text-transform: capitalize;
  }
`;

const Number = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.theme_red};
`;
