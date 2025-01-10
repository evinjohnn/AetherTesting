import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { MdOutlineQuestionMark } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { clientaxiosInstance } from "../../utils/baseurl";
import { notifySuccess } from "../../utils/toastmessage";

const Questionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionsData, setQuestion] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    answers: [],
  });
  const [message, setMessage] = useState("Questionnaire");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get(`/question`);
      setQuestion(response.data.data.question || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching CaseSection data:", error);
    }
  };

  const handleAnswerSelection = (answer) => {
    const updatedAnswers = [...formData.answers];
    updatedAnswers[currentIndex] = {
      question: questionsData[currentIndex].question,
      answer,
    };
    setFormData((prev) => ({ ...prev, answers: updatedAnswers }));
  };

  const handleNext = () => {
    if (currentIndex < questionsData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await clientaxiosInstance.post(
        "/questionaire",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        email: "",
        answers: [],
      });
      setCurrentIndex(0);
    } catch (error) {
      console.error(error);
      setMessage(`Failed to submit. Please try again. ${error}`);
    }
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }, [message]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, email: value }));
  };

  const slideAnimation = {
    hidden: (direction) => ({
      x: direction === "left" ? 300 : -300,
      opacity: 0,
    }),
    visible: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === "left" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          {message ? (
            <Head className="sub-head">{message}</Head>
          ) : (
            <Head className="sub-head">Questionnaire</Head>
          )}
          <CardContainer>
            <AnimatePresence custom="left">
              <motion.div
                key={currentIndex}
                custom="left"
                variants={slideAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  width: "100%",
                }}
              >
                {currentIndex < questionsData.length ? (
                  <Card index={currentIndex}>
                    <Top>
                      <MdOutlineQuestionMark />
                    </Top>
                    <Title>
                      <P>{questionsData[currentIndex].question}</P>
                    </Title>
                    <Options>
                      {questionsData[currentIndex].options.map(
                        (option, idx) => (
                          <Li key={idx}>
                            <RadioInput
                              type="radio"
                              name={`question-${currentIndex}`}
                              onChange={() => handleAnswerSelection(option)}
                              checked={
                                formData.answers[currentIndex]?.answer ===
                                option
                              }
                            />
                            {option}
                          </Li>
                        )
                      )}
                    </Options>
                    <Buttons>
                      <Button className="next" onClick={handleNext}>
                        {currentIndex === questionsData.length - 1
                          ? "Next"
                          : "Next"}
                      </Button>
                    </Buttons>
                  </Card>
                ) : (
                  <Card>
                    <Title>
                      <P>
                        Please enter your email to submit the questionnaire:
                      </P>
                    </Title>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Buttons>
                      <Button className="next" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Buttons>
                  </Card>
                )}
              </motion.div>
            </AnimatePresence>
          </CardContainer>
        </Container>
      </div>
    </MainContainer>
  );
};

export default Questionnaire;

const MainContainer = styled.section`
  min-height: 400px;
`;

const Container = styled.div``;

const Head = styled.h1`
  text-align: center;
  margin-bottom: 60px;
`;

const CardContainer = styled.div`
  position: relative;
`;

const Card = styled.div`
  padding: 20px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  background-color: #000;
  width: 100%;
  display: grid;
  justify-items: center;
`;

const Top = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.theme_red};
  height: 70px;
  width: 70px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  svg {
    color: ${colors.white};
    font-size: 40px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const P = styled.p`
  font-size: 18px;
`;

const Options = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const RadioInput = styled.input`
  appearance: none; /* Remove default styling */
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:checked {
    border-color: ${colors.theme_red}; /* Change border color when checked */
    background-color: ${colors.theme_red}; /* Add background color when checked */
  }

  &:hover {
    border-color: #b41e00; /* Darker border color on hover */
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5); /* Add focus ring */
  }

  &:checked::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 20px;
  width: 80%;
  font-size: 16px;
  color: ${colors.black};
  outline: none;
  &::placeholder {
    color: ${colors.grey_background};
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${colors.theme_red};
  color: ${colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.theme_red};
    border: 1px solid ${colors.theme_red};
  }
`;
