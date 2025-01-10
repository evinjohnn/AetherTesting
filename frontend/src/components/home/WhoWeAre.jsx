import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../../assets/images/WhoWeAre.png";
import { colors } from "../../ThemeConfig";
import ButtonComponent from "../ButtonComponent";
import CountUp from "react-countup";

import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";
import { useNavigate } from "react-router-dom";
const WhoWeAre = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [whoweare, setwhoweare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchWhoWeAre();
  }, []);

  const fetchWhoWeAre = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/whoweare`);
      setwhoweare(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
    }
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

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <MainContainer>
      <div className="wrapper">
        {isLoading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
              gap: "10px", // Adjust the gap between items as needed
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonModule
                key={index}
                width={350}
                height={350}
                borderRadius={10}
              />
            ))}
          </div>
        ) : whoweare.length === 0 ? ( // Check if data is empty
          <NoData>No data available</NoData>
        ) : (
          <Container>
            {whoweare.map((item, index) => (
              <>
                <Left data-aos="fade-right">
                  <Head className="sub-head">Who We Are</Head>
                  <P>{item.description}</P>
                  <CardContainer ref={ref}>
                    {item.card.map((card, cardIndex) => (
                      <Card>
                        <Key>
                          {isInView && (
                            <CountUp start={0} end={2} duration={2} />
                          )}
                          {card.count}
                        </Key>
                        <Value> {card.description}</Value>
                      </Card>
                    ))}
                  </CardContainer>

                  <ButtonContainer>
                    <ButtonComponent
                      slide={true}
                      text="Learn More"
                      onClick={handleNavigate}
                    />
                    <Line />
                  </ButtonContainer>
                </Left>
                <Right data-aos="fade-left">
                  <ImageContainer>
                    <Image src={item.image} alt="Who We Are" />
                  </ImageContainer>
                </Right>
              </>
            ))}
          </Container>
        )}
      </div>
    </MainContainer>
  );
};

export default WhoWeAre;

const MainContainer = styled.section``;
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
const Head = styled.h3``;
const P = styled.p`
  margin: 30px 0;
`;
const Left = styled.div``;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const Card = styled.div`
  padding: 10px;
  box-shadow: 8px 5px 4px #ff2a0033;
  border-radius: 5px;
`;
const Key = styled.h4`
  text-align: center;
  font-size: 25px;
`;
const Value = styled.p`
  text-align: center;
`;

const Right = styled.div``;
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
  background-color: ${colors.black};
`;
const Line = styled.div`
  border-top: 1px solid ${colors.grey_border};
  width: 100px;
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;
