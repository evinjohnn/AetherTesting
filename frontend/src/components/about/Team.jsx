import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";
const boxContent = [
  {
    id: 1,
    name: "Nihal",
    position: "CEO",
    description: "A Graduate of cochin university of science and technology",
    department: "Head",
    src: "https://s3-alpha-sig.figma.com/img/b437/5247/c9ed39b90ad6de42f855680cf4d8f730?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBLHE~nLiqXqa9OBu7Wnu50hO-tgzfj603f8HigvL34xXb6Vg8csu59ew41FNPNi3FqD15npNyamq4eUP~6by96zkIM8wdJAMVcYtH5kKLSJM-nJMlEyE8KiS8KTRI8D-ANK-PaEqaK0l2qzNc-tQWGsxXnItjAJ74651ggIEoKVimCeQV7kuFtTjlWd7BWXT5xgrorD3MZfqF6z2O2yOXv4KlHR7McxL9KGAFUCTTU7r3ZQogAyxrY4sp-TsOELSCyo9u8gNJRvNOXAUxXaBmt5AATxtOWgK-PlqzWofoFUW~2ODwEuxM42xSZPiVyAfFE-p4lGj9r7QxDqS1nsSw__",
  },
  {
    id: 2,
    name: "Priya",
    position: "CTO",
    description: "A Graduate of cochin university of science and technology",
    department: "Operations",
    src: "https://s3-alpha-sig.figma.com/img/b437/5247/c9ed39b90ad6de42f855680cf4d8f730?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBLHE~nLiqXqa9OBu7Wnu50hO-tgzfj603f8HigvL34xXb6Vg8csu59ew41FNPNi3FqD15npNyamq4eUP~6by96zkIM8wdJAMVcYtH5kKLSJM-nJMlEyE8KiS8KTRI8D-ANK-PaEqaK0l2qzNc-tQWGsxXnItjAJ74651ggIEoKVimCeQV7kuFtTjlWd7BWXT5xgrorD3MZfqF6z2O2yOXv4KlHR7McxL9KGAFUCTTU7r3ZQogAyxrY4sp-TsOELSCyo9u8gNJRvNOXAUxXaBmt5AATxtOWgK-PlqzWofoFUW~2ODwEuxM42xSZPiVyAfFE-p4lGj9r7QxDqS1nsSw__",
  },
  {
    id: 3,
    name: "Sakshi",
    position: "Head of Finance",
    description: "A Graduate of cochin university of science and technology",
    department: "Finance",
    src: "https://s3-alpha-sig.figma.com/img/b437/5247/c9ed39b90ad6de42f855680cf4d8f730?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBLHE~nLiqXqa9OBu7Wnu50hO-tgzfj603f8HigvL34xXb6Vg8csu59ew41FNPNi3FqD15npNyamq4eUP~6by96zkIM8wdJAMVcYtH5kKLSJM-nJMlEyE8KiS8KTRI8D-ANK-PaEqaK0l2qzNc-tQWGsxXnItjAJ74651ggIEoKVimCeQV7kuFtTjlWd7BWXT5xgrorD3MZfqF6z2O2yOXv4KlHR7McxL9KGAFUCTTU7r3ZQogAyxrY4sp-TsOELSCyo9u8gNJRvNOXAUxXaBmt5AATxtOWgK-PlqzWofoFUW~2ODwEuxM42xSZPiVyAfFE-p4lGj9r7QxDqS1nsSw__",
  },
];
const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeActive = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Fetch blog data from API
    const fetchTeam = async () => {
      setIsLoading(true);
      try {
        const response = await clientaxiosInstance.get("/teams", {
          params: {
            isNeedFull: true,
          },
        });
        //console.log(response.data.data);
        setTeam(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeam();
  }, []);
  //console.log(team);
  //console.log(activeIndex);
  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <Left>
            <Head className="sub-head">The Team</Head>
            <Div>
              <Head className="rotate">The Team</Head>
              <Description className="top">
                At Aetherbot.ai, our team is the heart of our success.
                Comprising diverse, skilled, and passionate professionals, we
                collaborate to deliver innovative solutions and exceptional
                results. Meet the core members who drive our vision forward.
              </Description>
            </Div>
          </Left>
          {isLoading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
                gap: "10px", // Adjust the gap between items as needed
              }}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width={150}
                  height={100}
                  borderRadius={10}
                />
              ))}
            </div>
          ) : team.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <>
              <Right>
                {team &&
                  team.map((user, index) => {
                    return (
                      <Box
                        onClick={() => handleChangeActive(index)}
                        className={activeIndex === index ? "active" : ""}
                        key={user.index}
                      >
                        <ImageContainer
                          className={activeIndex === index ? "" : "invert"}
                        >
                          <Image src={user.image} alt={user.name} />
                        </ImageContainer>
                        {activeIndex === index ? (
                          <Content>
                            <Title>
                              {user.name} - {user.position}
                            </Title>
                            <Description>{user.education}</Description>
                          </Content>
                        ) : (
                          <Title className="rotate">{user.position}</Title>
                        )}
                      </Box>
                    );
                  })}
              </Right>
              <MobileCurrentUser>
                <p className="name">{team[activeIndex].name}</p>
                <p className="role">{team[activeIndex].position}</p>
              </MobileCurrentUser>
            </>
          )}
        </Container>
      </div>
    </MainContainer>
  );
};

export default Team;
const MainContainer = styled.section``;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div``;
const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;

const Right = styled.div`
  justify-self: end;

  display: flex;
  gap: 10px;

  @media screen and (max-width: 980px) {
    justify-self: center;
  }
`;
const Head = styled.h3`
  &.rotate {
    position: absolute;
    left: -85px;
    top: 36%;
    transform: translateY(-50%);
    transform: rotate(-90deg);
    font-size: 42px;
    font-weight: 400;
    color: ${colors.grey_border};
    @media screen and (max-width: 980px) {
      top: 38%;
      left: -60px;

      font-size: 33px;
    }
  }
`;
const Div = styled.div`
  position: relative;
  margin-top: 30px;
  &.photos {
    display: flex;
    gap: 10px;
  }
`;
const Description = styled.p`
  &.top {
    padding-left: 40px;
  }
`;
const Box = styled.div`
  position: relative;
  height: 300px;
  width: 150px;
  transition: width 0.3s linear;
  @media screen and (max-width: 980px) {
    width: 120px;
  }
  @media screen and (max-width: 540px) {
    width: 90px;
  }
  @media screen and (max-width: 420px) {
    width: 60px;
  }
  &.active {
    width: 300px;
    @media screen and (max-width: 980px) {
      width: 200px;
    }
    @media screen and (max-width: 540px) {
      width: 180px;
    }
    @media screen and (max-width: 420px) {
      width: 130px;
    }
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  &.invert {
    filter: grayscale(1);
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;
const Content = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: 90%;
  padding: 10px;

  background: rgba(76, 76, 76, 0.25);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.theme_red};
  text-transform: uppercase;

  &.rotate {
    font-size: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    transform-origin: center;
    @media screen and (max-width: 430px) {
      display: none;
    }
  }
`;

const MobileCurrentUser = styled.div`
  display: none;

  @media screen and (max-width: 430px) {
    display: block;
    text-align: center;
  }
  p {
    &.name {
      font-size: 30px;
      font-weight: 600;
      color: ${colors.theme_red};
    }
    &.role {
      font-size: 22px;
      font-weight: 500;
      color: ${colors.white};
    }
  }
`;
