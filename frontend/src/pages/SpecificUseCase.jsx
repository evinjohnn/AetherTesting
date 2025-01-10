import AboutPage from "../components/usercase/About";
import PageSpotlight from "../components/PageSpotlight";
import InAction from "../components/usercase/InAction";
import Features from "../components/usercase/Features";
import Demo from "../components/Demo";
import CaseStudies from "../components/common/CaseStudies";
import FAQ from "../components/common/Faq";
import Testimonials from "../components/Testimonials";
import { useParams } from "react-router-dom";
import ProblemSolution from "../components/common/ProblemSolution";

const SpecificUseCase = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <PageSpotlight text={`Use Case ${name}`} />
      <ProblemSolution section="usecase" sub_section={`${name}`} />
      <AboutPage />
      <CaseStudies section="usecase" sub_section={`${name}`} />
      <InAction />
      <Features />
      <Testimonials />
      <Demo />
      <FAQ section="usecase" sub_section={`${name}`} />
    </div>
  );
};

export default SpecificUseCase;
