import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/icons/logo.png";
import { colors } from "../../ThemeConfig";
import { TfiFacebook } from "react-icons/tfi";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { clientaxiosInstance } from "../../utils/baseurl";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    // Fetch blog data from API
    const fetchFooter = async () => {
      try {
        const response = await clientaxiosInstance.get("/footer");
        setFooter(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchFooter();
  }, []);
  //console.log("footer", footer);

  return (
    <>
      <FooterSection>
        <div className="wrapper">
          <MainContainer>
            <Left>
              <ImageContainer>
                <Image src={logo} alt="Aetherbot.ai" />
              </ImageContainer>
              {footer && footer.map((data) => <P>{data.description}</P>)}
              <Socials>
                <a href="https://www.facebook.com/" target="_blank">
                  <TfiFacebook fontSize={20} color="#fff" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <RiInstagramLine fontSize={20} color="#fff" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn fontSize={20} color="#fff" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <FiYoutube fontSize={20} color="#fff" />
                </a>
              </Socials>
            </Left>
            <Right>
              <Head>Quick Links</Head>
              <Ul>
                <LI to="/who-we-are">Who We Are</LI>
                <LI to="/what-we-do">What We Do</LI>
                <LI to="/industry">Industries</LI>
                <LI to="/blogs">Insights</LI>
                {/* <LI to="/career">Careers</LI> */}
                <LI to="/contact">Contact Us</LI>
              </Ul>
            </Right>
          </MainContainer>
        </div>
      </FooterSection>
      {/* <Copyright>
        Designed and Developed By <a href="https://tigrid.in/">TiGRID</a>
      </Copyright> */}
    </>
  );
};

export default Footer;
const FooterSection = styled.footer`
  padding: 80px 0;
  border-top: 1px solid ${colors.grey_border};
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  gap: 60px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div``;
const ImageContainer = styled.div`
  width: 180px;
  height: 38px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;

const Right = styled.div``;
const Head = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const P = styled.p`
  margin: 20px 0;
`;
const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.1fr);
  gap: 30px;
`;

const Ul = styled.ul`
  display: grid;
  gap: 10px;
`;
const LI = styled(Link)`
  cursor: pointer;
`;
const Copyright = styled.div`
  text-align: center;
  width: 100%;
  a {
    display: inline;
    color: #f15925;
  }
`;
