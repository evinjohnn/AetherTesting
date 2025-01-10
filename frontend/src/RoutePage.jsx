import React, { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
  matchPath,
} from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Industry from "./pages/Industry";
import UseCase from "./pages/UseCase";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BookDemo from "./pages/BookDemo";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { isAuthenticated } from "./Auth/auth";
import Login from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { ToasterNotification } from "./utils/toastmessage";
import AdminHeader from "./components/Admin/header/Header";
import AdminNavbar from "./components/Admin/Navbar/Navbar";
import AdminBlog from "./pages/Admin/AdminBlog";
import { colors } from "./ThemeConfig";
import AdminRoutes from "./AdminRoutes";
import Page404 from "./pages/Page404";
import UserProvider from "./context/UserContext";
import Careers from "./pages/Careers";
import SpecificIndustry from "./pages/SpecificIndustry";
import SpecificUseCase from "./pages/SpecificUseCase";
import SpecificPlatform from "./pages/SpecificPlatform";
import IndustryProvider from "./context/IndustryContext";
import CaseStudyDetail from "./pages/CaseStudyDetail";
// import CaseStudyDetailPage from "./components/common/CaseStudyDetail";

const MainContent = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  //scroll to top on a location change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const isAdminRoute = location.pathname.includes("admin");
  const noHeaderFooter = ["/admin/login", "/pagenotfound"].includes(
    location.pathname
  );
  const navigate = useNavigate();

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  useEffect(() => {
    const isValidPath = genuinePaths.some((path) =>
      matchPath(path, location.pathname)
    );

    if (!isValidPath) {
      navigate("/pagenotfound");
    }
  }, [location.pathname, navigate]);

  const genuinePaths = [
    "/",
    "/blogs",
    // "/career",
    "/blog-detail/:id",
    "/casestudydetail/:id",
    "/about",
    "/what-we-do",
    "/industry",
    "/industry/:name",
    "/use-case",
    "/use-case/:name",
    "/platform",
    "/platform/:name",
    "/contact",
    "/book-a-demo",
    "/admin/login",
    "/admin",
    "/admin/dashboard",
    "/admin/sections",
    "/admin/banner",
    "/admin/problem-solution",
    "/admin/usecase",
    "/admin/process",
    "/admin/questionaire",
    "/admin/dashboard/clients",
    "/admin/dashboard/technology",
    "/admin/dashboard/industry",
    "/admin/dashboard/whoweare",
    "/admin/about/aboutwhoweare",
    "/admin/platform/platformwhoweare",
    "/admin/whatwedo/mission",
    "/admin/voice",
    "/admin/platform",
    "/admin/video",
    "/admin/casestudies",
    "/admin/blog",
    "/admin/blog/detail",
    "/admin/casestudies/detail",
    "/admin/casesection/detail",
    "/admin/contact",
    "/admin/faq",
    "/admin/casestudy",
    "/admin/casesection",
    "/admin/timeline",
    "/admin/footer",
    "/admin/question",
    "/admin/team",
    "/admin/testimonial",
    "/admin/howDifferent",
    "/admin/blog/categories",
    "/admin/contact-section",
    "/admin/product-integration",
  ];

  return (
    <>
      {!isAdminRoute && (
        <motion.div
          style={{
            position: "sticky",
            top: 0,
            width: "100vw",
            height: "5px",
            backgroundColor: "#ff2a00",
            scaleX: scrollYProgress,
            transformOrigin: "left",
            zIndex: 9999,
          }}
        ></motion.div>
      )}
      <ScrollProgressBar progress={scrollProgress} />

      {!isAdminRoute && !noHeaderFooter && <Header />}
      <Container>
        {location.pathname.startsWith("/admin") ? (
          <UserProvider>
            <AdminRoutes />
          </UserProvider>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            {/* <Route path="/industry" element={<Industry />} /> */}
            <Route path="/industry/:name" element={<SpecificIndustry />} />
            {/* <Route path="/use-case" element={<UseCase />} /> */}
            <Route path="/use-case/:name" element={<SpecificUseCase />} />
            {/* <Route path="/platform" element={<Platform />} /> */}
            <Route path="/platform/:name" element={<SpecificPlatform />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            {/* <Route path="/career" element={<Careers />} /> */}
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/casestudydetail/:id" element={<CaseStudyDetail />} />
            <Route path="/book-a-demo" element={<BookDemo />} />
            <Route path="/pagenotfound" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/pagenotfound" />} />{" "}
            {/* Catch-all route */}
          </Routes>
        )}
        {!location.pathname.includes("/admin") && !noHeaderFooter && <Footer />}
      </Container>
    </>
  );
};

const Container = styled.div``;

export default MainContent;
const ScrollProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 5px;
  background-color: ${colors.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;
