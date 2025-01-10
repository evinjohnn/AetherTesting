import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import TeamFormModal from "./Forms/TeamForm";
import Pagination from "../../components/screens/Pagination";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";
import EditDelete from "../../components/AdminReusables/EditDelete";
import AdminButton from "../../components/AdminReusables/Button";

const AdminTeam = () => {
  const [team, setteam] = useState([]);
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
    fetchTeam();
  }, [page]);

  const fetchTeam = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/teams/?page=${page}&limit=${limit}`
      );
      setIsLoading(false);
      setteam(response.data.data.data);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Team data:", error);
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
    seteditData(null);
  };

  const handleRefresh = () => {
    console.log("refresh");
    fetchTeam();
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
    deleteOperation("Team", storedId);
    setOpenDeleteModal(false);
    fetchTeam();
  };

  return (
    <Section>
      <div>
        {/* <Header>
          <h1>Manage Teams</h1>
          <AddButton onClick={openModal}>Add New Team</AddButton>
        </Header> */}
        <AdminButton
          head="manage Teams"
          button="Add New Teams"
          onClick={openModal}
        />

        <MainContent>
          {isLoading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // 3 columns
                gap: "10px", // Adjust the gap between items as needed
              }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width="100%"
                  height={150}
                  borderRadius={10}
                />
              ))}
            </div>
          ) : team.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {team.map((data, index) => (
                <PostCard key={index} className="admin-page-box">
                  <ImageContainer>
                    <img src={data.image} alt="Post" />
                  </ImageContainer>
                  <Content>
                    <h4>{data.name}</h4>
                    <h6>{data.position}</h6>
                    <p>{data.education}</p>
                    <EditDelete
                      handleEdit={() => handleEditClick(data)}
                      handleDelete={() => handleDeleteClick(data._id)}
                    />
                  </Content>
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
        <TeamFormModal
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

export default AdminTeam;

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

const NoData = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`;

const PostsGrid = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`;
const PostCard = styled.div`
  position: relative;
  background-color: ${colors.box_background};

  border-radius: 10px;
`;
const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${colors.box_background};
  padding: 5px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  background-color: ${colors.box_background};
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  h4 {
    font-size: 23px;
  }
  h6 {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
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
