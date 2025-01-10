import React from "react";
import styled from "styled-components";
import "../../../src/App.css";
import robot from "../../assets/images/popup-03 1.png";
import Button from "../ButtonComponent/Button";
const Popup = ({ onClose }) => {
  const handleAppointmentClick = () => {
    window.location.href = "https://calendly.com/hello-tigrid";
  };

  return (
    <MainConatiner class="gradient-border">
      <Close className="single-arrow" onClick={onClose}>
        {" "}
        <i className="bx bx-right-arrow-alt" style={{ fontSize: "20px" }}></i>
      </Close>

      <MainHead>LOOKING TO KICKSTART A PROJECT ?</MainHead>

      <Description>
        <Left>
          <Paragraph>
            Schedule a <Bold>Free Consultation</Bold> with our experts and
            receive a customized digital strategy for your business.
          </Paragraph>
          <BookingButton onClick={handleAppointmentClick}>
            BOOK NOW
          </BookingButton>
        </Left>

        <Right>
          <ImageContainer>
            <Image src={robot} />
          </ImageContainer>
        </Right>
      </Description>
    </MainConatiner>
  );
};

export default Popup;

const MainConatiner = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #000;
  padding: 40px;
  z-index: 1000;
  width: 35%;
  border-radius: 15px;
  border: solid 1px transparent; /* Set border width */
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#000, #000),
    /* Inner background */
      linear-gradient(180deg, rgba(255, 72, 72, 1) 0%, rgba(41, 0, 204, 1) 100%); /* Gradient border */
  background-origin: border-box;
  background-clip: padding-box, border-box;

  @media screen and (max-width: 980px) {
    width: 45%;
  }
  @media screen and (max-width: 880px) {
    width: 55%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
const MainHead = styled.h3`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  font-family: "Nunito Sans";
  @media screen and (max-width: 640px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
const Description = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 20px;

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
const Left = styled.div``;
const Paragraph = styled.p`
  font-size: 18px;
  font-family: "Nunito Sans";
  font-weight: 100;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
`;
const Right = styled.div``;
const ImageContainer = styled.div`
  /* width: 150px; */
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;

const Close = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 8px;
  background: #fff;
  border: none;
  border-radius: 50px;
  display: flex;
`;
const Bold = styled.span`
  font-weight: 400;
  font-family: "glan-bold";
`;
const BookingButton = styled.button`
  padding: 8px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  font-family: "regular";
  margin-top: 30px;
  cursor: pointer;
  border: none;
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
  @media screen and (max-width: 520px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
