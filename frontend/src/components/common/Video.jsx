import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vdoBg from "../../assets/images/vdoBg.jpg";
import playIcon from "../../assets/icons/play.png"; // Path to your play icon
import vdo from "../../assets/images/homevideo.mp4";
import { colors } from "../../ThemeConfig";
import { IoPauseSharp } from "react-icons/io5";
import { clientaxiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../screens/Skeleton";

const Video = ({ section, sub_section }) => {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, [section, sub_section]);

  const fetchVideo = async () => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(`/video`, {
        params: {
          section: section,
          sub_section: sub_section,
        },
      });
      setIsLoading(false);
      setVideo(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Video data:", error);
    }
  };

  console.log("video", video);

  return (
    <MainContainer>
      <Banner>
        {isLoading ? (
          <>
            <div className="loader">Loading</div>
          </>
        ) : !video ? ( // Check if data is empty
          <NoData>
            <FaRegFaceSadTear />
            <p>{`No Data Available - ${
              sub_section ? sub_section : section
            }`}</p>
          </NoData>
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
  /* height: 300px;
  width: 100%;
  background-image: url(${vdoBg});
  background-size: cover;
  background-position: center; */
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`;
const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const VideoUrl = styled.video`
  height: 300px;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
