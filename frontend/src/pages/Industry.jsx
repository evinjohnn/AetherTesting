import PageSpotlight from "../components/PageSpotlight";
import CaseStudies from "../components/common/CaseStudies";
import HowWorks from "../components/industry/HowWorks";
import Appearence from "../components/industry/Appearence";
import Next from "../components/industry/Next";
import AboutIndustry from "../components/industry/About";
import Video from "../components/common/Video";
import ProblemSolution from "../components/common/ProblemSolution";
import CaseSection from "../components/common/CaseSection";
import OurProcess from "../components/common/OurProcess";
import Demo from "../components/Demo";
import FAQ from "../components/common/Faq";

const Industry = ({ industry = "industry" }) => {
  return (
    <div>
      <PageSpotlight text={industry} />
      <ProblemSolution section="home" />
      <CaseSection section="home" />
      <HowWorks />
      <Appearence />
      <OurProcess section="home" />
      <Next />
      <AboutIndustry />
      <CaseStudies section="home" />
      <Video section="home" />
      <Demo />
      <FAQ section="industry" sub_section="home" />
    </div>
  );
};

export default Industry;
