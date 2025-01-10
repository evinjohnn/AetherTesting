// SessionExpired.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../../assets/images/timeout.png";

const SessionExpired = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    localStorage.clear();
    navigate("/admin/login", { replace: true }); // Navigate to the home page and replace the current entry in the history stack
    window.location.reload(); // Force a page refresh
  };

  return (
    <>
      <MainContainer>
        <div className="wrapper">
          <Container>
            <ImageContainer>
              <Image src={image} />
            </ImageContainer>
            <Message>Session Expired</Message>
            <Description>
              Your session has expired. Please log in again.
            </Description>
            <Login onClick={handleLoginRedirect}>Login</Login>
          </Container>
        </div>
      </MainContainer>
    </>
  );
};

export default SessionExpired;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 80px;
`;
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 12px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
`;

const Login = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  background-color: #1a6a89;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
`;
