import React from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";

const InAction = () => {
  return (
    <MainContainer>
      <Head className="sub-head">
        Digital Human In <span>Action</span>
      </Head>
      <Container></Container>
    </MainContainer>
  );
};

export default InAction;
const MainContainer = styled.section``;
const Head = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${colors.theme_red};
  }
`;
const Container = styled.div`
  background-image: url("https://s3-alpha-sig.figma.com/img/d1ef/03e5/7de7dabf0cadc752e79decab6da36635?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T7Q4dih-6Mpdz9P6ID4wEuYsR5bzt6yPHMQ9ngXADgUrEs4t8voB2NJPQx2~7UebPBfJVZueXjcvbnLj0z0mC49B7A7DpRnx8Wb-FBm9rVL-vJhsWm3XECZfe~~T0k1oQo0u0CBL~2G8G8ReGvakFVSWjum0Qu3lzVY0FZKAJUGXIKUBBjvP8fKGLmAajUa2hLSQdw-yvf2ctH8-TnIKFZgp~ZQVSZpXT0mjtUUhI9fjOwHM6o4jwUIAkhXPak0kawgQ2UpC-W5OptGbrk17KtsQuuLjks~jXW-z5YuTmHGR3LvHi9EbUAnLd-~x2U-RiQ5-Tp3W6Pz2mi2wdRCQIg__");
  background-size: cover;
  background-position: center;

  height: 400px;
  width: 100%;
`;
