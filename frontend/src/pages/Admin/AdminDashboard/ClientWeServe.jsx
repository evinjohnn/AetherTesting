import React, { useEffect, useState } from "react";
import { colors } from "../../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../../utils/baseurl";
import SkeletonModule from "../../../components/screens/Skeleton";
import Pagination from "../../../components/screens/Pagination";
import ClientFormModal from "../Forms/ClientForm";
import DeleteModal from "../../../components/screens/DeleteModal";
import deleteOperation from "../../../components/screens/DeleteOperation";
import EditDelete from "../../../components/AdminReusables/EditDelete";
import AdminButton from "../../../components/AdminReusables/Button";

const Client = () => {
  const [client, setclient] = useState([]);
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
    fetchClient();
  }, [page]);

  const fetchClient = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/clients/?page=${page}&limit=${limit}`
      );
      setclient(response.data.data.data);
      settotalPages(response.data.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
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
    fetchClient();
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
    deleteOperation("client", storedId);
    setOpenDeleteModal(false);
    fetchClient();
  };

  return (
    <Section>
      <div>
        <AdminButton
          head="manage client"
          button="Add Client"
          onClick={openModal}
        />
        {/* <Header>
          <h1>Manage Client</h1>
          <AddButton onClick={openModal}>Add Client</AddButton>
        </Header> */}

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
          ) : client.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {client.map((data, index) => (
                <PostCard key={index}>
                  <img
                    src={
                      data.image
                        ? data.image
                        : "https://picsum.photos/300/400?3"
                    }
                    alt="Post"
                  />
                  <div className="content">
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                  </div>
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
        <ClientFormModal
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
          item="Client"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default Client;

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

const MainContent = styled.div``;

const PostsGrid = styled.div`
  display: grid;
  gap: 30px;
`;
const PostCard = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr 0.1fr; /* Default for large screens */
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 10px;

  background-color: ${colors.box_background};
  img {
    height: 100px;
    width: 200px;
    object-fit: contain;
    display: block;
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
