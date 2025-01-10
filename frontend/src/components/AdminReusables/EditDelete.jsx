import React from "react";
import { GoTrash } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import { VscEye } from "react-icons/vsc";

import styled from "styled-components";
const EditDelete = ({
  handleDelete,
  handleEdit,
  handleView,
  noDelete = false,
  noEdit = false,
  view,
  none,
}) => {
  return (
    <Container>
      {view && <VscEye color="#bfb600" onClick={handleView} />}
      {!noDelete && <GoTrash color="#fb3e3e" onClick={handleDelete} />}
      {/* Conditional rendering for edit icon */}
      {!noEdit && <FiEdit3 color="#3e92ff" onClick={handleEdit} />}{" "}
    </Container>
  );
};

export default EditDelete;
const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;
