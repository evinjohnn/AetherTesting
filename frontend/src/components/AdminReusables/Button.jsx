import React from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { GoPlus } from "react-icons/go";
const AdminButton = ({ head, button, onClick, display }) => {
  return (
    <Container>
      <Head className="red-head">{head}</Head>
      <ButtonContainer onClick={onClick} display={display}>
        <GoPlus />
        {button}
      </ButtonContainer>
    </Container>
  );
};

export default AdminButton;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Head = styled.div`
  color: ${colors.white};
  padding: 22px 0;
`;

const ButtonContainer = styled.button`
  background-color: ${colors.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.white};
  border-radius: 6px;
  align-items: center;
  gap: 6px;
  display: ${({ display }) => (display ? "none" : "flex")};
  svg {
    color: ${colors.white};
    font-size: 20px;
  }
`;
