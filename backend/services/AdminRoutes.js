const express = require("express");
const router = express.Router();

const CareerRoutes = require("../routes/AdminRoutes/Career");
const CaseSectionRoutes = require("../routes/AdminRoutes/CaseSection");
const BlogRoutes = require("../routes/AdminRoutes/Blog");
const CaseStudyRoutes = require("../routes/AdminRoutes/CaseStudy");
const FaqRoutes = require("../routes/AdminRoutes/Faq");
const TestimonialRoutes = require("../routes/AdminRoutes/Testimonial");
const TeamRoutes = require("../routes/AdminRoutes/Team");
const TimelineRoutes = require("../routes/AdminRoutes/Timeline");
const BannerRoutes = require("../routes/AdminRoutes/Banner");
const SectionRoutes = require("../routes/AdminRoutes/Section");
const ClientsRoutes = require("../routes/AdminRoutes/Clients");
const ContactRoutes = require("../routes/AdminRoutes/Contact");
const WhoWeAreRoutes = require("../routes/AdminRoutes/WhoWeAre");
const IndustriesRoutes = require("../routes/AdminRoutes/Industries");
const SubIndustriesRoutes = require("../routes/AdminRoutes/SubIndustries");
const DashboardRoutes = require("../routes/AdminRoutes/DashboardRoutes");
const Questionaire = require("../routes/AdminRoutes/Questionaire");
const Question = require("../routes/AdminRoutes/Question");
const Footer = require("../routes/AdminRoutes/Footer");
const TechnologyRoutes = require("../routes/AdminRoutes/Technology");
const VideoRoutes = require("../routes/AdminRoutes/Video");
const MissionRoutes = require("../routes/AdminRoutes/Mission");
const ProblemSolutionRoutes = require("../routes/AdminRoutes/industry/ProblemSolution");
const ProcessRoutes = require("../routes/AdminRoutes/industry/Process");
const HowDifferentRoutes = require("../routes/AdminRoutes/HowDifferent");
const UseCaseSubRoutes = require("../routes/AdminRoutes/UseCaseSubRoutes");
const PlatformSubRoutes = require("../routes/AdminRoutes/PlatformSubRoutes");
const CategorySubRoutes = require("../routes/AdminRoutes/Category");
const ContactSectionSubRoutes = require("../routes/AdminRoutes/ContactSection");
const PlatfromWhoWeAreRoutes = require("../routes/AdminRoutes/PlatfromWhoWeAre");
const AboutWhoWeAreRoutes = require("../routes/AdminRoutes/AboutWhoWeAre");
const ProductRoutes = require("../routes/AdminRoutes/Product");
const VoiceRoutes = require("../routes/AdminRoutes/Voice");

// routes
router.use("/", CareerRoutes);
router.use("/", CaseSectionRoutes);
router.use("/", BlogRoutes);
router.use("/", CaseStudyRoutes);
router.use("/", FaqRoutes);
router.use("/", TestimonialRoutes);
router.use("/", TeamRoutes);
router.use("/", TimelineRoutes);
router.use("/", BannerRoutes);
router.use("/", SectionRoutes);
router.use("/", ClientsRoutes);
router.use("/", ContactRoutes);
router.use("/", WhoWeAreRoutes);
router.use("/", IndustriesRoutes);
router.use("/", SubIndustriesRoutes);
router.use("/", DashboardRoutes);
router.use("/", Question);
router.use("/", Questionaire); // Added this line for Questionaire routes
router.use("/", Footer);
router.use("/", TechnologyRoutes); // Added this line for Technology routes
router.use("/", VideoRoutes); // Added this line for Video routes
router.use("/", MissionRoutes); // Added this line for Mission routes
router.use("/", ProblemSolutionRoutes); // Added this line for Mission routes
router.use("/", ProcessRoutes); // Added this line for Process routes
router.use("/", HowDifferentRoutes);
router.use("/", UseCaseSubRoutes);
router.use("/", PlatformSubRoutes);
router.use("/", CategorySubRoutes);
router.use("/", ContactSectionSubRoutes);
router.use("/", PlatfromWhoWeAreRoutes);
router.use("/", AboutWhoWeAreRoutes); // Added this line for AboutWhoWeAre routes
router.use("/", ProductRoutes); // Added this line for Product routes);
router.use("/", VoiceRoutes); // Added this line for Voice routes

module.exports = router;
