import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icon from "../../assets/icons/howDiff.svg";
import { colors } from "../../ThemeConfig";
import Aos from "aos";
import "aos/dist/aos.css";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";

const SingleIndustry = ({ industry }) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch blog data from API
    const fetchProblemSolution = async () => {
      setIsLoading(true);

      try {
        const response = await clientaxiosInstance.get("/problem-solutions", {
          params: {
            isNeedFull: true,
            section: "industry",
            sub_section: industry,
          },
        });
        console.log(response.data.data);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching casestudy data:", error);
      }
    };

    fetchProblemSolution();
  }, []);

  return (
    <Section>
      <div className="wrapper">
        <MainContainer>
          <Title className="sub-head">
            <span>I</span>ndustry <span>C</span>hallenges <span></span>
          </Title>

          <Description>
            At Aetherbot.AI we aim to cater to your industry needs with our
            Digital Human. We provide a workforce of digital humans which can be
            easily customized for your business needs.
          </Description>

          <Container>
            {isLoading ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3, 1fr", // 3 columns
                  gap: "10px", // Adjust the gap between items as needed
                }}
              >
                {data &&
                  data.map((item, index) => (
                    <SkeletonModule
                      key={index}
                      width={150}
                      height={100}
                      borderRadius={10}
                    />
                  ))}
              </div>
            ) : data && data.length === 0 ? ( // Check if data is empty
              <NoData>No data available</NoData>
            ) : (
              data &&
              data.map((item, index) => (
                <Card key={index} data-aos="zoom-in-up">
                  <CardTitle>Problem</CardTitle>
                  <CardSubtitle>{item.problem} </CardSubtitle>
                  <CardImageContainer>
                    <CardImage src={item.image} alt={`Card ${index + 1}`} />
                  </CardImageContainer>
                  <CardTitle>Solution</CardTitle>
                  <CardSubtitle>{item.solution} </CardSubtitle>
                </Card>
              ))
            )}
          </Container>
        </MainContainer>
      </div>
    </Section>
  );
};

export default SingleIndustry;

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

  @media (max-width: 640px) {
    width: 100%;
    text-align: justify;
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

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
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
  @media screen and(max-width: 768px) {
    &:hover {
      transform: unset;
    }
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
