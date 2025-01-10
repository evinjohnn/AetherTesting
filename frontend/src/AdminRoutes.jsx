import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import bg from "./assets/images/AdminPanelBg.jpg";
import styled from "styled-components";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminBlog from "./pages/Admin/AdminBlog";
import Login from "./pages/Admin/Login";
import { isAuthenticated } from "./Auth/auth";
import AdminSidebar from "./components/Admin/Navbar/Navbar";
import AdminHeader from "./components/Admin/header/Header";
import AdminFAQ from "./pages/Admin/AdminFAQ";
import AdminTimeline from "./pages/Admin/AdminTimeline";
import AdminTeam from "./pages/Admin/AdminTeam";
import AdminTestimonial from "./pages/Admin/AdminTestimonial";
import Banner from "./pages/Admin/Banner";
import CaseStudy from "./pages/Admin/AdminDashboard/CaseStudy";
import ClientWeServe from "./pages/Admin/AdminDashboard/ClientWeServe";
import WhoWeAre from "./pages/Admin/AdminDashboard/WhoWeAre";
import WhatWeDo from "./pages/Admin/WhatWeDo";
import { ToasterNotification } from "./utils/toastmessage";
import { AdminForm } from "./pages/Admin/AdminForm";
import CaseSection from "./pages/Admin/WhatWeDo";
import Industry from "./pages/Admin/AdminDashboard/IndustriesWeServe";
import AdminQuestionaire from "./pages/Admin/AdminQuestionaire";
import AdminBlogDetails from "./pages/Admin/AdminBlogDetails";
import AdminCaseSectionDetails from "./pages/Admin/AdminCaseSectionDetails";
import AdminCaseStudyDetails from "./pages/Admin/AdminCaseStudyDetails";
import AdminFooter from "./pages/Admin/AdminFooter";
import Technology from "./pages/Admin/AdminDashboard/Technology";
import AdminVideo from "./pages/Admin/AdminVideo";
import AdminMission from "./pages/Admin/AdminMission";
import AdminTitles from "./pages/Admin/AdminTitles";
import ProblemSolution from "./pages/Admin/Industry/ProblemSolution";
import AdminHowDifferent from "./pages/Admin/AdminHowDifferent";
import Sidebar from "./components/Admin/Navbar/Navbar copy";
import Process from "./pages/Admin/Industry/Process";
import AdminQuestion from "./pages/Admin/AdminQuestion";
import AdminBlogCategories from "./pages/Admin/AdminBlogCategories";
import AdminPlatform from "./pages/Admin/AdminPlatform";
import AdminUseCase from "./pages/Admin/AdminUseCase";
import AdminContactSection from "./pages/Admin/AdminContactSection";
import PlatformWhoWeAre from "./pages/Admin/PlatformWhoWeAre";
import AboutWhoWeAre from "./pages/Admin/AboutWhoWeAre";
import AdminVoice from "./pages/Admin/AdminVoice";
import AdminProduct from "./pages/Admin/AdminProduct";

const AdminRoutes = () => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
  };

  const PrivateLoginRoute = ({ children }) => {
    // Ensure isAuthenticated is a boolean value
    const isAuth = isAuthenticated(); // Assuming isAuthenticated is a function that returns a boolean
    return isAuth ? <Navigate to="/admin/dashboard" replace /> : children;
  };

  const isAdminRoute = location.pathname.includes("admin");
  const noHeaderFooter = ["/admin/login", "/pagenotfound"].includes(
    location.pathname
  );
  return (
    <>
      {isAdminRoute && !noHeaderFooter && <AdminHeader />}
      {isAdminRoute && !noHeaderFooter && <Sidebar />}
      <ToasterNotification />

      <AdminContainer noHeaderFooter={noHeaderFooter}>
        <div className="adminwrapper">
          <Routes>
            {/* DashBoard Routes */}
            <Route
              path="/admin/sections"
              element={
                <PrivateRoute>
                  <AdminTitles />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/contact"
              element={
                <PrivateRoute>
                  <AdminForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/voice"
              element={
                <PrivateRoute>
                  <AdminVoice />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/banner"
              element={
                <PrivateRoute>
                  <Banner />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/problem-solution"
              element={
                <PrivateRoute>
                  <ProblemSolution />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/questionaire"
              element={
                <PrivateRoute>
                  <AdminQuestionaire />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/question"
              element={
                <PrivateRoute>
                  <AdminQuestion />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/casestudies"
              element={
                <PrivateRoute>
                  <CaseStudy />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/casestudies/detail"
              element={
                <PrivateRoute>
                  <AdminCaseStudyDetails />
                </PrivateRoute>
              }
            />

            <Route
              path="admin/whatwedo/mission"
              element={
                <PrivateRoute>
                  <AdminMission />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/howDifferent"
              element={
                <PrivateRoute>
                  <AdminHowDifferent />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/platform"
              element={
                <PrivateRoute>
                  <AdminPlatform />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/usecase"
              element={
                <PrivateRoute>
                  <AdminUseCase />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/contact-section"
              element={
                <PrivateRoute>
                  <AdminContactSection />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/dashboard/industry"
              element={
                <PrivateRoute>
                  <Industry />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/dashboard/technology"
              element={
                <PrivateRoute>
                  <Technology />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/casesection"
              element={
                <PrivateRoute>
                  <CaseSection />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/admin/process"
              element={
                <PrivateRoute>
                  <Process />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/admin/video"
              element={
                <PrivateRoute>
                  <AdminVideo />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/admin/casesection/detail"
              element={
                <PrivateRoute>
                  <AdminCaseSectionDetails />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/admin/dashboard/clients"
              element={
                <PrivateRoute>
                  <ClientWeServe />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/dashboard/whoweare"
              element={
                <PrivateRoute>
                  <WhoWeAre />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/about/aboutwhoweare"
              element={
                <PrivateRoute>
                  <AboutWhoWeAre />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/platform/platformwhoweare"
              element={
                <PrivateRoute>
                  <PlatformWhoWeAre />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/dashboard/whatwedo"
              element={
                <PrivateRoute>
                  <WhatWeDo />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <PrivateRoute>
                  <AdminBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/blog/categories"
              element={
                <PrivateRoute>
                  <AdminBlogCategories />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/blog/detail"
              element={
                <PrivateRoute>
                  <AdminBlogDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/faq"
              element={
                <PrivateRoute>
                  <AdminFAQ />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/admin/casestudy"
              element={
                <PrivateRoute>
                  <AdminCaseStudy />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/admin/timeline"
              element={
                <PrivateRoute>
                  <AdminTimeline />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/product-integration"
              element={
                <PrivateRoute>
                  <AdminProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/team"
              element={
                <PrivateRoute>
                  <AdminTeam />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/testimonial"
              element={
                <PrivateRoute>
                  <AdminTestimonial />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/footer"
              element={
                <PrivateRoute>
                  <AdminFooter />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route
            path="/admin/login"
            element={
              <PrivateLoginRoute>
                <Login />
              </PrivateLoginRoute>
            }
          />
        </Routes>
      </AdminContainer>
    </>
  );
};

export default AdminRoutes;

const AdminContainer = styled.div`
  /* background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%; */

  ${({ noHeaderFooter }) =>
    noHeaderFooter
      ? `
        position: relative;
        width: 100%;
        padding-top: 0;
      `
      : `
        position: absolute;
        right: 0;
        width: calc(100% - 250px);
        padding-top: 90px;
      `}
`;
