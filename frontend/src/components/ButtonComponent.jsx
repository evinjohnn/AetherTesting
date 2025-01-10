import React from "react";
import styled from "styled-components";
import { colors } from "../ThemeConfig";
const ButtonComponent = ({
  onClick = () => console.log("clicked"),
  text,
  slide,
}) => {
  return (
    <Button onClick={onClick} slide={slide}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
const Button = styled.button`
  padding: 10px 18px;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 14px;
  color: ${colors.white};
  position: relative;
  overflow: hidden;
  min-width: max-content;
  z-index: 3;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background-color: ${colors.theme_red};
    transition: all 0.6s linear;
    z-index: -1;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    transform: ${({ slide }) => (slide ? "translate(80px)" : "translate(0px)")};
    transition: ${({ slide }) => (slide ? "all 0.5s ease" : "none")};
  }
`;
