import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../ThemeConfig";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";
import { axiosInstance } from "../../../utils/baseurl";

const QuestionForm = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
  });

  useEffect(() => {
    if (!isNew) {
      if (editData) {
        setFormData({
          question: editData.question,
          options: editData.options,
        });
      }
    } else {
      setFormData({
        question: editData.question,
        options: editData.options,
      });
    }
  }, [isNew, editData]);

  const handleQuestionChange = (e) => {
    setFormData({ ...formData, question: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const addOption = () => {
    setFormData({ ...formData, options: [...formData.options, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await axiosInstance.post("/question", formData);
      setFormData({
        question: "",
        options: ["", "", "", ""],
      });
      notifySuccess(response.data.message);
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
        `/question/${editData._id}`,
        formData
      );

      notifySuccess(response.data.message);
      setFormData({
        question: "",
        options: ["", "", "", ""],
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

  return (
    <ModalWrapper>
      <ModalContent>
        <StyledForm onSubmit={isNew ? handleSubmit : handleUpdate}>
          <StyledHeading>Add a Question</StyledHeading>

          <StyledFormGroup>
            <StyledLabel htmlFor="question">Question:</StyledLabel>
            <StyledTextarea
              id="question"
              value={formData.question}
              onChange={handleQuestionChange}
              placeholder="Enter the question here"
              required
            />
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel>Options:</StyledLabel>
            {formData.options.map((option, index) => (
              <StyledInputGroup key={index}>
                <StyledInput
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  required
                />
              </StyledInputGroup>
            ))}
          </StyledFormGroup>
          {/* 
          <StyledButton type="button" onClick={addOption}>
            Add Option
          </StyledButton> */}

          <StyledSubmitButton type="submit">Submit Question</StyledSubmitButton>
        </StyledForm>
      </ModalContent>
    </ModalWrapper>
  );
};

export default QuestionForm;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #1e1e2f;
  color: ${colors.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
`;

const StyledHeading = styled.h2`
  color: ${colors.primary};
  margin-bottom: 20px;
`;

const StyledFormGroup = styled.div`
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  background-color: #29293d;
  color: ${colors.white};
  font-size: 14px;
  resize: none;
`;

const StyledInputGroup = styled.div`
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  background-color: #29293d;
  color: ${colors.white};
  font-size: 14px;
`;

const StyledButton = styled.button`
  display: block;
  margin: 10px 0;
  padding: 10px;
  background-color: ${colors.primary || "#27ab99"};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primaryHover || "#1a8a77"};
  }
`;

const StyledSubmitButton = styled(StyledButton)`
  background-color: ${colors.primary};
  width: 100%;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;
