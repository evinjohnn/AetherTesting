import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../ThemeConfig";
import ButtonComponent from "./ButtonComponent";

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const Demo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const handleNavigate = () => {
    navigate("/book-a-demo");
  };
  return (
    <MainContainer>
      <Container data-aos="zoom-in-up">
        <div className="wrapper">
          <Box>
            <Head>need to book a demo? </Head>
            <Text>click below to get ready for a new experience</Text>
            <ButtonContainer>
              <Line />
              <ButtonComponent text="Book A Demo" onClick={handleNavigate} />
              <Line />
            </ButtonContainer>
          </Box>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Demo;

const MainContainer = styled.section`
  padding-bottom: 45px;
`;
const Container = styled.div`
  width: 50%;
  margin: auto;
  @media screen and (max-width: 980px) {
    width: 90%;
  }
`;
const Box = styled.div`
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 20px;
  background-color: ${colors.grey_background};
  @media screen and (max-width: 430px) {
    padding: 20px 10px;
  }
`;
const Head = styled.h2`
  color: ${colors.theme_red};
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  @media screen and (max-width: 430px) {
    font-size: 25px;
  }
`;
const Text = styled.p`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  /* margin-bottom: 40px; */
`;

const ButtonContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Line = styled.div`
  border-top: 1px solid ${colors.grey_border};
  width: 100px;
`;
