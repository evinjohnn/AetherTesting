import React from "react";
import Platform from "../components/demo/Platform";
import PageSpotlight from "../components/PageSpotlight";
import DemoFeatures from "../components/demo/DemoFeatures";
import Testimonials from "../components/Testimonials";
import Demo from "../components/Demo";
import FAQ from "../components/common/Faq";
import Questionare from "../components/demo/Questionare";
import Details from "../components/demo/Details";
import DemoForm from "../components/demo/Form";

const BookDemo = () => {
  return (
    <div>
      <PageSpotlight text="Book Your Demo" />
      <Questionare />
      <Platform />
      {/* <DemoFeatures /> */}
      <Details />
      <Testimonials />
      <DemoForm />
      {/* <Demo /> */}
      <FAQ section="bookademo" />
    </div>
  );
};

export default BookDemo;
