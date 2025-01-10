import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import CaseSectionFormModal from "./Forms/CaseSectionForm";
import DeleteModal from "../../components/screens/DeleteModal";
import { notifySuccess } from "../../utils/toastmessage";
import deleteOperation from "../../components/screens/DeleteOperation";
import config from "../../utils/config";
import Pagination from "../../components/screens/Pagination";
import EditDelete from "../../components/AdminReusables/EditDelete";
import AdminButton from "../../components/AdminReusables/Button";
import { useNavigate } from "react-router-dom";

const CaseSection = () => {
  const navigate = useNavigate();
  const [casesection, setcasesection] = useState([]);
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

  useEffect(() => {
    // Fetch casesection data from API
    fetchCaseSection();
  }, [page]);

  const fetchCaseSection = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/casesections/?page=${page}&limit=${limit}`
      );
      setcasesection(response.data.data.caseSections);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching CaseSection data:", error);
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
    fetchCaseSection();
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
    deleteOperation("casesection", storedId);
    setOpenDeleteModal(false);
    fetchCaseSection();
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

  const handleViewClick = (data) => {
    navigate("/admin/casesection/detail", { state: { data } });
  };
  return (
    <Section>
      <div>
        {/* <Header>
          <h1>Manage CaseSections</h1>
          <AddButton onClick={openModal}>Add New CaseSection</AddButton>
        </Header> */}
        <AdminButton
          head="manage Case Sections"
          button="Add New Case Section"
          onClick={openModal}
        />

        <MainContent>
          {isLoading ? (
            <PostsGrid>
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width={350}
                  height={300}
                  borderRadius={10}
                />
              ))}
            </PostsGrid>
          ) : casesection.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {casesection.map((data, index) => (
                <PostCard key={index} className="admin-page-box">
                  <ImageContainer>
                    <img src={`${data.image}`} alt="Post" />
                  </ImageContainer>
                  <div className="content">
                    {/* <h4>{data.title}</h4> */}
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
                      view={true}
                      handleView={() => handleViewClick(data)}
                      handleEdit={() => handleEditClick(data)}
                      handleDelete={() => handleDeleteClick(data._id)}
                    />
                  </div>
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
        <CaseSectionFormModal
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
          item="CaseSection"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default CaseSection;

const Section = styled.section``;

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
const Container = styled.div``;
const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr); /* Small screen columns */
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(1, 1fr); /* Small screen columns */
  }
`;

const PostCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    border-radius: 0 0 7px 7px;
    padding: 1rem;
    background-color: ${colors.box_background};

    h4 {
      font-size: 1.2rem;
      color: ${colors.black};
      margin-bottom: 0.5rem;
    }
  }
`;
const P = styled.div`
  height: 150px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${colors.white};
  }
  span {
    color: ${colors.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`;
const ImageContainer = styled.div`
  height: 150px;
  width: 100%;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
