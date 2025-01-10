import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../../ThemeConfig";
import { axiosInstance } from "../../../utils/baseurl";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";

const ContactSectionForm = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    options: [{ title: "", link: "" }],
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...formData.options];
    updatedCards[index][field] = value;
    setFormData((prev) => ({ ...prev, options: updatedCards }));
  };

  const addCard = () => {
    setFormData((prev) => ({
      ...prev,
      options: [...prev.options, { title: 0, link: "" }],
    }));
  };

  const removeCard = (index) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiEndpoint = isNew
        ? "/contact-section"
        : `/contact-section/${editData._id}`;
      const method = isNew ? axiosInstance.post : axiosInstance.put;

      const response = await method(apiEndpoint, formData);

      notifySuccess(response.data.message || "Operation successful!");
      onRequestClose();
      refresh();
    } catch (error) {
      notifyError(
        error.response?.data?.error || "An unexpected error occurred"
      );
    }
  };

  console.log(formData);

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          {isNew ? "Add Contact Section" : "Edit Contact Section"}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Title:</label>
            <Input
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Description:</label>
            <TextArea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows="4"
              required
            />
          </FormField>
          <h3>Cards</h3>
          {formData.options.map((options, index) => (
            <CardField key={index}>
              <FormField>
                <label>Title:</label>
                <Input
                  value={options.title}
                  onChange={(e) =>
                    handleCardChange(index, "title", e.target.value)
                  }
                />
              </FormField>
              <FormField>
                <label>Link:</label>
                <Input
                  value={options.link}
                  onChange={(e) =>
                    handleCardChange(index, "link", e.target.value)
                  }
                />
              </FormField>
              <button type="button" onClick={() => removeCard(index)}>
                Remove Card
              </button>
            </CardField>
          ))}
          <button type="button" onClick={addCard}>
            Add Card
          </button>

          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">
            {isNew ? "Submit" : "Update"}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ContactSectionForm;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #1e1e2f;
  color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
`;

const ModalHeader = styled.h2`
  color: ${colors.primary || "#27ab99"};
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const CardField = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: ${colors.primary || "#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

const ImagePreview = styled.div`
  margin-bottom: 10px;
  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #d32f2f;
  }
`;
const Input = styled.input`
  background-color: transparent;
`;
const TextArea = styled.textarea`
  background-color: transparent;
`;
