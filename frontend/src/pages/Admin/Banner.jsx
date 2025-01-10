import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import BannerFormModal from "./Forms/BannerForm";
import DeleteModal from "../../components/screens/DeleteModal";
import { notifySuccess } from "../../utils/toastmessage";
import deleteOperation from "../../components/screens/DeleteOperation";
import config from "../../utils/config";
import Pagination from "../../components/screens/Pagination";
import EditDelete from "../../components/AdminReusables/EditDelete";
import AdminButton from "../../components/AdminReusables/Button";

const AdminBanner = () => {
  const [banner, setbanner] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, settotalPages] = useState(null);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);
  const [readMore, setReadMore] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Fetch banner data from API
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/banners/?page=${page}&limit=${limit}`
      );
      setbanner(response.data.data.data);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
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
    fetchBanner();
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
    deleteOperation("banner", storedId);
    setOpenDeleteModal(false);
    fetchBanner();
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
          <h1>Manage Banners</h1>
          <AddButton onClick={openModal}>Add New Banner</AddButton>
        </Header> */}
        <AdminButton
          head="manage Banners"
          button="Add New Banner"
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
                  height={300}
                  borderRadius={10}
                />
              ))}
            </div>
          ) : banner.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {banner.map((data, index) => (
                <PostCard
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ImageContainer>
                    <img src={`${data.image}`} alt="Post" />
                    <Content className={hoveredIndex === index ? "active" : ""}>
                      <span>{data.section}</span>
                      <h4>{data.title}</h4>
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
                    </Content>
                  </ImageContainer>
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
        <BannerFormModal
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
          item="Banner"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default AdminBanner;

const Section = styled.section`
  padding: 2rem;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */
`;

const PostCard = styled.div`
  background-color: ${colors.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
const ImageContainer = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;
const Content = styled.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`;
const P = styled.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${colors.black};
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

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;
