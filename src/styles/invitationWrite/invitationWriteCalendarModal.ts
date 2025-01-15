import Calendar from "react-calendar";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: calc(100% - 12px);
  left: 20px;
  width: 310px;
  height: fit-content;
  padding: 24px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 2px solid var(--Blue10);
  background: var(--White);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;

  .react-calendar {
    width: 100%;
    border: none;
    background: var(--White);
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }

  .react-calendar__navigation {
    display: flex;
    height: 30px;
    margin-bottom: 20px;
    border: none;
    font-family: Noto_Sans;
    font-weight: 700;
    font-size: 20px;
    align-items: center;

    button {
      border: none;
      background: none;
      font: var(--Selected-BtnName-FileName);
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
      display: none;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-family: Noto_Sans;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    text-align: center;
    padding: 10px 0;
    font: var(--Unselected-Field-rNBLeft);
    background: none;
    border: none;
    outline: none;

    &--now {
      font: var(--BoldProperty-rNBRight);
    }

    &--active {
      background-color: var(--Primary);
      color: white !important;
      font: var(--Selected-BtnName-FileName);
      border-radius: 50%;
    }
  }
`;
