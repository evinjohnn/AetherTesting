import React from "react";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonModule = ({ height, width, marginbottom }) => {
  return (
    <Skeleton
      width={width}
      height={height}
      baseColor="#111111" // Change this to your desired base color
      highlightColor="#474747"
    />
  );
};

export default SkeletonModule;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
