import React, { useEffect, useRef, useState } from "react";
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
import CustomCalendar from "./Calendar";
import { RxCalendar } from "react-icons/rx";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const dateInputRef = useRef(null);

  const handleCalendarClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Triggers the date picker dropdown
    }
  };
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
          date: "",
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
            <Content>If you have any questions, Write to us.</Content>
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
              <Calendar data-aos="zoom-in-up">
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                  required
                  className="date"
                  ref={dateInputRef}
                />
                <RxCalendar onClick={handleCalendarClick} />
              </Calendar>
              <TextArea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                data-aos="zoom-in-up"
                required
              />
              <ButtonContainer>
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

          {/* <Right>
            <CustomCalendar />
          </Right> */}
        </Container>
      </div>
    </Section>
  );
};

export default DemoForm;

const Section = styled.section``;

const Head = styled.h2`
  text-align: center;
  padding: 60px 0;
  &.form {
    font-size: 25px;
    text-align: left;
    padding: 0 0 30px 0;
  }
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
`;

const Left = styled.div`
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Right = styled.div``;

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div``;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  background: transparent;
  width: 100%;
  color: ${colors.white};

  &::placeholder {
    font-size: 14px;

    color: #8f8f8f;
  }
  &.date {
    border-bottom: none;
  }
  &.date::-webkit-calendar-picker-indicator {
    display: none;
  }
  &.date::-webkit-inner-spin-button {
    display: none;
  }
  &:focus {
    border-bottom: 2px solid ${colors.theme_red};
  }
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
  outline: none;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  background: transparent;
  color: ${colors.white};

  &::placeholder {
    font-size: 14px;

    color: #8f8f8f;
  }
  &:focus {
    border-bottom: 2px solid ${colors.theme_red};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
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
  }
  svg {
    font-size: 25px;
    color: ${colors.theme_red};
  }
`;

const MapContainer = styled.div`
  margin-top: 50px;
`;
const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #ccc;

  svg {
    font-size: 25px;
    cursor: pointer;
    color: #ccc;
  }
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
`;
