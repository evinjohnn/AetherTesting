import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import TimelineFormModal from "./Forms/TimelineForm";
import Pagination from "../../components/screens/Pagination";
import deleteOperation from "../../components/screens/DeleteOperation";
import EditDelete from "../../components/AdminReusables/EditDelete";
import AdminButton from "../../components/AdminReusables/Button";
import DeleteModal from "../../components/screens/DeleteModal";

const AdminTimeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, settotalPages] = useState(null);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);

  useEffect(() => {
    fetchTimeline();
  }, [page]);

  const fetchTimeline = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/timelines/?page=${page}&limit=${limit}`
      );
      setTimeline(response.data.data.timelines);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Timeline data:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setisNew(true);
    seteditData(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setisNew(true);
  };

  const handleRefresh = () => {
    console.log("refresh");
    fetchTimeline();
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
    deleteOperation("timeline", storedId);
    setOpenDeleteModal(false);
    fetchTimeline();
  };

  return (
    <Section>
      <div>
        {/* <Header>
          <h1>Manage Timelines</h1>
          <AddButton onClick={openModal}>Add New Timeline</AddButton>
        </Header> */}
        <AdminButton
          head="manage Timelines"
          button="Add New Timelines"
          onClick={openModal}
        />
        <MainContent>
          {isLoading ? (
            <div>
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width={"100%"}
                  height={90}
                  borderRadius={10}
                />
              ))}
            </div>
          ) : timeline.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {timeline.map((data, index) => (
                <PostCard key={index}>
                  <Year>{data.year}</Year>
                  <Content>
                    <h4>{data.event}</h4>
                    <p>{data.description}</p>
                  </Content>
                  <EditDelete
                    handleEdit={() => handleEditClick(data)}
                    handleDelete={() => handleDeleteClick(data._id)}
                  />
                </PostCard>
              ))}
            </PostsGrid>
          )}

          <Pagination
            initialPage={page}
            totalPages={totalPages}
            getData={setPage}
          />
        </MainContent>
      </div>
      {isModalOpen && (
        <TimelineFormModal
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
          item="Team"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default AdminTimeline;

const Section = styled.section`
  height: 100vh;
  overflow-y: scroll;
`;

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

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const MainContent = styled.div``;
const NoData = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`;

const PostsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const Header = styled.div`
  display: flex;
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

const PostCard = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr 0.1fr;
  align-items: center;
  gap: 30px;
  background-color: ${colors.box_background};
  padding: 10px 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div``;

const Year = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: ${colors.theme_red};
  font-weight: bold;
  text-align: center;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
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
