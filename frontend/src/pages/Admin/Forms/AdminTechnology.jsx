import React, { useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";
import { axiosInstance } from "../../../utils/baseurl";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { colors } from "../../../ThemeConfig";

const AdminTechnology = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    image: "",
    text: "",
    points: [""],
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (editData) {
      setFormData({
        _id: editData._id,
        image: editData.image,
        text: editData.text,
        points: editData.points,
      });
      setImagePreview(editData.image);
    } else {
      if (isNew) {
        setFormData({
          _id: "",
          image: "",
          text: "",
          points: [""],
        });
      }
      setImagePreview("");
    }
  }, [editData, isNew]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData({
          ...formData,
          image: file,
        });
        setImagePreview(imageUrl);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...formData.points];
    newPoints[index] = value;
    setFormData({ ...formData, points: newPoints });
  };

  const addPoint = () => {
    setFormData({ ...formData, points: [...formData.points, ""] });
  };

  const removePoint = (index) => {
    const newPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: newPoints });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/technology", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data && response.data.message) {
        notifySuccess(response.data.message);
      } else {
        notifyError("Unexpected response structure");
      }

      setFormData({
        image: "",
        text: "",
        points: [""],
      });
      setImagePreview("");
      onRequestClose();
      await refresh();
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
        `/technology/${formData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the response to see its structure
      console.log("Response:", response);

      // Check if the response has the expected structure
      if (response.data && response.data.message) {
        notifySuccess(response.data.message);
      } else {
        notifyError("Unexpected response structure");
      }

      setFormData({
        name: "",
        image: "",
        description: "",
      });
      onRequestClose();
      await refresh();
    } catch (error) {
      // Log the error to see its structure
      console.error("Error:", error);

      // Check if the error response exists and has a message
      if (error.response && error.response.data && error.response.data.error) {
        notifyError(error.response.data.error); // Pass the error message from the backend
      } else {
        notifyError("An unexpected error occurred"); // Fallback error message
      }
    }
  };

  const handleImageClose = () => {
    setImagePreview("");
    setFormData({
      ...formData,
      image: "",
    });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>Banner Form</ModalHeader>
        <StyledForm onSubmit={isNew ? handleSubmit : handleUpdate}>
          <FormGroup>
            {imagePreview && (
              <div>
                <IoClose onClick={() => handleImageClose()} />
                <ImagePreview src={imagePreview} alt="Image Preview" />
              </div>
            )}
            <Label htmlFor="image">Image:</Label>
            <Input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
              placeholder="Enter image URL or path"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="text">Text:</Label>
            <Input
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Enter description"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Points:</Label>
            {formData.points.map((point, index) => (
              <FormGroup key={index} style={{ marginBottom: "8px" }}>
                <Input
                  type="text"
                  value={point}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  placeholder={`Point ${index + 1}`}
                  required
                />
                {formData.points.length > 1 && (
                  <CancelButton
                    type="button"
                    onClick={() => removePoint(index)}
                  >
                    Remove
                  </CancelButton>
                )}
              </FormGroup>
            ))}
            <Button type="button" onClick={addPoint}>
              Add Point
            </Button>
          </FormGroup>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <Button type="submit">Add Technology</Button>
        </StyledForm>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AdminTechnology;

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
