import React from "react";
import styled, { keyframes } from "styled-components";
import arrow from "../../assets/icons/arrow.svg";
import { colors } from "../../ThemeConfig";
import { clientaxiosInstance } from "../../utils/baseurl";

const StandOut = () => {
  const [technology, setTechnology] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTechnology();
  }, []);

  const fetchTechnology = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/technologies`, {
        params: {
          isNeedFull: true,
        },
      });
      setTechnology(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Technology data:", error);
    }
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <Head className="sub-head">
          How Aetherbot.ai’s Digital Human Technology Stands Out?
        </Head>
      </div>
      <Marquee>
        <MarqueeGroup>
          {technology &&
            technology.map((card, index) => (
              <>
                <Span>
                  <ImageContainer>
                    <Icon src={card.image} alt="Latest Works" />
                  </ImageContainer>
                  {/* <IconContainer>
                <InnerIcon src={card.image} alt="case studies" />
              </IconContainer> */}
                  <P>{card.text}</P>
                  {/* <Description>
                <Content>{card.description}</Content>
              </Description> */}
                  <Button>
                    <Icon src={arrow} alt="redirect" />
                  </Button>
                  <Points>
                    {card.points.map((point, index) => (
                      <Point key={index}>{point}</Point>
                    ))}
                  </Points>
                </Span>
              </>
            ))}
        </MarqueeGroup>
      </Marquee>
    </MainContainer>
  );
};

export default StandOut;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;
const rotate = keyframes`
 from {
    transform: rotate(0);
  }
    to {
     transform: rotate(90deg); 
    } `;
const MainContainer = styled.section`
  /* padding-bottom: 120px; */
`;
const Head = styled.h3`
  text-align: center;
  width: 50%;
  margin: auto;
`;
const PageDescription = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
`;
const Marquee = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: visible;

  padding: 30px 0 0 0;
`;
const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  animation: ${scroll} 30s linear infinite;
  width: calc(200%); /* Ensures seamless animation */
  min-height: 400px;

  &:hover {
    animation-play-state: paused;
  }
`;

const Description = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 20px;
  z-index: 2;
`;
const Content = styled.p`
  font-size: 13px;
  max-height: 0px;
  overflow: hidden;
  font-weight: 300;

  text-transform: capitalize;
  text-align: center;

  transition: max-height 1s linear;
`;
const Button = styled.div`
  width: 50px; /* Ensure fixed size */
  height: 50px; /* Ensure fixed size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  padding: 14px;
  transform-origin: center; /* Rotate around its center */
  transition: transform 0.3s ease; /* Add smooth transition if needed */
  position: absolute;
  bottom: -30px;
`;

const Points = styled.ul`
  position: absolute;
  bottom: -140px;
  opacity: 0;
  background-color: ${colors.grey_background};
  padding: 0 20px;
  border-radius: 5px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #ff2a00, #ffffff1e);
  border-image-slice: 1;
`;
const Span = styled.span`
  background-color: ${colors.grey_background};
  display: grid;
  place-items: center;
  position: relative;
  padding: 20px;
  &:hover {
    ${Content} {
      max-height: 300px;
    }
    ${Button} {
      animation: ${rotate} 1s linear forwards;
      transform-origin: center; /* Ensure rotation doesn't affect layout */
    }
    ${Description} {
      background-color: #fff;
      p {
        color: #000;
      }
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, #c4c4c423 0%, #ff2a009d 76%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }
    ${Points} {
      transition: all 2s ease;
      opacity: 1;
    }
  }
`;
const ImageContainer = styled.div`
  height: 160px;
  width: 250px;
  padding: 0 70px;

  @media screen and (max-width: 1180px) {
    height: 300px;
    width: 300px;
  }
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 5px;
`;
const InnerIcon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;
const P = styled.p`
  font-size: 13px;

  text-transform: capitalize;
  text-align: center;
`;

const Point = styled.li`
  padding: 10px 0;
  min-width: max-content;
`;
