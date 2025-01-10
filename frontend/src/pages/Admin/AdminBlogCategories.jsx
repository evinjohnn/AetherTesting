import React, { useEffect, useState } from "react";
import AdminButton from "../../components/AdminReusables/Button";
import { axiosInstance } from "../../utils/baseurl";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import EditDelete from "../../components/AdminReusables/EditDelete";
import CategoryFormModal from "./Forms/CategoryModal";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";

const AdminBlogCategories = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editData, seteditData] = useState(null);
  const [storedId, setStoredId] = useState(null);
  const [isNew, setisNew] = useState(true);

  const fetchCategory = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get("/categories");
      setCategory(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching faq data:", error);
    }
  };

  useEffect(() => {
    // Fetch blog data from API

    fetchCategory();
  }, []);
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
    fetchCategory();
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
    deleteOperation("category", storedId);
    setOpenDeleteModal(false);
    fetchCategory();
  };

  return (
    <div>
      <AdminButton
        head="Manage Blog Categories"
        button="Add New Category"
        onClick={openModal}
      />
      {category.map((item, index) => (
        <FAQItem key={index}>
          <FAQQuestion>
            <span>{item.title}</span>

            <ButtonContainer>
              <EditDelete
                handleDelete={() => handleDeleteClick(item._id)}
                handleEdit={() => handleEditClick(item)}
              />
            </ButtonContainer>
          </FAQQuestion>
        </FAQItem>
      ))}
      {isModalOpen && (
        <CategoryFormModal
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
          item="Category"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default AdminBlogCategories;
const FAQItem = styled.div`
  background-color: ${colors.box_background};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;
