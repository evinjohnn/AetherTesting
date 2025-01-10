import React from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // go back to the previous page
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Left>
            <h4>404</h4>
            <h3>Page not found!</h3>
            <p>
              The page you are looking for has been removed or does not exist
            </p>
            <Link to="/">
              <button>Back To Home</button>
            </Link>
          </Left>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Page404;

const MainContainer = styled.div`
  animation: fromTop 0.8s ease;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;
const BlobContainer = styled.div`
  position: absolute;
  top: -180px;
  left: -150px;
  z-index: -1;
  height: 450px;
  width: 450px;
`;
const ImageContainer = styled.div`
  height: 500px;
  width: 500px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const Left = styled.div`
  padding-left: 80px;
  display: grid;
  justify-items: start;
  gap: 10px;
  h4 {
    font-size: 60px;
    font-weight: 800;
    margin: 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }
  button {
    border-radius: 50px;
    padding: 10px 25px;
    font-size: 18px;

    margin-top: 10px;
  }
`;
const Right = styled.div``;
