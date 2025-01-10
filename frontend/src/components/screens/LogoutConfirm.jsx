import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../ThemeConfig";
import logout from "../../assets/icons/logoutConfirm.svg";
import { useNavigate } from "react-router-dom";
const LogoutConfirm = ({ onClose }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    "You will be redirected to the login page. You can always log back at any time"
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300); // duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, [message]);

  const handleLogout = () => {
    setMessage("See you soon!");
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
      window.location.reload();
      // window.location.reload();
    }, 1000);
  };
  return (
    <ModalWrapper>
      <ModalContent>
        <ImgContainer>
          <Img src={logout} alt="logout" />
        </ImgContainer>
        <Description className="p">You sure you want to logout?</Description>
        <Description animate={animate}>{message}</Description>
        <Button className="logout" onClick={handleLogout}>
          Logout
        </Button>
        <Button className="cancel" onClick={onClose}>
          cancel
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default LogoutConfirm;
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const fadeIn = keyframes`
  from {

    opacity: 0;
  }
  to {

    opacity: 1;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 1;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.dark_background};

  padding: 20px;
  border-radius: 8px;

  display: grid;
  justify-items: center;
`;

const Button = styled.button`
  width: 100%;
  text-align: center;
  display: grid;
  margin: 5px 0;
  border-radius: 50px;
  border: 2px solid ${colors.theme_red};
  padding: 10px 20px;
  background-color: ${colors.dark_background};
  color: ${colors.white};

  font-weight: 400;
  text-transform: capitalize;
  &.logout {
    background-color: ${colors.theme_red};
    color: ${colors.white};
  }
`;
const ImgContainer = styled.div`
  height: 300px;
  width: 300px;
  @media screen and (max-width: 540px) {
    /* height: 200px;
    width: 200px; */
    height: 100%;
    width: 100%;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
`;
const Description = styled.p`
  width: 400px;
  text-align: center;
  animation: ${({ animate }) => (animate ? fadeIn : "none")} 1s linear;
  font-size: 14px;
  margin-bottom: 20px;
  color: ${colors.white};
  &.p {
    font-size: 15px;
  }

  @media screen and (max-width: 540px) {
    width: 280px;
  }
  @media screen and (max-width: 430px) {
    width: 240px;
  }
`;
