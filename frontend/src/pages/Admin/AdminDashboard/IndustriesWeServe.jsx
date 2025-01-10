import React, { useEffect, useState } from "react";
import { colors } from "../../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../../utils/baseurl";
import SkeletonModule from "../../../components/screens/Skeleton";
import Pagination from "../../../components/screens/Pagination";
import DeleteModal from "../../../components/screens/DeleteModal";
import IndustryFormModal from "../Forms/IndustryForm";
import deleteOperation from "../../../components/screens/DeleteOperation";
import EditDelete from "../../../components/AdminReusables/EditDelete";
import AdminButton from "../../../components/AdminReusables/Button";

const Industry = () => {
  const [industry, setindustry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [totalPages, settotalPages] = useState(null);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);

  useEffect(() => {
    fetchIndustry();
  }, [page]);

  const fetchIndustry = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/industries/?page=${page}&limit=${limit}`
      );
      setindustry(response.data.data.data);
      settotalPages(response.data.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Industry data:", error);
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
    fetchIndustry();
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
    deleteOperation("Industry", storedId);
    setOpenDeleteModal(false);
    fetchIndustry();
  };

  return (
    <Section>
      <div>
        <AdminButton
          head="manage Industry"
          button="Add Industry"
          onClick={openModal}
        />

        <MainContent>
          {isLoading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
                gap: "10px", // Adjust the gap between items as needed
              }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width={350}
                  height={350}
                  borderRadius={10}
                />
              ))}
            </div>
          ) : industry.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {industry.map((data, index) => (
                <PostCard key={index}>
                  <ImageContainer>
                    <img
                      src={
                        data.image
                          ? data.image
                          : "https://picsum.photos/300/400?3"
                      }
                      alt="Post"
                    />
                  </ImageContainer>
                  <Contents>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                    <EditDelete
                      handleEdit={() => handleEditClick(data)}
                      handleDelete={() => handleDeleteClick(data._id)}
                    />
                  </Contents>
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
        <IndustryFormModal
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
          item="Industry"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default Industry;

const Section = styled.section`
  height: 100vh;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;

const AddButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${colors.theme_red};
  color: ${colors.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
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

const MainContent = styled.div`
  margin-top: 50px;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default for large screens */
  gap: 1.5rem;
  row-gap: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 1 column for small screens */
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
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${colors.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`;
const Contents = styled.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${colors.box_background};
  h4 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
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

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
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
