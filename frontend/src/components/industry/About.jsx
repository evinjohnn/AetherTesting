import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import clock from "../../assets/icons/clock.svg";
import aboutBg from "../../assets/images/WhoWeAre.png";
import icon1 from "../../assets/icons/aboutIcon1.svg";
import icon2 from "../../assets/icons/aboutIcon2.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
const AboutIndustry = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Section>
      <div className="wrapper">
        <Container>
          <Left data-aos="fade-right">
            <Title className="sub-head">
              impact metrics with power numbers{" "}
            </Title>
            <Description>
              At Aetherbot.AI, our mission is to revolutionize the way
              industries operate by addressing their unique needs through our
              innovative Digital Human solutions. We specialize in delivering a
              cutting-edge workforce of digital humans that are not only highly
              efficient but also fully customizable to align perfectly with your
              business requirements. Whether you’re looking to enhance customer
              engagement, streamline operations, or elevate your brand presence,
              our Digital Humans are designed to seamlessly integrate into your
              workflows, offering unparalleled adaptability and performance
              tailored specifically to your goals.
            </Description>
          </Left>
          <Middle data-aos="fade-up">
            <StatsContainer ref={ref}>
              <StatBox>
                <StatContent>
                  <div>
                    <StatImage src={icon1} alt="Avatar" />
                    <p>
                      {" "}
                      {isInView && <CountUp start={0} end={125} duration={4} />}
                      B
                    </p>
                  </div>
                  <div>
                    <Detail>Expected Revenue of Digital Humans by 2035</Detail>
                  </div>
                </StatContent>
              </StatBox>

              <StatBox>
                <StatContent>
                  <div>
                    <StatImage src={icon2} alt="Avatar" />
                    <p>
                      {" "}
                      {isInView && <CountUp start={0} end={46} duration={4} />}%
                    </p>
                  </div>
                  <div>
                    <Detail>
                      Growth for AI to drive personalized adaptive UI
                    </Detail>
                  </div>
                </StatContent>
              </StatBox>
              <StatBox>
                <StatContent>
                  <div>
                    <StatImage src={icon2} alt="Avatar" />
                    <p>
                      {" "}
                      {isInView && <CountUp start={0} end={46} duration={4} />}%
                    </p>
                  </div>
                  <div>
                    <Detail>
                      Growth for AI to drive personalized adaptive UI
                    </Detail>
                  </div>
                </StatContent>
              </StatBox>
            </StatsContainer>
          </Middle>

          <Right data-aos="fade-left">
            <LargeImageContainer>
              <LargeImage src={aboutBg} alt="Avatar" />
            </LargeImageContainer>
          </Right>
        </Container>
      </div>
    </Section>
  );
};

export default AboutIndustry;

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
  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const StatBox = styled.div``;

const StatImage = styled.img`
  width: 50px;
  height: 50px;

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
  @media screen and (max-width: 540px) {
    grid-template-columns: 0.1fr 1fr;
    gap: 30px;
  }
  h2 {
    font-size: 2rem;
    color: ${colors.theme_red};
  }

  p,
  span {
    font-size: 22px;
    font-weight: 500;
    color: ${colors.theme_red};
    text-transform: capitalize;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
  /* span {
    font-size: 12px;
    color: ${colors.white};
    text-transform: capitalize;
  } */
`;
const Detail = styled.span`
  font-size: 13px !important;
  color: ${colors.white} !important;
  text-transform: capitalize;
  width: 50%;
  display: inline-block;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
const Number = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.theme_red};
`;
