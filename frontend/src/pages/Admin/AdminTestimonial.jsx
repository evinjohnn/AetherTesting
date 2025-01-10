import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import TestimonialFormModal from "./Forms/TestimonialForm";
import config from "../../utils/config";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";
import Pagination from "../../components/screens/Pagination";
import EditDelete from "../../components/AdminReusables/EditDelete";
import AdminButton from "../../components/AdminReusables/Button";

const AdminTestimonial = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, settotalPages] = useState(null);
  const [storedId, setStoredId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [testimonial, settestimonial] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);
  const [readMore, setReadMore] = useState({});

  const fetchTestimonial = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/testimonials/?page=${page}&limit=${limit}`
      );
      settestimonial(response.data.data.data);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Testimonial data:", error);
    }
  };

  useEffect(() => {
    // Fetch blog data from API

    fetchTestimonial();
  }, [page]);

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
    fetchTestimonial();
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
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
    deleteOperation("testimonial", storedId);
    setOpenDeleteModal(false);
    fetchTestimonial();
  };

  // Trim description to 20 words
  const trimDescription = (description) => {
    const words = description.split(" "); // Split the description into words
    if (words.length > 20) {
      return `${words.slice(0, 15).join(" ")}...`; // Join the first 20 words and add ellipsis
    } else {
      return description; // Return the full description if it's 20 words or less
    }
  };
  //handle readmore
  const handleReadMoreClick = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the clicked index
    }));
  };

  return (
    <Section>
      <div>
        {/* <Header>
          <h1>Manage Testimonials</h1>
          <AddButton onClick={openModal}>Add New Testimonial</AddButton>
        </Header> */}
        <AdminButton
          head="manage Testimonials"
          button="Add New Testimonials"
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
          ) : testimonial.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {testimonial.map((data, index) => (
                <PostCard key={data._id} className="admin-page-box">
                  <ImageContainer>
                    <img src={`${data.image}`} alt="Post" />
                  </ImageContainer>

                  <Contents>
                    <h4>{data.name}</h4>
                    <P>
                      <p>
                        {readMore[index]
                          ? data.description
                          : trimDescription(data.description)}
                      </p>{" "}
                      {data.description &&
                      data.description.split(" ").length > 15 ? (
                        <span onClick={() => handleReadMoreClick(index)}>
                          {readMore[index] ? "Show Less" : "Read More"}
                        </span>
                      ) : null}
                    </P>
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
        <TestimonialFormModal
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
          item="Testimonial"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default AdminTestimonial;

const Section = styled.section``;

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

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

const MainContent = styled.div``;

const NoData = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`;

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
`;
const P = styled.div`
  height: 100px;
  overflow: scroll;
  p {
    font-size: 14px;
    margin: 10px 0;
  }
  span {
    color: ${colors.theme_red};
    font-size: 14px;
    cursor: pointer;
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
