import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../ThemeConfig";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";
import EditDelete from "../../components/AdminReusables/EditDelete";
import { GoPlus } from "react-icons/go";
import VideoForm from "./Forms/Video";
import AdminButton from "../../components/AdminReusables/Button";

const AdminVideo = () => {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/video`);
      setIsLoading(false);
      setVideo(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Video data:", error);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
    setisNew(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setisNew(false);
    seteditData(null);
  };
  const handleRefresh = () => {
    console.log("refresh");
    fetchVideo();
  };

  const handleEditClick = (data) => {
    setIsModalOpen(true);
    seteditData(data);
    setisNew(false);
  };

  const handleDeleteClick = (id) => {
    console.log("id", id);
    setStoredId(id);
    setOpenDeleteModal(true);
  };
  const handleDelete = () => {
    deleteOperation("video", storedId);
    setOpenDeleteModal(false);
    fetchVideo();
  };
  console.log("video", video);

  return (
    <Section>
      <AdminButton
        head="Manage Videos"
        button="Add New Videos"
        onClick={openModal}
      />

      {/* <ButtonContainer onClick={openModal}>
        <GoPlus />
        Add Video
      </ButtonContainer> */}

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
        video.map((item, index) => (
          <VideoItem key={index}>
            <div className="d-flex justify-between items-center gap-2">
              <div>
                <h2>Section: {item?.section}</h2>
                <p>Sub Section: {item?.sub_section}</p>
              </div>
              <div>
                <EditDelete
                  noDelete={true}
                  handleEdit={() => handleEditClick(item)}
                />
              </div>
            </div>
            <VideoQuestion>
              <VideoContainer>
                <VideoUrl src={item.video} controls={false} autoPlay muted />
              </VideoContainer>
            </VideoQuestion>
          </VideoItem>
        ))
      )}

      {isModalOpen && (
        <VideoForm
          onRequestClose={closeModal}
          refresh={handleRefresh}
          editData={editData}
          isNew={isNew}
        />
      )}

      {openDeleteModal && (
        <DeleteModal
          loading={isLoading}
          closeModal={() => setOpenDeleteModal(false)}
          item="Blog"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default AdminVideo;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Section = styled.section`
  background-color: #000;
  color: #fff;

  h1 {
    margin-bottom: 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;

const AddButton = styled.button`
  background-color: ${colors.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${colors.theme_red};
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
`;

const VideoHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const VideoItem = styled.div`
  background-color: ${colors.box_background};
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
  animation: ${fadeIn} 0.5s ease-out both;
`;

const NoData = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`;

const VideoQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.white};
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

const ButtonContainer = styled.button`
  background-color: ${colors.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${colors.white};
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    opacity: 0.9;
  }
`;

const EditButton = styled(Button)`
  background-color: ${colors.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const DeleteButton = styled(Button)`
  background-color: ${colors.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
