import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { clientaxiosInstance } from "../../utils/baseurl";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    // Fetch blog data from API
    const fetchTimeline = async () => {
      try {
        const response = await clientaxiosInstance.get("/timelines", {
          params: {
            isNeedFull: true,
          },
        });
        //console.log(response.data.data);
        setTimeline(response.data.data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimeline();
  }, []);

  useEffect(() => {
    // Automatically update the active index every 2 seconds
    const interval = setInterval(() => {
      setAnimate(true); // Trigger fade-out animation
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % timeline.length);
        setAnimate(false); // Trigger fade-in animation
      }, 300); // Match the fade-out animation duration
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timeline.length]);

  // const handleRotate = () => {
  //   setAnimate(true); // Trigger the fade-out animation
  //   setTimeout(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % timeline.length);
  //     setAnimate(false); // Trigger the fade-in animation
  //   }, 300); // Match this delay with the fade-out animation duration
  // };

  // const handleRotate = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  // };
  const getPrevIndex = () =>
    (activeIndex - 1 + timeline.length) % timeline.length;
  const getNextIndex = () => (activeIndex + 1) % timeline.length;

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Left>
            {timeline.length > 0 && (
              <>
                <DotContainer animate={animate} className="top">
                  <Dot />
                  <h2>{timeline[getPrevIndex()].year}</h2>
                </DotContainer>
                <DotContainer animate={animate}>
                  <Dot isActive={true} />
                  <h2>{timeline[activeIndex].year}</h2>
                </DotContainer>
                <DotContainer animate={animate} className="bottom">
                  <Dot />
                  <h2>{timeline[getNextIndex()].year}</h2>
                </DotContainer>
              </>
            )}
            <Content>
              <p style={{ color: "#fff", position: "absolute", right: 0 }}>
                timeline
              </p>
            </Content>
          </Left>
          <Right animate={animate}>
            {timeline.length > 0 && (
              <>
                {/* <h2>{timeline[activeIndex].year}</h2> */}
                <h3>{timeline[activeIndex].event}</h3>
                <p>{timeline[activeIndex].description}</p>
              </>
            )}
          </Right>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Timeline;
const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MainContainer = styled.div``;
const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 0.6fr 2fr;
  align-items: center;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 230px;
  }
  @media screen and (max-width: 540px) {
    gap: 170px;
  }
`;
const Left = styled.div`
  position: relative;
  left: -60%;
  top: 50%;
  transform: translateY(-50%);
  height: 600px;
  width: 600px;

  border-radius: 50%;
  border: 1px solid #6b6b6b;

  @media screen and (max-width: 1080px) {
    height: 100%;
    width: 100%;
    left: unset;
    top: unset;
    transform: unset;
  }
`;
const Right = styled.div`
  color: #fff;
  color: #fff;
  opacity: ${({ animate }) => (animate ? 0 : 1)};
  animation: ${({ animate }) => (animate ? fadeOut : fadeIn)} 0.3s ease forwards;
`;
const DotContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -273px;
  transform: translateY(-50%);
  display: grid;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 1080px) {
    top: unset;
    left: 50%;
    transform: translateX(-50%);
    right: unset;
    display: block;
  }
  h2 {
    width: 167px;

    margin-left: 115px;
    color: #fff;
    font-size: 85px;
    opacity: ${({ animate }) => (animate ? 0 : 1)};
    animation: ${({ animate }) => (animate ? fadeOut : fadeIn)} 0.3s ease
      forwards;

    @media screen and (max-width: 1080px) {
      width: unset;
      margin-left: 0;
      margin-top: 50px;
      font-size: 65px;
    }
    @media screen and (max-width: 540px) {
      font-size: 45px;
    }
    @media screen and (max-width: 420px) {
      font-size: 37px;
    }
  }
  &.top {
    top: 115px;
    right: -210px;
    @media screen and (max-width: 1080px) {
      top: unset;
      left: 20px;
      right: unset;
      transform: unset;
    }
    h2 {
      opacity: 0.5;
      font-size: 65px;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }
      @media screen and (max-width: 540px) {
        font-size: 25px;
      }
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
    }
  }
  &.bottom {
    top: unset;
    bottom: 40px;
    right: -225px;
    @media screen and (max-width: 1080px) {
      top: unset;
      left: unset;
      right: 20px;
      bottom: unset;
      transform: unset;
    }
    h2 {
      opacity: 0.5;
      font-size: 65px;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }
      @media screen and (max-width: 540px) {
        font-size: 25px;
      }
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
    }
  }
`;

const Dot = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: ${({ isActive }) => (isActive ? "#ff0000" : "#fff")};
  border-radius: 50%;

  @media screen and (max-width: 1080px) {
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
  }
`;
const Content = styled.div`
  position: absolute;
  right: 80px;
  top: 45%;
  transform: translateY(-50%);
  p {
    font-size: 40px;
    font-weight: 600;
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
