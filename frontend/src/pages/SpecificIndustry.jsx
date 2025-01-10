import PageSpotlight from "../components/PageSpotlight";
import CaseStudies from "../components/common/CaseStudies";
import HowWorks from "../components/industry/HowWorks";
import Appearence from "../components/industry/Appearence";
import Next from "../components/industry/Next";
import AboutIndustry from "../components/industry/About";
import FAQ from "../components/common/Faq";
import Video from "../components/common/Video";
import ProblemSolution from "../components/common/ProblemSolution";
import CaseSection from "../components/common/CaseSection";
import OurProcess from "../components/common/OurProcess";
import Demo from "../components/Demo";
import { useParams } from "react-router-dom";

const SpecificIndustry = () => {
  const { name } = useParams();
  return (
    <div>
      <PageSpotlight text={`${name} Industry`} />
      <ProblemSolution section="industry" sub_section={`${name}`} />
      <CaseSection section="industry" sub_section={`${name}`} />
      <HowWorks />
      <Appearence />
      <OurProcess section="industry" sub_section={`${name}`} />
      <Next />
      <AboutIndustry />
      <CaseStudies section="industry" sub_section={`${name}`} />
      <Video section="industry" sub_section={`${name}`} />
      <Demo />
      <FAQ section="industry" sub_section={`${name}`} />
    </div>
  );
};

export default SpecificIndustry;
