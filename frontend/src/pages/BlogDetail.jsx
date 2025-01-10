import React from "react";
import BlogDetailPage from "../components/blog/BlogDetail";
import PageSpotlight from "../components/PageSpotlight";

const BlogDetail = () => {
  return (
    <div>
      <PageSpotlight
        text="Blog / News"
        subtext="We’re here to help you explore the future of digital interaction"
      />
      <BlogDetailPage />
    </div>
  );
};

export default BlogDetail;
