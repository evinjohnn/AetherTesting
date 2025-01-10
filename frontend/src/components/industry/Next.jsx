import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";

import one from "../../assets/icons/next1.svg";
import two from "../../assets/icons/next2.svg";
import three from "../../assets/icons/next3.svg";

import Aos from "aos";
import "aos/dist/aos.css";
const boxContents = [
  {
    image: one,
    text: "Deploy Our Product Environment As A Kiosk Mobile App Website Or As Ar Vr",
  },
  {
    image: two,
    text: "Continuous Customer Technical Support.",
  },
  {
    image: three,
    text: "Customize The Product Integrated With Digital Human With Our Sdk According To Your Industry.",
  },
];
const Next = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head">NEXT STEPS</Head>
        <Container>
          {boxContents &&
            boxContents.map((step) => {
              return (
                <Box data-aos="fade-up">
                  <ImageContainer>
                    <Image src={step.image} alt="Next Steps" />
                  </ImageContainer>
                  <P>{step.text}</P>
                </Box>
              );
            })}
        </Container>
      </div>
    </MainContainer>
  );
};

export default Next;
const MainContainer = styled.section``;
const Head = styled.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 90px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Box = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  &:nth-child(2) {
    transform: translateY(-40%);
    @media screen and (max-width: 768px) {
      transform: unset;
    }
  }
  &:last-child {
    @media screen and (max-width: 768px) {
      grid-column: span 2;
    }
    @media screen and (max-width: 420px) {
      grid-column: unset;
    }
  }
`;
const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background-color: ${colors.white};
  padding: 15px;
  outline-offset: 5px;
  outline: 3px dashed ${colors.theme_red};
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  display: block;
`;
const P = styled.p`
  text-align: center;
`;
