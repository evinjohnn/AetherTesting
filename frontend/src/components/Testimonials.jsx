import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../ThemeConfig";
import { clientaxiosInstance } from "../utils/baseurl";

import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second testimonial as active
  const [testimonials, setTestimonial] = useState([]);
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  useEffect(() => {
    // Fetch blog data from API
    const fetchTestimonials = async () => {
      try {
        const response = await clientaxiosInstance.get("/testimonials", {
          params: {
            isNeedFull: true,
          },
        });
        setTestimonial(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade-out animation
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false); // Reset fade-in animation
      }, 500); // Match fade-out animation duration
    }, 3500); // Wait longer than fade-out duration for each cycle

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <MainContainer>
        <p style={{ textAlign: "center" }}>No Testimonials Available</p>
      </MainContainer>
    );
  }

  // Derive left and right indices
  const leftIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (activeIndex + 1) % testimonials.length;

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Left>
            <Title className="sub-head" data-aos="fade-right">
              what our customers says
            </Title>
            <Description data-aos="fade-right" data-aos-duration="1000">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source
            </Description>
          </Left>
          <Right>
            <Box data-aos="fade-left">
              <Left className="box">
                <ImageContainer>
                  <Image
                    src={testimonials[leftIndex]?.image} // Use optional chaining
                    alt={testimonials[leftIndex].name}
                  />
                </ImageContainer>
              </Left>
              <Right className="box">
                <Name>{testimonials[leftIndex]?.name}</Name>
                <Testimonial>
                  {testimonials[leftIndex]?.description}
                </Testimonial>
              </Right>
            </Box>
            <Box data-aos="fade-left" data-aos-duration="2000">
              <Left className="box">
                <ImageContainer>
                  <Image
                    src={testimonials[activeIndex]?.image} // Use optional chaining
                    alt={testimonials[activeIndex]?.name}
                  />
                </ImageContainer>
              </Left>
              <Right className="box">
                <Name>{testimonials[activeIndex]?.name}</Name>
                <Testimonial>
                  {testimonials[activeIndex]?.description}
                </Testimonial>
              </Right>
            </Box>
            <Box data-aos="fade-left">
              <Left className="box">
                <ImageContainer>
                  <Image
                    src={testimonials[rightIndex]?.image}
                    alt={testimonials[rightIndex]?.name}
                  />
                </ImageContainer>
              </Left>
              <Right className="box">
                <Name>{testimonials[rightIndex]?.name}</Name>
                <Testimonial>
                  {testimonials[rightIndex]?.description}
                </Testimonial>
              </Right>
            </Box>
          </Right>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Testimonials;
const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MainContainer = styled.section`
  /* Add any additional styling */
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 50px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div``;
const Title = styled.h3`
  width: 70%;
  text-transform: capitalize;
  padding: 20px 0;
`;
const Description = styled.p``;
const Right = styled.div`
  display: grid;
  justify-items: end;
  gap: 40px;
  @media screen and (max-width: 980px) {
    justify-items: center;
  }
  &.box {
    justify-items: start;
    gap: 5px;
  }
`;
const Box = styled.div`
  padding: 10px 20px;
  border-left: 10px solid ${colors.grey_border};
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  /* opacity: ${({ isFading }) => (isFading ? 0 : 1)};
  animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 0.3s ease; */
  width: 75%;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  &:nth-child(2) {
    margin-right: 50px;
    width: 80%;
    border-left: 10px solid ${colors.theme_red};
    @media screen and (max-width: 980px) {
      margin: auto;
      width: 90%;
    }
  }
`;
const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;
const Name = styled.h3`
  font-weight: 500;
  text-transform: capitalize;
  color: ${colors.black};
`;
const Testimonial = styled.p`
  font-size: 14px;
  color: ${colors.black};
`;
