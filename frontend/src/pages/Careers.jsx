import React from "react";
import PageSpotlight from "../components/PageSpotlight";
import WorkWithUs from "../components/career/WorkWithUs";
import Form from "../components/career/Form";
import CoreValues from "../components/career/CoreValues";

const Careers = () => {
  return (
    <div>
      <PageSpotlight text="Work @ Aetherbot.Ai" />
      <WorkWithUs />
      <CoreValues />
      <Form />
    </div>
  );
};

export default Careers;
