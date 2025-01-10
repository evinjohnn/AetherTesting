import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/baseurl";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import Pagination from "../../components/screens/Pagination";
import AdminButton from "../../components/AdminReusables/Button";
import EditDelete from "../../components/AdminReusables/EditDelete";
import DeleteModal from "../../components/screens/DeleteModal";
import deleteOperation from "../../components/screens/DeleteOperation";
import ContactSectionForm from "./Forms/ContactSectionForm";

const AdminContactSection = () => {
  const [contactsection, setContactSection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, setTotalPages] = useState(null);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);

  useEffect(() => {
    fetchContactSection();
  }, [page]);

  const fetchContactSection = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/contact-section`);
      setIsLoading(false);
      setContactSection(response.data.data.contactSection);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching ContactSection data:", error);
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
    fetchContactSection();
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
    deleteOperation("contact-section", storedId);
    setOpenDeleteModal(false);
    fetchContactSection();
  };

  return (
    <Container>
      <AdminButton
        head="Manage ContactSection"
        button="Add New ContactSection"
        onClick={openModal}
      />

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Contact Medium</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="2" align="center">
                  Loading...
                </td>
              </tr>
            ) : contactsection.length > 0 ? (
              contactsection.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <AnswerList>
                      {item.options.map((data, index) => (
                        <AnswerItem key={data._id}>
                          {index + 1}.{"  "}
                          <p> {data.title}</p>
                          <p> {data.link}</p>
                        </AnswerItem>
                      ))}
                      <EditDelete
                        handleEdit={() => handleEditClick(item)}
                        handleDelete={() => handleDeleteClick(item._id)}
                      />
                    </AnswerList>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" align="center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <Pagination
        initialPage={page}
        totalPages={totalPages}
        getData={setPage}
      />

      {isModalOpen && (
        <ContactSectionForm
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
          item="ContactSection"
          handleDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default AdminContactSection;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  padding: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.grey_background};
  }

  tbody tr:nth-child(even) {
    background-color: ${colors.grey_border};
  }
`;

const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AnswerItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
`;
