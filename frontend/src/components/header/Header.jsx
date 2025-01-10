import React, { act, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import logo from "../../assets/icons/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { clientaxiosInstance } from "../../utils/baseurl";

const Header = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoveredSubDropdown, setHoveredSubDropdown] = useState(null);
  const [clickDropdown, setClickDropdown] = useState(null);
  const [clickSubDropdown, setClickSubDropdown] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [industry, setindustry] = useState(null);
  const [platform, setplatform] = useState(null);
  const [useCaseSub, setuseCaseSub] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    fetchIndustry();
    fetchPlatform();
    fetchUseCase();
  }, []);

  const fetchIndustry = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/industries`, {
        params: {
          isNeedFull: true,
        },
      });
      setindustry(response.data.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Industry data:", error);
    }
  };

  const fetchPlatform = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/platformsub`, {
        params: {
          isNeedFull: true,
        },
      });
      setplatform(response.data.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Industry data:", error);
    }
  };

  const fetchUseCase = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/usecasesub`, {
        params: {
          isNeedFull: true,
        },
      });
      setuseCaseSub(response.data.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Industry data:", error);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  //when the screen size reaches 1080px i need to set setToggleMenu to false
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnterDropdown = (menu) => {
    setHoveredDropdown(menu);
  };

  const handleMouseLeaveDropdown = () => {
    setHoveredDropdown(null);
    setHoveredSubDropdown(null); // Ensure the sub-dropdown closes as well
  };
  const handleMouseEnterSubDropdown = (submenu) => {
    setHoveredSubDropdown(submenu);
  };

  const handleMouseLeaveSubDropdown = () => {
    setHoveredSubDropdown(null);
  };
  const handleNavigateIndustry = (page) => {
    console.log("navigation", page);

    navigate(`/industry/${page}`);
  };
  const handleNavigateUseCase = (page) => {
    navigate(`/use-case/${page}`);
  };
  const handleNavigatePlatform = (page) => {
    navigate(`/platform/${page}`);
  };
  const toggleDropDown = (menu) => {
    console.log(menu);
    activeDropdown === "" ? setActiveDropdown(menu) : setActiveDropdown("");
  };
  const handleClickDropDownToggle = (menu) => {
    setClickDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleClickSubDropDownToggle = (submenu) => {
    setClickSubDropdown((prev) => (prev === submenu ? null : submenu));
  };
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  console.log("active dropdown", activeDropdown);

  return (
    <>
      <HeaderDiv>
        <div className="wrapper">
          <Container>
            <Left className="logo">
              <ImageContainer className="logo-container">
                <a href="/">
                  <Image src={logo} alt="Aetherbot.ai" />
                </a>
              </ImageContainer>
            </Left>
            <Nav>
              <Ul>
                <Li>
                  <Link to="/about">Who We Are</Link>
                </Li>

                <Li
                  className="dropdown"
                  onClick={() => toggleDropDown("solutions")}
                >
                  <Link>Solutions</Link>
                  <GoChevronDown fontSize={20} />

                  {activeDropdown === "solutions" && (
                    <DropDown>
                      <ul>
                        {/* Sub-Dropdown */}
                        <li
                          onMouseEnter={() =>
                            handleMouseEnterSubDropdown("industry")
                          }
                          onMouseLeave={handleMouseLeaveSubDropdown}
                        >
                          <DropdownItems>
                            {industry &&
                              industry.map((data, index) => (
                                <li key={index}>
                                  <a
                                    onClick={() =>
                                      handleNavigateIndustry(data.route)
                                    }
                                  >
                                    {data.name}
                                  </a>
                                </li>
                              ))}
                          </DropdownItems>
                        </li>
                        <li
                          onMouseEnter={() =>
                            handleMouseEnterSubDropdown("usecase")
                          }
                          onMouseLeave={handleMouseLeaveSubDropdown}
                        >
                          <>
                            <ul>
                              {useCaseSub &&
                                useCaseSub.map((data, index) => (
                                  <li key={index}>
                                    <a
                                      onClick={() =>
                                        handleNavigateUseCase(data.route)
                                      }
                                    >
                                      {data.route}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </>
                        </li>
                      </ul>
                    </DropDown>
                  )}
                </Li>

                <Li>
                  <Link to="/what-we-do">What We Do</Link>
                </Li>
                <Li
                  className="dropdown"
                  onMouseEnter={() => handleMouseEnterDropdown("platform")}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <Link to="/platform/NeuroCore">Neuracore</Link>
                  {/* <GoChevronDown fontSize={20} /> */}

                  {/* {hoveredDropdown === "platform" && (
                    <DropDown>
                      <ul>
                        {platform.map((data, index) => (
                          <li key={index}>
                            <a
                              onClick={() => handleNavigatePlatform(data.route)}
                            >
                              {data.route}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </DropDown>
                  )} */}
                </Li>
                <Li>
                  <Link to="/blogs">Blog</Link>
                </Li>
              </Ul>
            </Nav>
            <Button to="/book-a-demo">Book A Demo</Button>
          </Container>
        </div>
      </HeaderDiv>
      <MobileHeader>
        <div className="wrapper">
          <MobileContainer>
            <Left className="logo">
              <ImageContainer className="logo-container">
                <a href="/">
                  <Image src={logo} alt="Aetherbot.ai" />
                </a>
              </ImageContainer>
            </Left>

            <Menu onClick={handleToggleMenu}>
              <IoMenu fontSize={30} color="#fff" />
            </Menu>
          </MobileContainer>
        </div>
      </MobileHeader>
      <MobileNav className={toggleMenu ? "active" : ""}>
        <MobileNavContainer>
          <Link to="/about">Who We Are</Link>

          <Li
            className="mobile-dropdown"
            onClick={() => handleClickDropDownToggle("solutions")}
          >
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Solutions</p>
            <GoChevronDown fontSize={20} />

            {clickDropdown === "solutions" && (
              <DropDown className="mobile">
                <ul>
                  {/* Sub-Dropdown */}
                  <li
                    className="mobile-dropdown"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from affecting parent
                      handleClickSubDropDownToggle("industry");
                    }}
                  >
                    <SubDropDown className="mobile">
                      <ul>
                        {industry.map((data, index) => (
                          <li key={index}>
                            <a
                              onClick={() => handleNavigateIndustry(data.route)}
                            >
                              {data.route}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {useCaseSub.map((data, index) => (
                          <li key={index}>
                            <a
                              onClick={() => handleNavigateUseCase(data.route)}
                            >
                              {data.route}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </SubDropDown>
                  </li>
                </ul>
              </DropDown>
            )}
          </Li>

          <Link to="/what-we-do">What We Do</Link>

          <Li
            className="mobile-dropdown"
            onClick={() => handleClickDropDownToggle("platform")}
          >
            <Link to="/platform/Neurocore">Neurocore</Link>
            {/* <GoChevronDown fontSize={20} /> */}

            {/* {clickDropdown === "platform" && (
              <DropDown className="mobile">
                <ul>
                  {platformSub.map((data, index) => (
                    <li key={index}>
                      <a onClick={() => handleNavigatePlatform(data.route)}>
                        {data.route}
                      </a>
                    </li>
                  ))}
                </ul>
              </DropDown>
            )} */}
          </Li>

          <Link to="/blogs">Blog</Link>

          <Button to="/book-a-demo" className="mobile">
            Book A Demo
          </Button>
        </MobileNavContainer>
      </MobileNav>
    </>
  );
};

export default Header;

const HeaderDiv = styled.div`
  background: rgba(87, 87, 87, 0.2); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9;
  padding: 25px 0;
  background: black;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  &.scrolled {
    background: rgba(0, 0, 0, 0.66);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
`;
const Left = styled.div``;
const ImageContainer = styled.div`
  width: 180px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;
const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
const Li = styled.li`
  position: relative;
  min-width: max-content;
  a {
    font-weight: 500;
    &:hover {
      color: ${colors.theme_red};
    }
  }

  &.dropdown {
    display: flex;
    align-items: center;
    gap: 5px;

    /* &:hover {
      svg {
        transition: all 0.4s ease;
        transform: rotate(180deg);
      }
    } */
  }
  &.mobile-dropdown {
    display: grid;
    grid-template-columns: 1fr 0.1fr;
    align-items: center;
    gap: 5px;

    &:hover {
      svg {
        transition: all 0.4s ease;
        transform: rotate(180deg);
      }
    }
  }
`;
const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${colors.grey_background};
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  &.mobile {
    position: static;
    grid-column: span 2;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: max-content;

    &:hover {
      color: white;
    }
    svg {
      &:hover {
        transform: rotate(180deg);
      }
    }
    &.mobile-dropdown {
      display: grid;
      grid-template-columns: 1fr 0.1fr;
      align-items: center;
      gap: 5px;
      padding: 0;

      &:hover {
        svg {
          transition: all 0.4s ease;
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const SubDropDown = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  background: ${colors.grey_background};
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  &.mobile {
    position: static;
    grid-column: span 2;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    padding: 8px 16px;
    min-width: max-content;

    @media screen and (max-width: 540px) {
      padding: 10px 3px;
    }
    &:hover {
      color: white;
    }
  }
  a {
    text-transform: capitalize;
  }
`;

const Button = styled(Link)`
  justify-self: end;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 10px;

  border: 3px solid transparent;
  border-image: linear-gradient(
    90deg,
    rgba(176, 2, 11, 1) 0%,
    rgba(26, 118, 183, 1) 48%,
    rgba(80, 36, 115, 1) 89%
  );
  border-image-slice: 1;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: conic-gradient(
      rgba(176, 2, 11, 1),
      rgba(26, 118, 183, 1),
      rgba(80, 36, 115, 1),
      rgba(176, 2, 11, 1)
    );

    transition: transform 0.3s ease;
    z-index: -1;
    padding: 3px;
  }
  &:hover {
    color: ${colors.theme_red};
    &::after {
      background-image: conic-gradient(
        from var(--angle),
        transparent,
        rgba(176, 2, 11, 1),
        rgba(26, 118, 183, 1),
        rgba(80, 36, 115, 1),
        rgba(176, 2, 11, 1)
      );
      animation: 2s spin linear infinite;
    }
  }
  &.mobile {
    justify-self: center;
  }
`;
const MobileHeader = styled.div`
  display: none;
  background: rgba(87, 87, 87, 0.2); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9;
  padding: 25px 0;
  background: black;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  &.scrolled {
    background: rgba(0, 0, 0, 0.66);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 1080px) {
    display: block;
  }
`;
const MobileContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
`;
const Menu = styled.button`
  justify-self: end;
`;
const MobileNav = styled.div`
  position: fixed;
  z-index: 99;

  top: 82px;
  background-color: ${colors.black};
  padding: 20px;
  width: 100%;
  height: 100dvh;
  overflow: scroll;
  padding-bottom: 40px;
  right: -100%;
  transition: all 0.4s linear;
  &.active {
    right: 0;
  }
`;
const MobileNavContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  text-align: center;
  a {
    font-size: 16px;
  }
`;
const DropdownItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
