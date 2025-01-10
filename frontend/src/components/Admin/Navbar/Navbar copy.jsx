import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/icons/logo.png";

import {
  MdDashboard,
  MdContactPage,
  MdPhotoLibrary,
  MdLogout,
  MdQuestionAnswer,
} from "react-icons/md";
import { FaInfoCircle, FaUsers, FaVideo } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GrBlog } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";
import { colors } from "../../../ThemeConfig";
import { Link } from "react-router-dom";
import LogoutConfirm from "../../screens/LogoutConfirm";

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
      { label: "Clients", route: "admin/dashboard/clients", icon: <FaUsers /> },
      {
        label: "Who We Are",
        route: "admin/dashboard/whoweare",
        icon: <FaInfoCircle />,
      },
      {
        label: "Industry",
        route: "admin/dashboard/industry",
        icon: <MdDashboard />,
      },
      {
        label: "Technology",
        route: "admin/dashboard/technology",
        icon: <MdDashboard />,
      },
      {
        label: "Case Section",
        route: "admin/casesection",
        icon: <HiOutlineDocumentText />,
      },
    ],
  },
  {
    id: 3,
    label: "Who We Are",
    icon: <FaInfoCircle />,
    subLinks: [
      {
        label: "Who We Are",
        route: "admin/about/aboutwhoweare",
        icon: <MdDashboard />,
      },
      { label: "Timeline", route: "admin/timeline", icon: <MdDashboard /> },
      { label: "Team", route: "admin/team", icon: <FaUsers /> },
      {
        label: "Mission",
        route: "admin/whatwedo/mission",
        icon: <MdDashboard />,
      },
      {
        label: "How Different",
        route: "admin/howDifferent",
        icon: <FaInfoCircle />,
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
          {
            label: "Problem Solution",
            route: "admin/problem-solution",
            icon: <MdDashboard />,
          },
          {
            label: "Case Study",
            route: "admin/casestudies",
            icon: <HiOutlineDocumentText />,
          },
          { label: "FAQ", route: "admin/faq", icon: <MdQuestionAnswer /> },
          { label: "Process", route: "admin/process", icon: <MdDashboard /> },
        ],
      },
      {
        label: "Usecase",
        route: "admin/team",
        subSubLink: [
          {
            label: "UseCase SubLink",
            route: "admin/usecase",
            icon: <MdDashboard />,
          },
          {
            label: "Problem Solution",
            route: "admin/problem-solution",
            icon: <MdDashboard />,
          },
          {
            label: "Case Study",
            route: "admin/casestudies",
            icon: <HiOutlineDocumentText />,
          },
          { label: "FAQ", route: "admin/faq", icon: <MdQuestionAnswer /> },
          // { label: "Process", route: "admin/process", icon: <MdDashboard /> },
        ],
      },
    ],
  },
  {
    id: 13,
    label: "Platform",
    icon: <FaInfoCircle />,
    subLinks: [
      // {
      //   label: "Platform SubLink",
      //   route: "admin/platform",
      //   icon: <MdDashboard />,
      // },
      {
        label: "Platform Who We Are",
        route: "admin/platform/platformwhoweare",
        icon: <MdDashboard />,
      },
      {
        label: "Case Study",
        route: "admin/casestudies",
        icon: <HiOutlineDocumentText />,
      },
      { label: "FAQ", route: "admin/faq", icon: <MdQuestionAnswer /> },
      // { label: "Process", route: "admin/process", icon: <MdDashboard /> },
    ],
  },
  {
    id: 5,
    label: "What We Do",
    icon: <RxDashboard />,
    subLinks: [
      {
        label: "Testimonials",
        route: "admin/testimonial",
        icon: <MdDashboard />,
      },
      {
        label: "Case Study",
        route: "admin/casestudies",
        icon: <HiOutlineDocumentText />,
      },
      { label: "Voice", route: "admin/voice", icon: <MdDashboard /> },
      { label: "Process", route: "admin/process", icon: <MdDashboard /> },
    ],
  },
  {
    id: 6,
    label: "Book A Demo",
    icon: <MdQuestionAnswer />,
    subLinks: [
      { label: "Question", route: "admin/question", icon: <MdDashboard /> },
      {
        label: "Questionare",
        route: "admin/questionaire",
        icon: <MdQuestionAnswer />,
      },
      {
        label: "Testimonials",
        route: "admin/testimonial",
        icon: <MdDashboard />,
      },
      { label: "FAQ", route: "admin/faq", icon: <MdQuestionAnswer /> },
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
    icon: <GrBlog />,
    subLinks: [
      {
        label: "Testimonials",
        route: "admin/blog",
        icon: <MdDashboard />,
      },
      {
        label: "Categories",
        route: "admin/blog/categories",
        icon: <MdDashboard />,
      },
    ],
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
    icon: <FaVideo />,
  },
  {
    id: 14,
    label: "Contact Details",
    route: "admin/contact-section",
    icon: <FaVideo />,
  },
  {
    id: 15,
    label: "Product",
    route: "admin/product-integration",
    icon: <FaVideo />,
  },
];

const Sidebar = () => {
  const [openItems, setOpenItems] = useState({});
  const [showLogout, setShowLogout] = useState(false);

  const handleShowLogout = () => setShowLogout(true);

  const handleCancelLogout = () => setShowLogout(false);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSubItem = (parentId, subIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [`${parentId}-${subIndex}`]: !prev[`${parentId}-${subIndex}`],
    }));
  };

  return (
    <Nav>
      <H1>
        <AContainer to="/admin/dashboard">
          <LogoContainer>
            <Logo src={logo} alt="Logo" />
          </LogoContainer>
        </AContainer>
      </H1>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <Li className="sidebar-item" onClick={() => toggleItem(item.id)}>
              <StyledLink to={item.route && item.route}>
                {item.icon} {item.label}
              </StyledLink>
            </Li>
            {item.subLinks && openItems[item.id] && (
              <ul className="sub-links">
                {item.subLinks.map((subItem, subIndex) => (
                  <li key={`${item.id}-${subIndex}`}>
                    <SubLi
                      className="sub-link-item"
                      onClick={() => toggleSubItem(item.id, subIndex)}
                    >
                      <StyledLink to={subItem.route}>
                        {subItem.label}
                      </StyledLink>
                    </SubLi>
                    {subItem.subSubLink &&
                      openItems[`${item.id}-${subIndex}`] && (
                        <ul className="sub-sub-links">
                          {subItem.subSubLink.map((subSubItem, subSubIndex) => (
                            <SubSubLi
                              key={`${item.id}-${subIndex}-${subSubIndex}`}
                            >
                              <Link
                                to={subSubItem.route}
                                className="sub-sub-link-item"
                              >
                                {subSubItem.label}
                              </Link>
                            </SubSubLi>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <SidebarFooter>
        <LogoutSidebarItem onClick={handleShowLogout}>
          <MdLogout /> <span>Log out</span>
        </LogoutSidebarItem>
      </SidebarFooter>
      {showLogout && <LogoutConfirm onClose={handleCancelLogout} />}
    </Nav>
  );
};

export default Sidebar;

const Nav = styled.nav`
  width: 250px;
  overflow: scroll;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
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
const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
const SubLi = styled.li`
  padding: 10px;
  margin-left: 30px;
`;
const SubSubLi = styled.li`
  padding: 10px;
  margin-left: 50px;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 20px;
  }
`;
const SidebarFooter = styled.div`
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
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
