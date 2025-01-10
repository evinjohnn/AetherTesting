import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../../assets/images/WhoWeAre.png";
import aboutBg from "../../assets/images/aboutBg.png";
import icon1 from "../../assets/icons/aboutIcon1.svg";
import icon2 from "../../assets/icons/aboutIcon2.svg";
import ButtonComponent from "../ButtonComponent";
import { colors } from "../../ThemeConfig";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { clientaxiosInstance } from "../../utils/baseurl";
const AboutPage = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [whoweare, setwhoweare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/aboutwhoweare`);
      setwhoweare(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
    }
  };
  console.log(whoweare);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
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

  console.log(whoweare);
  return (
    <Section>
      <div className="wrapper">
        {whoweare &&
          whoweare.map((data, index) => {
            return (
              <Container>
                <Left>
                  <SubHead className="sub-head">{data.title}</SubHead>
                  <Head className="red-head">Aetherbot.Ai</Head>
                  <P>
                    {data.description}
                    {/* <span onClick={toggleReadMore}>Read More</span> */}
                  </P>
                  <CardContainer ref={ref}>
                    {data.card &&
                      data.card.map((item) => {
                        return (
                          <Card>
                            <CardLeft>
                              <IconContainer>
                                <Icon src={icon1} />
                              </IconContainer>
                              <Key>{item.count}B</Key>
                            </CardLeft>
                            <Value>{item.title}</Value>
                          </Card>
                        );
                      })}
                    {/* <Card>
                      <CardLeft>
                        <IconContainer>
                          <Icon src={icon2} />
                        </IconContainer>
                        <Key>
                          {" "}
                          <Key>
                            {isInView && (
                              <CountUp start={0} end={2} duration={8} />
                            )}
                            %
                          </Key>
                        </Key>
                      </CardLeft>
                      <Value>
                        Growth for AI to drivepersonalized adaptive UI
                      </Value>
                    </Card> */}
                  </CardContainer>
                </Left>
                <Right>
                  <ImageContainer>
                    <Image src={data.image} alt="Who We Are" />
                  </ImageContainer>
                </Right>
              </Container>
            );
          })}
      </div>
    </Section>
  );
};

export default AboutPage;

const Section = styled.section``;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
const SubHead = styled.h3``;
const Head = styled.h3``;
const P = styled.p`
  margin: 30px 0;
  a {
    display: inline;
    color: ${colors.theme_red};
    padding-left: 10px;
  }
`;
const Left = styled.div``;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const Card = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 10px;
`;
const Key = styled.h4`
  text-align: center;
  font-size: 25px;
  color: ${colors.theme_red};
`;
const Value = styled.p`
  text-align: left;
  font-size: 13px;
  width: 50%;
`;

const Right = styled.div`
  background: rgb(255, 42, 0);
  background: radial-gradient(
    circle,
    rgba(255, 42, 0, 0.5396752450980392) 0%,
    rgb(23 23 23 / 0%) 53%
  );
`;
const ImageContainer = styled.div`
  height: 300px;
  width: auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const ButtonContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;
const Line = styled.div`
  border-top: 1px solid ${colors.grey_border};
  width: 100px;
`;
const CardLeft = styled.div``;
const IconContainer = styled.div`
  height: 40px;
  width: 40px;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;
