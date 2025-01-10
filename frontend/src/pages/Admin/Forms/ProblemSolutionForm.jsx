import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../utils/baseurl";
import { colors } from "../../../ThemeConfig";
import { IoClose } from "react-icons/io5";
import { notifyError, notifySuccess } from "../../../utils/toastmessage";

const ProblemSolutionForm = ({ onRequestClose, refresh, editData, isNew }) => {
  const [formData, setFormData] = useState({
    image: "",
    problem: "",
    section: "",
    sub_section: "",
    solution: "",
  });
  const [industry, setindustry] = useState(null);
  const [usecase, setusecase] = useState([]);
  const [platform, setplatform] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
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
  useEffect(() => {
    fetchUseCase();
  }, []);

  const fetchUseCase = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/usecasesub`);
      setusecase(response.data.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching UseCase data:", error);
    }
  };
  useEffect(() => {
    fetchPlatform();
  }, []);

  const fetchPlatform = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/platformsub`);
      setplatform(response.data.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Platform data:", error);
    }
  };

  useEffect(() => {
    if (!isNew) {
      if (editData) {
        setFormData({
          image: editData.image,
          problem: editData.problem,
          section: editData.section,
          sub_section: editData.sub_section,
          solution: editData.solution,
        });
        setImagePreview(editData.image);
      }
    } else {
      setFormData({
        image: "",
        problem: "",
        section: "",
        sub_section: "",
        solution: "",
      });
      setImagePreview("");
    }
  }, [isNew, editData]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
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
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await axiosInstance.post("/problem-solution", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      notifySuccess(response.data.message);

      setFormData({
        image: "",
        problem: "",
        section: "",
        sub_section: "",
        solution: "",
      });
      setImagePreview("");
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
        `/problem-solution/${editData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      notifySuccess(response.data.message);

      setFormData({
        image: "",
        problem: "",
        section: "",
        sub_section: "",
        solution: "",
      });
      setImagePreview("");
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

  const handleImageClose = () => {
    setImagePreview("");
    setFormData({
      ...formData,
      image: "",
    });
  };

  console.log(usecase);

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>Problem Solution Form</ModalHeader>
        <StyledForm onSubmit={isNew ? handleSubmit : handleUpdate}>
          <FormGroup>
            {imagePreview && (
              <div>
                <IoClose onClick={() => handleImageClose()} />
                <ImagePreview src={imagePreview} alt="Image Preview" />
              </div>
            )}

            <Label>Image URL:</Label>
            <Input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Title:</Label>
            <Input
              type="text"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>section:</Label>
            <Select
              name="section"
              value={formData.section}
              onChange={handleChange}
            >
              <option value="">Select a section </option>
              <option value="whatwedo">What We Do</option>
              <option value="industry">Industry</option>
              <option value="usecase">UseCase</option>
              <option value="platform">Platform</option>
            </Select>
          </FormGroup>
          {formData.section === "industry" && (
            <FormGroup>
              <Label>sub section:</Label>
              <Select
                name="sub_section"
                value={formData.sub_section}
                onChange={handleChange}
              >
                <option value="">Select a Sub Section</option>
                <option value="home">Home</option>

                {industry && industry.length > 0 ? (
                  industry.map((data) => {
                    return (
                      <option key={data._id} value={data.route}>
                        {data.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">No Options Available</option>
                )}
              </Select>
            </FormGroup>
          )}
          {formData.section === "usecase" && (
            <FormGroup>
              <Label>sub section:</Label>
              <Select
                name="sub_section"
                value={formData.sub_section}
                onChange={handleChange}
              >
                <option value="">Select a Sub Section</option>
                <option value="home">Home</option>

                {usecase && usecase.length > 0 ? (
                  usecase.map((data) => {
                    return (
                      <option key={data._id} value={data.route}>
                        {data.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">No Options Available</option>
                )}
              </Select>
            </FormGroup>
          )}
          {formData.section === "platform" && (
            <FormGroup>
              <Label>sub section:</Label>
              <Select
                name="sub_section"
                value={formData.sub_section}
                onChange={handleChange}
              >
                <option value="">Select a Sub Section</option>
                <option value="home">Home</option>

                {platform && platform.length > 0 ? (
                  platform.map((data) => {
                    return (
                      <option key={data._id} value={data.route}>
                        {data.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">No Options Available</option>
                )}
              </Select>
            </FormGroup>
          )}

          <FormGroup>
            <Label>solution:</Label>
            <Textarea
              value={formData.solution}
              name="solution"
              onChange={handleChange}
            />
          </FormGroup>

          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <Button type="submit">Save Problem & Solution</Button>
        </StyledForm>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ProblemSolutionForm;

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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
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
