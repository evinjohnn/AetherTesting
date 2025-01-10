const express = require("express");
const router = express.Router();

const CareerRoutes = require("../routes/ClientRoutes/Career");
const CaseSectionRoutes = require("../routes/ClientRoutes/CaseSection");
const BlogRoutes = require("../routes/ClientRoutes/Blog");
const CaseStudyRoutes = require("../routes/ClientRoutes/CaseStudy");
const FaqRoutes = require("../routes/ClientRoutes/Faq");
const TestimonialRoutes = require("../routes/ClientRoutes/Testimonial");
const TeamRoutes = require("../routes/ClientRoutes/Team");
const TimelineRoutes = require("../routes/ClientRoutes/Timeline");
const BannerRoutes = require("../routes/ClientRoutes/Banner");
const SectionRoutes = require("../routes/ClientRoutes/Section");
const ClientsRoutes = require("../routes/ClientRoutes/Clients");
const ContactRoutes = require("../routes/ClientRoutes/Contact");
const WhoWeAreRoutes = require("../routes/ClientRoutes/WhoWeAre");
const IndustriesRoutes = require("../routes/ClientRoutes/Industries");
const Questionaire = require("../routes/ClientRoutes/Questionaire");
const Footer = require("../routes/ClientRoutes/Footer");
const TechnologyRoutes = require("../routes/ClientRoutes/Technology");
const VideoRoutes = require("../routes/ClientRoutes/Video");
const MissionRoutes = require("../routes/ClientRoutes/Mission");
const HowDifferentRoutes = require("../routes/ClientRoutes/HowDifferent");
const ProblemSolutionRoutes = require("../routes/ClientRoutes/industry/ProblemSolution");
const ProcessRoutes = require("../routes/ClientRoutes/industry/Process");
const UseCaseSubRoutes = require("../routes/ClientRoutes/UseCaseSubRoutes");
const PlatformSubRoutes = require("../routes/ClientRoutes/PlatformSubRoutes");
const PlatformWhoWeAreSubRoutes = require("../routes/ClientRoutes/PlatfromWhoWeAre");
const Question = require("../routes/ClientRoutes/Question");
const CategorySubRoutes = require("../routes/ClientRoutes/Category");
const ContactSectionSubRoutes = require("../routes/ClientRoutes/ContactSection");
const AboutWhoWeAreRoutes = require("../routes/ClientRoutes/AboutWhoWeAre");
const ProductRoutes = require("../routes/ClientRoutes/Product");
const VoiceRoutes = require("../routes/ClientRoutes/Voice");

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
router.use("/", Question);
router.use("/", WhoWeAreRoutes);
router.use("/", IndustriesRoutes); // Added this line for Industries routes
router.use("/", Questionaire); // Added this line for Questionnaire routes
router.use("/", Footer); // Added this line for Footer routes
router.use("/", TechnologyRoutes); // Added this line for Technology routes
router.use("/", VideoRoutes);
router.use("/", MissionRoutes); // Added this line for Mission routes
router.use("/", HowDifferentRoutes);
router.use("/", ProblemSolutionRoutes);
router.use("/", ProcessRoutes); // Added this line for Process routes
router.use("/", UseCaseSubRoutes);
router.use("/", PlatformSubRoutes);
router.use("/", PlatformWhoWeAreSubRoutes);
router.use("/", CategorySubRoutes);
router.use("/", ContactSectionSubRoutes);
router.use("/", AboutWhoWeAreRoutes); // Added this line for AboutWhoWeAre routes
router.use("/", ProductRoutes); // Added this line for Product routes);
router.use("/", VoiceRoutes); // Added this line for Voice routes

module.exports = router;
