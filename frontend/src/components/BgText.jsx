import React from "react";
import styled, { keyframes } from "styled-components";

const BgText = ({ text, align }) => {
  return (
    <Head>
      {" "}
      <H1 align={align} dangerouslySetInnerHTML={{ __html: text }}></H1>
    </Head>
  );
};

export default BgText;
const fluid = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const Head = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;
  background: linear-gradient(
    90deg,
    rgba(20, 106, 186, 1),
    rgba(29, 170, 153, 1),
    rgba(101, 22, 101, 1),
    rgba(180, 0, 7, 1),
    rgb(19, 132, 233),
    rgb(19, 132, 233),
    rgb(211, 141, 101)
  );
  background-size: 300% 300%; /* Makes the gradient larger for a flowing effect */
  background-clip: text;
  -webkit-background-clip: text; /* For WebKit-based browsers */
  color: transparent;
  animation: ${fluid} 5s linear infinite; /* Adjust the duration as needed */
`;

const H1 = styled.h1`
  color: transparent;
  font-size: 50px;
  font-weight: 650;
  text-align: ${(props) => props.align}; /* Use props to set text-align */
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 43px;
  }
  @media screen and (max-width: 540px) {
    font-size: 36px;
  }
  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`;
