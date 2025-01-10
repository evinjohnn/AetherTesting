import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import clock from "../../assets/icons/clock.svg";
import aboutBg from "../../assets/images/WhoWeAre.png";
import { clientaxiosInstance } from "../../utils/baseurl";
const AboutSection = () => {
  const [whoweare, setwhoweare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/platformwhoweare`);
      setwhoweare(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
    }
  };
  console.log(whoweare);

  return (
    <Section>
      <div className="wrapper">
        {whoweare &&
          whoweare.map((data, index) => {
            return (
              <Container>
                <Left>
                  <Title className="sub-head">{data.title}</Title>
                  <Description>{data.description}</Description>
                </Left>
                <Middle>
                  <StatsContainer>
                    {data.card &&
                      data.card.map((item, index) => {
                        return (
                          <StatBox>
                            <StatContent>
                              <StatImage src={clock} alt="Avatar" />
                              <div>
                                <p>
                                  {item.count} {item.title}
                                </p>
                                <span>saved</span>
                              </div>
                            </StatContent>
                          </StatBox>
                        );
                      })}

                    {/* <StatBox>
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
                    </StatBox> */}
                  </StatsContainer>
                </Middle>

                <Right>
                  <LargeImageContainer>
                    <LargeImage src={data.image} alt="Avatar" />
                  </LargeImageContainer>
                </Right>
              </Container>
            );
          })}
      </div>
    </Section>
  );
};

export default AboutSection;

const Section = styled.section``;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 1fr;
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
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;

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
