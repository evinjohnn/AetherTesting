import React, { useEffect } from "react";
import styled from "styled-components";
import generateBg from "../../assets/images/generateBg.png";
import { colors } from "../../ThemeConfig";
import left from "../../assets/images/appearence1.png";
import mid from "../../assets/images/appearence2.png";
import right from "../../assets/images/appearence3.png";
import avatar1 from "../../assets/images/appearenceAvatar1.png";
import avatar2 from "../../assets/images/appearenceAvatar2.png";
import avatar3 from "../../assets/images/appearenceAvatar3.png";

import Aos from "aos";
import "aos/dist/aos.css";
const Appearence = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <DivContainer>
        <div className="wrapper">
          {/* Appearence section */}
          <AppearanceSection>
            <Head className="sub-head">
              Customise the <span>Appearence</span>
            </Head>
            <Container>
              <Sections className="left" data-aos="zoom-in">
                <P>choose from our array of avatars</P>
                <ImageContainer>
                  <Image src={avatar1} />
                </ImageContainer>
              </Sections>
              <Sections className="mid" data-aos="zoom-in">
                <P>choose from our array of avatars</P>
                <ImageContainer>
                  <Image src={avatar2} />
                </ImageContainer>
              </Sections>
              <Sections className="right" data-aos="zoom-in">
                <P>choose from our array of avatars</P>
                <ImageContainer>
                  <Image src={avatar3} />
                </ImageContainer>
              </Sections>
            </Container>
          </AppearanceSection>
          {/* Generate Section */}
          <Generate>
            <Head className="sub-head">
              Generate <span>Voice</span>
            </Head>
            <BoxContainer>
              <GenerateBox data-aos="fade-right">
                <Industry className="box">
                  Generate voice using text- to-speech platforms.
                </Industry>
              </GenerateBox>
              <GenerateBox data-aos="fade-left">
                <Industry className="box">
                  clone voice of a real Person
                </Industry>
              </GenerateBox>
            </BoxContainer>
          </Generate>
        </div>
      </DivContainer>
    </MainContainer>
  );
};

export default Appearence;
const MainContainer = styled.section`
  position: relative; /* Ensure pseudo-element and content are stacked properly */
  background: none; /* Remove background image from the main container */

  /* Add a pseudo-element for the background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://s3-alpha-sig.figma.com/img/cf7f/7b85/257a30bbcbc274d89a6eb796dca77273?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U8W07clYuk56HSeTssaq8GqgGxIyfq~jrIJiQPfY6NE1HbJ2HJYZ1em07IBLGAKn3m5aGDiE3Nde~kDNAY2LVb4wK3UQIATEXRGueRkTVMwTU5AIvhWZ-IGijzuEUeB0iW3RuB8InC0JPne-DgOB-odkYedWFjYTQR~C92nMMKC7QhtpfQ7urkJ9P7T-w0cH7EFU2yI8IBVvv-Fgmudzxp-URDpTi5-a3q-xYxgtydhzRiotxGSo3ADfR2IDMqK-3kWoAUD9Easey8aipI3-yDKxGKgyHTWZ7PnbrQwZq29vdJpqnBHmERHDfptPEtT1Tjdr3WfEzKd6nBSToxTgfQ__");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.3; /* Adjust the opacity to your preference */
    z-index: 1; /* Place it below the content */
  }

  /* Ensure child content is displayed above the pseudo-element */
  > * {
    position: relative;
    z-index: 2;
  }
`;

const DivContainer = styled.div``;
const Head = styled.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${colors.theme_red};
  }
`;
const AppearanceSection = styled.div``;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const Sections = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  padding: 30px 20px;

  background: rgba(39, 39, 39, 0.083);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  &.mid {
    background: radial-gradient(
      circle,
      rgba(255, 42, 0, 0.5396752450980392) 0%,
      rgba(23, 23, 23, 0.7441570378151261) 73%
    );
  }
  /* &.left {
    background: url(${left});
  }
  
 */
  &.right {
    @media screen and (max-width: 768px) {
      grid-column: span 2;
    }
    @media screen and (max-width: 480px) {
      grid-column: unset;
    }
  }
  /* background-position: center; */
  background-size: contain;
  background-repeat: no-repeat;

  display: grid;
  place-items: center;
  gap: 20px;
`;
const P = styled.p`
  align-self: end;
  width: 50%;
  text-align: center;
`;
const ImageContainer = styled.div`
  align-self: flex-start;

  height: 70px;
  width: 70px;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
  border-radius: 50%;
`;

const Generate = styled.div``;
const BoxContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const GenerateBox = styled.div`
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 40px 20px;
  background: url(${generateBg});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
`;
const Industry = styled.h4`
  font-size: 18px;
  font-weight: 500;
  align-self: start;
  text-transform: capitalize;
  text-align: center;
  &.box {
    font-size: 22px;
  }
`;
