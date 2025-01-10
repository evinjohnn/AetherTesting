import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../ThemeConfig";
import { notifyError, ToasterNotification } from "../../utils/toastmessage";
import { axiosInstance } from "../../utils/baseurl";
import loginBg from "../../assets/images/login.jpg";
import logo from "../../assets/icons/logo.png";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email) {
        notifyError("Email is required");
        return;
      }
      if (!password) {
        notifyError("Password is required");
        return;
      }

      if (password.length < 5) {
        notifyError("Password must be at least 5 characters");
        return;
      }

      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("accesstoken", response.data.data.accesstoken);
        localStorage.setItem("refreshtoken", response.data.data.refreshtoken);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      // Check if the error response exists and has a message
      if (error.response && error.response.data && error.response.data.error) {
        notifyError(error.response.data.error); // Pass the error message from the backend
      } else {
        notifyError("An unexpected error occurred"); // Fallback error message
      }
    }
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Left>
            <Head>
              <ImageContainer>
                <Image src={logo} alt="aetherbot" />
              </ImageContainer>
            </Head>
            <LoginBox>
              <Title className="sub-head">
                Welcome to <span>Atherbot</span>
              </Title>
              <Subtitle>Secure Authentication</Subtitle>
              <Form>
                {" "}
                <Inputs>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Inputs>
                <Inputs>
                  <Label>Password</Label>

                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Inputs>
                <Button onClick={handleLogin}>Login</Button>
              </Form>
            </LoginBox>
          </Left>

          <Right>
            <OverlayText>AETHER</OverlayText>
            <OverlayText>AETHER</OverlayText>
            <OverlayText>AETHER</OverlayText>
            <OverlayText>AETHER</OverlayText>
          </Right>
        </Container>
        <Footer>© 2024 AI Tech. All Rights Reserved.</Footer>
      </div>
    </MainContainer>
  );
};

export default Login;

const scrollright = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
`;

const scrollleft = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;

  background: url(${loginBg}); // Ensure this is correctly referencing the image
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Black overlay with 50% opacity */
  z-index: 1; /* Ensure it is below the text but above the background */
`;
const Container = styled.div`
  background-color: ${colors.grey_background};
  display: grid;
  grid-template-columns: 1fr 1fr;

  max-height: 500px;
  overflow-y: hidden;
  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
    max-height: unset;
  }
`;
const Head = styled.h4``;
const Left = styled.div`
  padding: 20px;
`;
const Right = styled.div`
  /* background-color: ${colors.theme_red}; */
  padding: 20px;
  overflow: hidden;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const OverlayText = styled.h3`
  font-weight: 800;
  font-size: 80px;
  margin-bottom: 20px;

  &:nth-child(odd) {
    animation: ${scrollright} 8s linear infinite;
  }

  &:nth-child(even) {
    animation: ${scrollleft} 8s linear infinite;
  }

  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(23, 23, 23, 0.8590029761904762) 0%,
    rgba(255, 42, 0, 0.836594012605042) 100%
  );
  background-clip: text;
`;
const ImageContainer = styled.div`
  height: 25px;
  width: 150px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const LoginBox = styled.div`
  padding: 40px 90px;
  @media screen and (max-width: 480px) {
    padding: 40px 10px;
  }
`;
const Title = styled.h1`
  font-size: 26px;
  span {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
`;
const Form = styled.div`
  padding: 30px 0;
  display: grid;
  gap: 20px;
`;
const Inputs = styled.div``;
const Label = styled.label`
  font-size: 13px;
`;
const Input = styled.input`
  margin-top: 10px;

  display: block;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: ${colors.white};
  border: none;
  border-bottom: 1px solid ${colors.white};
  outline: none;
  &::placeholder {
    color: ${colors.grey_border};
    font-size: 14px;
  }

  &:focus {
    border-bottom: 1px solid ${colors.theme_red};
    font-size: 14px;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${colors.theme_red};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 400;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  width: 100%;
  text-align: center;
`;
