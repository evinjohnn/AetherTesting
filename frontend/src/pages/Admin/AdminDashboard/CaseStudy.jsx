import React, { useEffect, useState } from "react";
import { colors } from "../../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../../utils/baseurl";
import SkeletonModule from "../../../components/screens/Skeleton";
import Pagination from "../../../components/screens/Pagination";
import CaseStudyForm from "../Forms/CaseStudyForm";
import deleteOperation from "../../../components/screens/DeleteOperation";
import EditDelete from "../../../components/AdminReusables/EditDelete";
import AdminButton from "../../../components/AdminReusables/Button";
import DeleteModal from "../../../components/screens/DeleteModal";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {
  const navigate = useNavigate();
  const [caseStudy, setcaseStudy] = useState([]);
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
  const [selectedSection, setselectedSection] = useState(null);
  const [industry, setindustry] = useState(null);

  useEffect(() => {
    // Fetch blog data from API
    fetchCaseStudy();
  }, [page, selectedSection]);

  const fetchCaseStudy = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/casestudies/?page=${page}&limit=${limit}`,
        {
          params: {
            type: selectedSection,
          },
        }
      );
      setcaseStudy(response.data.data.data);
      settotalPages(response.data.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching CaseStudy data:", error);
    }
  };
  useEffect(() => {
    fetchIndustry();
  }, []);

  const fetchIndustry = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/industries`, {
        params: {
          isNeedFull: true,
        },
      });
      setindustry(response.data.data || []);
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
    fetchCaseStudy();
  };

  const handleEditClick = (data) => {
    setIsModalOpen(true);
    seteditData(data);
    setisNew(false);
  };

  const handleDeleteClick = (id) => {
    setStoredId(id);
    setOpenDeleteModal(true);
  };

  const handleDelete = () => {
    deleteOperation("casestudy", storedId);
    setOpenDeleteModal(false);
    fetchCaseStudy();
  };

  const handleChangeSections = (e) => {
    setselectedSection(e.target.value);
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
    navigate("/admin/casestudies/detail", { state: { data } });
  };

  console.log("caseStudy", caseStudy);

  return (
    <Section>
      <div>
        <div className="grid grid-cols-3 items-center">
          <Head className="red-head">Manage Case Study</Head>

          <Select
            name="section"
            value={selectedSection}
            onChange={handleChangeSections}
          >
            <option value="">Select a section</option>
            <option value="airliner">Airliner</option>
            <option value="logistics">Logistics</option>
            <option value="banking">Banking</option>
            <option value="retail">Retail</option>
            <option value="utilities">Utilities</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="manufacture">Manufacturing</option>
            <option value="cooperations">Co-Operations</option>
            <option value="realestate">Real Estate</option>
            {/* 
                        <option value="">Select a Sub Section</option>
            <option value="home">Home</option>
            {industry &&
              industry.map((data) => {
                return (
                  <option key={data._id} value={data.route}>
                    {data.name}
                  </option>
                );
              })}{" "}
            */}
          </Select>
          <AdminButton button="Add Case Study" onClick={openModal} />
        </div>

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
          ) : caseStudy.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <PostsGrid>
              {caseStudy.map((data, index) => (
                <PostCard key={index} className="admin-page-box">
                  <img
                    src={
                      data.image
                        ? data.image
                        : "https://picsum.photos/300/400?3"
                    }
                    alt="Post"
                  />
                  <div className="content">
                    <div>
                      <h4>{data.title}</h4>
                      <h5>
                        {data.section ? data.section : "Global"} -
                        {data.sub_section && data.sub_section}
                      </h5>
                    </div>
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
        <CaseStudyForm
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
          item="Case Study"
          handleDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default CaseStudy;

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

const Head = styled.div`
  color: ${colors.white};
  padding: 22px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
`;

const MainContent = styled.div``;

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
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
  .content {
    border-radius: 0 0 7px 7px;
    padding: 1rem;
    background-color: ${colors.box_background};

    h4 {
      font-size: 1.2rem;

      margin-bottom: 0.5rem;
    }
  }
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
