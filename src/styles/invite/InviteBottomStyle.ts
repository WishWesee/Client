import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  background-color: var(--White);
  border-top: 2px solid var(--Grey5);
  padding: 20px 20px 40px;

  ${isTablet} {
    padding: 20px 40px 40px;
  }

  ${isDesktop} {
    padding: 20px 40px 40px;
  }

  > button {
    background-color: var(--Primary);
    border: none;
    border-radius: 8px;
    padding: 12px;
    font: var(--Selected-BtnName-FileName);
    color: var(--White);
    width: 160px;
    cursor: pointer;

    ${isTablet} {
      width: 100%;
    }

    ${isDesktop} {
      width: 100%;
    }

    &:disabled {
      background-color: var(--Gray10);
      color: var(--Gray40);
      cursor: default;
    }
  }
`;

export const AttendanceControl = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 8px;

  ${isTablet} {
    justify-content: flex-end;
    gap: 40px;
    padding: 8px;
  }

  ${isDesktop} {
    justify-content: flex-end;
    gap: 40px;
    padding: 8px;
  }

  > span {
    transition: all 0.3s ease-in-out;
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);

    ${isTablet} {
      border-right: 2px solid var(--Grey5);
      padding: 8px 40px 8px 0;
    }
  }
`;
