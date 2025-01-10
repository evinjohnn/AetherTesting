import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminButton from "../../components/AdminReusables/Button";
import SectionFormModal from "./Forms/SectionForm";
import { axiosInstance } from "../../utils/baseurl";
import { colors } from "../../ThemeConfig";
import deleteOperation from "../../components/screens/DeleteOperation";
import EditDelete from "../../components/AdminReusables/EditDelete";
import DeleteModal from "../../components/screens/DeleteModal";
const AdminTitles = () => {
  const [section, setSection] = useState([]);
  const [storedId, setStoredId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNew, setisNew] = useState(true);
  const [editData, seteditData] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    // Fetch banner data from API
    fetchSections();
  }, []);

  const fetchSections = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/section`);
      setSection(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Banner data:", error);
      setIsLoading(false);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
    setisNew(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setisNew(true);
  };

  const handleRefresh = () => {
    console.log("refresh");
    fetchSections();
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
    deleteOperation("section", storedId);
    setOpenDeleteModal(false);
    fetchSections();
  };
  //handle readmore
  const handleReadMoreClick = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the clicked index
    }));
  };
  console.log("section", section);
  return (
    <MainContainer>
      <Container>
        <AdminButton
          head="Add Section Details"
          button="Add Section Details"
          onClick={openModal}
        />
        <PostsGrid>
          {section && section.length > 0 ? (
            <>
              {section.map((data, index) => (
                <PostCard key={data._id} className="admin-page-box">
                  <Contents>
                    <h4>Section Name: {data.section}</h4>
                    <P>
                      <p className="sub section">
                        <span> Sub Section Name</span>
                        <span>:</span>
                        <span>{data.subsection}</span>
                      </p>
                      <p className="title">
                        <span>Title</span>
                        <span>:</span>
                        <span>{data.title}</span>
                      </p>
                      <p className="sub title">
                        <span>Sub Title</span>
                        <span>:</span>
                        {data.subtitle ? data.subtitle : "N/A"}
                        <span></span>
                      </p>
                      <p className="description">
                        <span>Description</span>
                        <span>:</span>
                        <span>
                          {data.description ? data.description : "N/A"}
                        </span>
                      </p>
                    </P>
                    <EditDelete
                      handleEdit={() => handleEditClick(data)}
                      handleDelete={() => handleDeleteClick(data._id)}
                    />
                  </Contents>
                </PostCard>
              ))}
            </>
          ) : (
            <p>No Details Available</p>
          )}
        </PostsGrid>
      </Container>
      {isModalOpen && (
        <SectionFormModal
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
          item="Section Details"
          handleDelete={handleDelete}
        />
      )}
    </MainContainer>
  );
};

export default AdminTitles;
const MainContainer = styled.div``;
const Container = styled.div``;

const PostsGrid = styled.div`
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
  position: absolute;
  top: -30px;
  left: 20px;
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
  text-transform: capitalize;
`;
const P = styled.div`
  max-height: 300px;
  overflow: scroll;
  p {
    font-size: 14px;
    margin: 10px 0;

    display: grid;
    grid-template-columns: 2fr 0.1fr 2fr;

    &.description {
      grid-template-columns: 0.455fr 0.1fr;
      gap: 20px;
    }
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
