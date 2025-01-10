import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TfiHeadphone } from "react-icons/tfi";
import { colors } from "../../ThemeConfig";
import Map from "../includes/map";
import ButtonComponent from "../ButtonComponent";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { BiSolidMessage } from "react-icons/bi";
import { clientaxiosInstance } from "../../utils/baseurl";
import { notifyError, notifySuccess } from "../../utils/toastmessage";
import Aos from "aos";
import "aos/dist/aos.css";
const Form = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Send form data to server here
      const response = await clientaxiosInstance.post("/contact", formData);
      if (response.status === 200) {
        setLoading(false);
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      notifyError(error);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        notifyError(error);
        setError(null);
      }, 3000);
    }
    if (message) {
      setTimeout(() => {
        notifySuccess(message);
        setMessage(null);
      }, 3000);
    }
  }, [error, message]);

  return (
    <Section>
      <Head className="sub-head">Get In Touch</Head>
      <div className="wrapper">
        <Container>
          <Left>
            <Head className="sub-head form">Send A Message</Head>
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Content>
            <StyledForm onSubmit={handleFormSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                data-aos="zoom-in-up"
                required
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                data-aos="zoom-in-up"
                required
              />
              <Input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Phone"
                data-aos="zoom-in-up"
                required
              />
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                data-aos="zoom-in-up"
                required
              />
              <TextArea
                rows={10}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                data-aos="zoom-in-up"
                required
              />
              <ButtonContainer data-aos="fade-right">
                {loading ? (
                  <p>Loading</p>
                ) : (
                  <Button>
                    <Line className="top" />
                    <Line className="right" />
                    <ButtonComponent text="Send Message" />
                    <Line className="bottom" />
                    <Line className="left" />
                  </Button>
                )}
              </ButtonContainer>
            </StyledForm>
            <p>{message}</p>
            <p>{error}</p>
          </Left>
        </Container>
      </div>
    </Section>
  );
};

export default Form;

const Section = styled.section``;

const Head = styled.h2`
  text-align: center;
  padding: 60px 0;
  &.form {
    font-size: 25px;
    text-align: left;
    padding: 0 0 30px 0;

    @media screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
`;

const Container = styled.div``;

const Left = styled.div`
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;

const StyledForm = styled.form`
  gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent !important; /* Or any desired color */
    -webkit-box-shadow: 0 0 0px 1000px #121212 inset !important; /* Ensure consistent color */
    color: #fff !important;
    caret-color: #fff !important; /* Matches the caret color to the input's text color */
  }

  input:-webkit-autofill::first-line,
  textarea:-webkit-autofill::first-line {
    color: ${colors.white} !important; /* Ensures the text color matches */
  }
`;

const Item = styled.div``;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${colors.grey_border};

  outline: none;
  font-size: 15px;
  background: transparent;
  width: 100%;
  color: ${colors.white};

  &::placeholder {
    font-size: 14px;

    color: ${colors.placeholder_text};
  }
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.grey_border};
  font-size: 15px;
  background: transparent;
  color: ${colors.white};

  &::placeholder {
    font-size: 14px;

    color: ${colors.placeholder_text};
  }
`;

const ButtonContainer = styled.div`
  padding-bottom: 45px;
  margin-top: 20px;
  display: flex;
  justify-content: end;
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
    justify-content: center;
  }

  &.bottom {
    justify-content: center;
    margin-top: 30px;
  }
`;

const Button = styled.div`
  position: relative;
  display: inline-block;
`;
const Line = styled.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${colors.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${colors.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${colors.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${colors.white};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Card = styled.div`
  background-color: ${colors.grey_background};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${colors.white};
  text-align: left;
`;

const CardContent = styled.p``;

const Connect = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
  text-transform: capitalize;
  div {
    background-color: #ff2a001e;
    padding: 15px;
    border-radius: 50%;

    display: grid;
    place-items: center;

    @media screen and (max-width: 540px) {
      height: 60px;
      width: 60px;
    }
  }
  svg {
    font-size: 25px;
    color: ${colors.theme_red};
  }

  @media screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
  }
`;

const MapContainer = styled.div`
  margin-top: 50px;
`;
