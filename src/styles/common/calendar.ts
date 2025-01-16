import Calendar from "react-calendar";
import styled from "styled-components";

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

    .react-calendar__navigation__arrow {
      font-size: 20px; /* 버튼 크기 */
      padding: 10px;
      font-weight: 100;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    margin-bottom: 8px;

    abbr {
      text-decoration: none;
      font: var(--Selected-BtnName-FileName);
      color: var(--Black);
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
