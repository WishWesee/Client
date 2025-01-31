import Calendar from "react-calendar";
import styled from "styled-components";

export const StyledCalendar = styled(Calendar)<{ isRangeSelected: boolean }>`
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
    font: var(--Selected-BtnName-FileName);
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
      font-size: 20px;
      padding: 10px;
      font-weight: 100;
    }
  }

  .react-calendar__month-view__weekdays {
    width: 100%;
    margin-bottom: 8px;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
  }

  .react-calendar__tile {
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 24px;
    margin: 8px 0;
    padding: 0;
    font: var(--Unselected-Field-rNBLeft);
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    abbr {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &--now {
      font: var(--BoldProperty-rNBRight);
    }

    &--rangeStart,
    &--rangeEnd {
      color: white !important;
      font: var(--Selected-BtnName-FileName);
      padding: 0 calc((14.2857% - 24px) / 2);

      abbr {
        background: var(--Primary) !important;
        border-radius: 50% !important;
        height: 24px;
      }
    }

    &--range {
      background-color: var(--Blue10);
      color: black;
    }

    &--rangeStart {
      background: linear-gradient(to right, white 50%, var(--Blue10) 50%);
    }

    &--rangeEnd {
      ${({ isRangeSelected }) =>
        isRangeSelected
          ? `background: linear-gradient(to left, white 50%, var(--Blue10) 50%);`
          : `background: none;`}
    }
  }
`;
