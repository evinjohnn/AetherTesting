import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import whywrk1 from "../../assets/icons/whywrk1.svg";
import whywrk2 from "../../assets/icons/whywrk2.svg";
import whywrk3 from "../../assets/icons/whywrk3.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const WorkWithUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const carddata = [
    {
      id: 1,
      title: "Innovative Environment:",
      description:
        "Collaborate on projects that redefine AI applications across industries.",
      image: whywrk1,
    },
    {
      id: 2,
      title: "Career Growth:",
      description:
        "Opportunities for internships and full-time roles with competitive packages.",
      image: whywrk2,
    },
    {
      id: 3,
      title: "Hands-On AI Experience:",
      description:
        "Work with cutting-edge technology like Unreal Engine and LLMs.",
      image: whywrk3,
    },
  ];

  return (
    <Section>
      <div className="wrapper">
        <Header className="sub-head" data-aos="fade-right">
          Why Work with Us?
        </Header>
        <SectionBody data-aos="fade-left">
          At Aetherbot.ai, we offer students the chance to work with
          cutting-edge AI technologies like Unreal Engine and Large Language
          Models (LLMs). Gain hands-on experience through internships and
          real-world projects, while receiving mentorship from industry experts.
          Outstanding performers can secure full-time roles with attractive
          packages. We provide workshops, research opportunities, and a chance
          to contribute to AI advancements.
        </SectionBody>
        <CardContainer>
          {carddata.map((card, index) => (
            <Card
              data-aos={
                card.id === 1
                  ? "fade-right"
                  : index === 2
                  ? "fade-left"
                  : "zoom-in"
              }
              key={card.id}
            >
              <ImageContainer>
                <Image src={card.image} alt={card.title} />
              </ImageContainer>
              <CardData>
                <Title>{card.title}</Title>
                <Text>{card.description}</Text>
              </CardData>
            </Card>
          ))}
        </CardContainer>
      </div>
    </Section>
  );
};

export default WorkWithUs;

const Section = styled.div`
  margin-top: 80px;
  padding: 40px 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SectionBody = styled.p`
  text-align: center;
  width: 73%;
  margin: auto;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 70px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  background: ${colors.theme_red};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const CardData = styled.div`
  text-align: center;
  padding-top: 40px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${colors.white};
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.white};
`;
