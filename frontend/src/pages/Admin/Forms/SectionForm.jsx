import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../utils/baseurl";
import { colors } from "../../../ThemeConfig";
import { IoClose } from "react-icons/io5";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";

const SectionFormModal = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    _id: "",
    section: "",
    subsection: "",
    title: "",
    subtitle: "",
    description: "",
  });

  useEffect(() => {
    if (!isNew) {
      if (editData) {
        setFormData({
          _id: editData._id,
          section: editData.section,
          subsection: editData.subsection,
          title: editData.title,
          subtitle: editData.subtitle,
          description: editData.description,
        });
      }
    } else {
      setFormData({
        _id: "",
        section: "",
        subsection: "",
        title: "",
        subtitle: "",
        description: "",
      });
    }
  }, [editData, isNew]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await axiosInstance.post("/section", formData, {});

      notifySuccess(response.data.message);

      setFormData({
        section: "",
        subsection: "",
        title: "",
        subtitle: "",
        description: "",
      });
      onRequestClose();
      refresh();
    } catch (error) {
      // Check if the error response exists and has a message
      if (error.response && error.response.data && error.response.data.error) {
        notifyError(error.response.data.error); // Pass the error message from the backend
      } else {
        notifyError("An unexpected error occurred"); // Fallback error message
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await axiosInstance.put(
        `/section/${formData._id}`,
        formData
      );

      notifySuccess(response.data.message);

      setFormData({
        section: "",
        subsection: "",
        title: "",
        subtitle: "",
        description: "",
      });

      onRequestClose();
      refresh();
    } catch (error) {
      // Check if the error response exists and has a message
      if (error.response && error.response.data && error.response.data.error) {
        notifyError(error.response.data.error); // Pass the error message from the backend
      } else {
        notifyError("An unexpected error occurred"); // Fallback error message
      }
    }
  };

  console.log(formData);
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>Section Form</ModalHeader>
        <StyledForm onSubmit={isNew ? handleSubmit : handleUpdate}>
          <FormGroup>
            <Label>Section:</Label>
            <Select
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
            >
              <option value="">Select a section</option>
              <option value="home">Home</option>
              <option value="about">About</option>
            </Select>
          </FormGroup>
          {formData.section === "home" ? (
            <FormGroup>
              <Label>Sub Section:</Label>
              <Select
                type="text"
                name="subsection"
                value={formData.subsection}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select a section
                </option>
                <option value="clients">Clients</option>
                <option value="stand out">Stand Out</option>
                <option value="what we do">What We Do</option>
                <option value="industry">Industry</option>
                <option value="case study">Case Study</option>
              </Select>
            </FormGroup>
          ) : formData.section === "about" ? (
            <FormGroup>
              <Label>Section:</Label>
              <Select
                type="text"
                name="subsection"
                value={formData.subsection}
                onChange={handleChange}
              >
                <option value="">Select a section</option>
                <option value="details">About Details</option>
              </Select>
            </FormGroup>
          ) : null}
          <FormGroup>
            <Label>Title:</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Sub Title:</Label>
            <Input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description:</Label>
            <Textarea
              value={formData.description}
              name="description"
              onChange={handleChange}
            />
          </FormGroup>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <Button type="submit">Save Section Details</Button>
        </StyledForm>
      </ModalContent>
    </ModalWrapper>
  );
};

export default SectionFormModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${colors.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const ModalHeader = styled.h2`
  color: ${colors.primary || "#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${colors.primary || "#27ab99"};
    box-shadow: 0 0 5px ${colors.primary || "#27ab99"};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.primary || "#27ab99"};
    box-shadow: 0 0 5px ${colors.primary || "#27ab99"};
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: ${colors.primary || "#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover || "#1a8a77"};
  }
`;

const CancelButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;
