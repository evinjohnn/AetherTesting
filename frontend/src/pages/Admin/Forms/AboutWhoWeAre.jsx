import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../../ThemeConfig";
import { axiosInstance } from "../../../utils/baseurl";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";

const AboutWhoWeAreForm = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    card: [
      { count: 0, title: "" },
      { count: 0, title: "" },
    ],
  });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setImagePreview(editData.image);
    }
  }, [editData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...formData.card];
    updatedCards[index][field] = value;
    setFormData((prev) => ({ ...prev, card: updatedCards }));
  };

  const addCard = () => {
    setFormData((prev) => ({
      ...prev,
      card: [...prev.card, { count: 0, title: "" }],
    }));
  };

  const removeCard = (index) => {
    setFormData((prev) => ({
      ...prev,
      card: prev.card.filter((_, idx) => idx !== index),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiEndpoint = isNew
        ? "/aboutwhoweare"
        : `/aboutwhoweare/${formData._id}`;
      const method = isNew ? axiosInstance.post : axiosInstance.put;

      const response = await method(apiEndpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
          {isNew ? "Add Who We Are" : "Edit Who We Are"}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Title:</label>
            <Input
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
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
          <FormField>
            <label>Image:</label>
            {imagePreview && (
              <ImagePreview>
                <img src={imagePreview} alt="Preview" />
                <button type="button" onClick={() => setImagePreview("")}>
                  Remove
                </button>
              </ImagePreview>
            )}
            <input type="file" onChange={handleImageUpload} />
          </FormField>
          <h3>Cards</h3>
          {formData.card.map((card, index) => (
            <CardField key={index}>
              <FormField>
                <label>Count:</label>
                <Input
                  type="number"
                  value={card.count}
                  onChange={(e) =>
                    handleCardChange(index, "count", e.target.value)
                  }
                  required
                />
              </FormField>
              <FormField>
                <label>Title:</label>
                <Input
                  value={card.title}
                  onChange={(e) =>
                    handleCardChange(index, "title", e.target.value)
                  }
                  required
                />
              </FormField>
            </CardField>
          ))}

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

export default AboutWhoWeAreForm;

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
