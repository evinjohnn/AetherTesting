import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../ThemeConfig";
import LogoutConfirm from "../../screens/LogoutConfirm";
import logo from "../../../assets/icons/logo.png";
import {
  MdDashboard,
  MdLogout,
  MdContactPage,
  MdQuestionAnswer,
  MdPhotoLibrary,
  MdPeople,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrBlog } from "react-icons/gr";
import {
  FaInfoCircle,
  FaUsers,
  FaRegListAlt,
  FaNewspaper,
} from "react-icons/fa";

// Define the admin sidebar component
const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Define the sidebar items with appropriate icons
  const sidebarItems = [
    {
      id: 1,
      label: "Dashboard",
      route: "admin/dashboard",
      icon: <MdDashboard />,
    },
    {
      id: 2,
      label: "Home",
      icon: <RxDashboard />,
      subLinks: [
        { label: "Clients", route: "admin/dashboard/clients" },
        { label: "Who We Are", route: "admin/dashboard/whoweare" },
        { label: "Industry", route: "admin/dashboard/industry" },
        { label: "Technology", route: "admin/dashboard/technology" },
        { label: "Case Section", route: "admin/casesection" },
      ],
    },
    {
      id: 3,
      label: "Who We Are",
      icon: <FaInfoCircle />,
      subLinks: [
        { label: "Timeline", route: "admin/timeline" },
        { label: "Team", route: "admin/team" },
        {
          label: "Mission",
          route: "admin/whatwedo/mission",
        },
        {
          label: "How Different",
          route: "admin/howDifferent",
        },
      ],
    },
    {
      id: 4,
      label: "Solutions",
      icon: <FaInfoCircle />,
      subLinks: [
        {
          label: "Industry",
          route: "/admin/dashboard",
          subSubLink: [
            { label: "Problem Solution", route: "admin/problem-solution" },
            { label: "Case Study", route: "admin/casestudies" },
          ],
        },
        {
          label: "Usecase",
          route: "admin/team",
          subSubLink: [
            { label: "Problem Solution", route: "admin/problem-solution" },
            { label: "Case Study", route: "admin/casestudies" },
          ],
        },
        {
          label: "Platform",
          route: "admin/platform",
          subSubLink: [
            { label: "Problem Solution", route: "admin/problem-solution" },
            { label: "Case Study", route: "admin/casestudies" },
          ],
        },
      ],
    },
    {
      id: 5,
      label: "What We Do",
      icon: <RxDashboard />,
      subLinks: [
        { label: "Testimonials", route: "admin/testimonial" },
        { label: "Case Study", route: "admin/casestudies" },
        { label: "Process", route: "admin/process" },
      ],
    },
    {
      id: 6,
      label: "Book A Demo",
      icon: <RxDashboard />,
      subLinks: [
        { label: "Questionare", route: "admin/questionaire" },
        { label: "Testimonials", route: "admin/testimonial" },
        { label: "FAQ", route: "admin/faq" },
      ],
    },
    {
      id: 7,
      route: "admin/sections",
      label: "Section Titles",
      icon: <RxDashboard />,
    },
    {
      id: 8,
      label: "Contact",
      route: "admin/contact",
      icon: <MdContactPage />,
    },

    {
      id: 9,
      label: "Banner",
      route: "admin/banner",
      icon: <MdPhotoLibrary />,
    },
    {
      id: 10,
      label: "Blog",
      route: "admin/blog",
      icon: <GrBlog />,
    },

    {
      id: 11,
      label: "Footer",
      route: "admin/footer",
      icon: <FaUsers />,
    },
    {
      id: 12,
      label: "Video",
      route: "admin/video",
      icon: <MdLogout />,
    },
  ];
  // Update activeNavItem based on location
  useEffect(() => {
    const activeItem = sidebarItems.find(
      (item) =>
        `/${item.route}` === location.pathname || // Add `/` before item.route
        item.subLinks?.some(
          (subLink) => `/${subLink.route}` === location.pathname
        )
    );

    setActiveNavItem(activeItem ? activeItem.id : null);
  }, [location.pathname, sidebarItems]);

  const handleShowLogout = () => setShowLogout(true);

  const handleCancelLogout = () => setShowLogout(false);

  const handleToggleDropdown = (id, route, hasSubLinks) => {
    if (hasSubLinks) {
      setOpenDropdown(openDropdown === id ? null : id);
    } else {
      navigate(`/${route}`);
    }
  };
  console.log("activeItem", activeNavItem);

  return (
    <>
      <SidebarContainer sideBarExpanded={true}>
        <H1>
          <AContainer to="/admin/dashboard">
            <LogoContainer>
              <Logo src={logo} alt="Logo" />
            </LogoContainer>
          </AContainer>
        </H1>
        <ItemContainer>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.id}>
              <SidebarLink
                className={activeNavItem === item.id ? "active" : ""}
                onClick={() =>
                  handleToggleDropdown(item.id, item.route, !!item.subLinks)
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </SidebarLink>

              {item.subLinks && openDropdown === item.id && (
                <SubLinks className={openDropdown === item.id ? "expand" : ""}>
                  {item.subLinks.map((subLink) => (
                    <>
                      <SubLink
                        key={subLink.route}
                        to={`/${subLink.route}`}
                        className={
                          location.pathname === `/${subLink.route}`
                            ? "active"
                            : ""
                        }
                      >
                        {subLink.label}
                      </SubLink>
                      {subLink.subSubLink && subLink.subSubLink ? (
                        subLink.subSubLink.map((subSub) => {
                          return (
                            <SubSubLink
                              key={subSub.route}
                              to={`/${subSub.route}`}
                              className={
                                location.pathname === `/${subSub.route}`
                                  ? "active"
                                  : ""
                              }
                            >
                              {subSub.label}
                            </SubSubLink>
                          );
                        })
                      ) : (
                        <SubLink
                          key={subLink.route}
                          to={`/${subLink.route}`}
                          className={
                            location.pathname === `/${subLink.route}`
                              ? "active"
                              : ""
                          }
                        >
                          {subLink.label}
                        </SubLink>
                      )}
                    </>
                  ))}
                </SubLinks>
              )}
            </SidebarItem>
          ))}
          <SidebarFooter>
            <LogoutSidebarItem onClick={handleShowLogout}>
              <MdLogout /> <span>Log out</span>
            </LogoutSidebarItem>
          </SidebarFooter>
        </ItemContainer>
      </SidebarContainer>

      {showLogout && <LogoutConfirm onClose={handleCancelLogout} />}
    </>
  );
};

export default AdminSidebar;
// Define the sidebar container styles
const SidebarContainer = styled.div`
  width: 250px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  transition: width 0.3s ease;
  background-color: ${colors.dark_background};
`;
const H1 = styled.h1`
  margin: 0 auto;
  border-bottom: 1px solid ${colors.grey_border};
  padding: 16px 0;
  display: grid;
  justify-items: center;
`;

const AContainer = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  p {
    text-align: left;
    font-weight: 300;
    padding-right: 42px;
    margin-left: 10px;
    font-size: 12px;
    color: #646464;
  }
`;

const LogoContainer = styled.div`
  height: 50px;
  width: 180px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;
const ItemContainer = styled.div`
  max-height: 800px;
  overflow: scroll;

  @media screen and (max-height: 800px) {
    max-height: 590px;
  }
`;
// Define the sidebar item styles
const SidebarItem = styled.div`
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`;

const SidebarLink = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${colors.white};

  &.active {
    svg {
      color: ${colors.theme_red};
    }
    background-color: ${colors.black};
    color: ${colors.white};
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 50px;
      width: 20px;
      top: -50px;
      right: -2px;
      border-radius: 0 0 25px 0;
      z-index: -1;
    }

    &::before {
      top: auto;
      bottom: -50px;
      border-radius: 0 25px 0 0;
    }

    &::after {
      box-shadow: 0 25px 0 0 ${colors.black};
    }

    &::before {
      box-shadow: 0 -25px 0 0 ${colors.black};
    }
  }

  span {
    margin-left: 10px;
  }

  &:hover {
    color: #fdfff4; /* Optional hover behavior */
  }
`;

const SubLinks = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.4s ease;
  &.expand {
    margin: 5px 0;
    margin-left: 25px;
    max-height: 300px;
    overflow-y: auto;
    background-color: #484848;
  }
`;

const SubLink = styled(Link)`
  display: block;
  padding: 15px;
  color: ${colors.white};
  font-size: 0.9rem;
  &.active {
    background-color: ${colors.black}; /* Slightly lighter */
  }
`;

// Define the logout sidebar item styles
const LogoutSidebarItem = styled.div`
  color: #ffffff;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${colors.theme_red}; /* Darker navy color */
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

// Define the sidebar footer styles
const SidebarFooter = styled.div`
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
`;
const Div = styled.div`
  height: 100%;
  max-width: 1px;
  overflow: visible;
  position: relative;
  left: ${({ sideBarExpanded }) => (sideBarExpanded ? "250px" : "0")};
  transition: left 0.3s ease;
  /* display: none; */

  z-index: 1;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
  /* 
  @media screen and (max-width: 880px) {
    display: block;
  } */
`;
const ExpandButton = styled.div`
  background-color: ${colors.primary_header};
  padding: 20px 10px;
  border-radius: 0 10px 10px 0;
  color: #fff;
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  display: none;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 880px) {
    display: block;
  }
  @media screen and (max-width: 540px) {
    top: 60px;
    transform: unset;
    opacity: 0.7;
  }
`;
const SubSubLink = styled(Link)`
  margin-left: 30px;
  padding: 5px 0;
`;
