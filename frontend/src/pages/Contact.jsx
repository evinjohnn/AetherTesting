import React from "react";

import Form from "../components/contact/Form";
import PageSpotlight from "../components/PageSpotlight";

const Contact = () => {
  return (
    <div>
      <PageSpotlight
        text="Let’s Connect and <br/> Transform Your Business"
        subtext="We’re here to help you explore the future of digital interaction"
      />
      <Form />
    </div>
  );
};

export default Contact;
