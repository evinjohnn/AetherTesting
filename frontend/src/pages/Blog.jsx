import React, { useEffect, useState } from "react";

import BlogPage from "../components/blog/Blogs";
import { colors } from "../ThemeConfig";
import styled from "styled-components";
import PageSpotlight from "../components/PageSpotlight";

const Blog = () => {
  return (
    <div>
      <PageSpotlight
        text="Blogs / News"
        subtext="We’re here to help you explore the future of digital interaction"
      />
      <BlogPage />
    </div>
  );
};

export default Blog;
