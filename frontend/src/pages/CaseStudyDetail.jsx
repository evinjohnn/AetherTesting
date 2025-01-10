import React from "react";
import BlogDetailPage from "../components/blog/BlogDetail";
import PageSpotlight from "../components/PageSpotlight";
import CaseStudyDetailPage from "../components/common/CaseStudyDetail";

const CaseStudyDetail = () => {
  return (
    <div>
      <PageSpotlight
        text="Case Study"
        subtext="We’re here to help you explore the future of digital interaction"
      />
      <CaseStudyDetailPage />
    </div>
  );
};

export default CaseStudyDetail;
