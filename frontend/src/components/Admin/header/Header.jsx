import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assets/icons/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TfiSearch } from "react-icons/tfi";
import { colors } from "../../../ThemeConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineIdcard } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import LogoutConfirm from "../../screens/LogoutConfirm";
import config from "../../../utils/config";
import { useUser } from "../../../context/UserContext";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [logoutView, setLogoutView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { userData, loading, fetchUserData } = useUser();
  const [viewProfile, setViewProfile] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setViewProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setViewProfile]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  const handleProfileNavigate = () => {
    // navigate("/profile");
    setViewProfile((prev) => !prev);
  };
  const handleNavigateToProfile = () => {
    navigate("/admin/profile");
  };

  return (
    <NavbarContainer>
      <Left>{/* display date */}</Left>
      <UserSection onClick={handleProfileNavigate} ref={userRef}>
        <ImageContainer>
          <Img src={`${userData?.image}`}></Img>
        </ImageContainer>{" "}
        {loading ? (
          "Loading..."
        ) : (
          <Contents>
            <Name>
              {userData && userData.username ? userData.username : "Guest"}{" "}
            </Name>
            <Email className="email">
              {userData && userData.email ? userData.email : "N/A"}{" "}
            </Email>
          </Contents>
        )}
      </UserSection>
    </NavbarContainer>
  );
};

export default AdminHeader;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${colors.grey_background};
  padding: 0 20px;
  z-index: 1;
  padding: 20px 0;
  padding-right: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: default;
  svg {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  outline: 1px dashed ${colors.theme_red};
  outline-offset: 2px;
  background-color: #fff;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Contents = styled.div`
  /* display: grid;
  gap: 5px; */
`;
const Name = styled.h3`
  font-weight: 600;
`;
const Email = styled.p`
  font-size: 13px;
  color: ${colors.placeholder_text};
  text-transform: lowercase;
`;
