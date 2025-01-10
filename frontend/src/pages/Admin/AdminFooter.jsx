import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../ThemeConfig";
import { axiosInstance } from "../../utils/baseurl";
import { FaMinus, FaPlus } from "react-icons/fa6";
import SkeletonModule from "../../components/screens/Skeleton";
import FaqFormModal from "./Forms/FaqForm";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";
import EditDelete from "../../components/AdminReusables/EditDelete";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import AdminButton from "../../components/AdminReusables/Button";
import FooterFormModal from "./Forms/FooterForm";
const AdminFooter = () => {
  const [footer, setFooter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/footer`);
      setIsLoading(false);
      setFooter(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Footer data:", error);
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
    fetchFooter();
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
    deleteOperation("footer", storedId);
    setOpenDeleteModal(false);
    fetchFooter();
  };
  console.log("footer", footer);

  return (
    <Section>
      <h1>Manage Footer</h1>

      {footer.length > 0 ? null : (
        <ButtonContainer onClick={openModal}>
          <GoPlus />
          Add Footer
        </ButtonContainer>
      )}

      {isLoading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)", // 3 columns
            gap: "10px", // Adjust the gap between items as needed
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonModule
              key={index}
              width="100%"
              height={100}
              borderRadius={10}
            />
          ))}
        </div>
      ) : footer.length === 0 ? ( // Check if data is empty
        <NoData>No data available</NoData>
      ) : (
        footer.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion>
              <span>{item.description}</span>

              <>
                {footer.length > 0 ? (
                  <EditDelete
                    noDelete={true}
                    handleEdit={() => handleEditClick(item)}
                  />
                ) : null}
              </>
            </FAQQuestion>
          </FAQItem>
        ))
      )}

      {isModalOpen && (
        <FooterFormModal
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

export default AdminFooter;
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

const FAQHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  background-color: ${colors.box_background};
  margin-bottom: 1rem;
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

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.white};
`;

const FAQAnswer = styled.div`
  padding: 1rem;
  background-color: ${colors.grey_background};
  color: #fff;
  font-size: 0.9rem;
  border-top: 1px solid #444;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(0deg)")};
  transition: transform 0.5s ease-in-out;
  color: #ff4500;
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
