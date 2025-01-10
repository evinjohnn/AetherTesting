import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vdoBg from "../../assets/images/vdoBg.jpg";
import playIcon from "../../assets/icons/play.png"; // Path to your play icon
import vdo from "../../assets/images/homevideo.mp4";
import { colors } from "../../ThemeConfig";
import { IoPauseSharp } from "react-icons/io5";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";

const Video = ({ section }) => {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/video`, {
        params: {
          section: section,
        },
      });
      setIsLoading(false);
      setVideo(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Video data:", error);
    }
  };

  return (
    <MainContainer>
      <Banner>
        {isLoading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)", // 3 columns
              gap: "10px", // Adjust the gap between items as needed
            }}
          >
            {Array.from({ length: 1 }).map((_, index) => (
              <SkeletonModule
                key={index}
                width="100%"
                height={200}
                borderRadius={10}
              />
            ))}
          </div>
        ) : video.length === 0 ? ( // Check if data is empty
          <NoData>No data available</NoData>
        ) : (
          video.map((item) => (
            <VideoContainer>
              <VideoUrl src={item.video} controls={false} autoPlay muted />
            </VideoContainer>
          ))
        )}
      </Banner>
    </MainContainer>
  );
};

export default Video;
const MainContainer = styled.section``;

const Banner = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${vdoBg});
  background-size: cover;
  background-position: center;
`;

const NoData = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`;

const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const VideoUrl = styled.video`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;
