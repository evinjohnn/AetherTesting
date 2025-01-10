import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());
  const calendlyLink = "https://calendly.com/your-username"; // Replace with your actual Calendly link

  return (
    <CalendarWrapper>
      <StyledCalendar
        onChange={setValue}
        value={value}
        nextLabel={<GoChevronRight />}
        prevLabel={<GoChevronLeft />}
        next2Label={<HiChevronDoubleRight />}
        prev2Label={<HiChevronDoubleLeft />}
        onClickDay={() => {
          window.open(calendlyLink, "_blank");
        }}
      />
    </CalendarWrapper>
  );
};

export default CustomCalendar;

// Styled Components
const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #101010;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const StyledCalendar = styled(Calendar)`
  background: #101010;
  color: white;
  border: none;
  width: 100%;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;

    .react-calendar__navigation__label {
      font-size: 15px;
      color: #fff;
    }

    button {
      background: #ff4500;
      border: none;
      color: white;
      font-size: 15px;
      padding: 8px 10px;
      border-radius: 5px;
      cursor: pointer;
      display: grid;
      place-items: center;
      &:hover {
        background: #e63900;
      }
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 0.9rem;
    color: #aaa;
  }

  .react-calendar__month-view__days {
    height: 400px;
  }

  .react-calendar__tile {
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background: #444;
    }

    &.react-calendar__tile--active {
      background: rgb(255, 69, 0);
      color: white;
      cursor: pointer;
      border-radius: 50%;
    }
  }

  .react-calendar__tile--now {
    background: #333;
    border: 1px solid #ff4500;
  }
  abbr:where([title]) {
    text-decoration: none !important;
  }
  .react-calendar__navigation {
    height: 100%;
  }
  @media screen and (max-width: 540px) {
    .react-calendar__month-view__weekdays__weekday {
      font-size: 13px;
    }
    .react-calendar__tile {
      font-size: 13px;
    }
    .react-calendar__navigation {
      display: grid;
      justify-content: unset;
    }
    .react-calendar__month-view__days {
      height: 100%;
    }
  }
`;
