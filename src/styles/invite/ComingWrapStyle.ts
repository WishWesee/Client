import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--White);
  width: 100%;
  border-radius: 8px;

  ${isTablet} {
    padding-top: 30px;
    padding-bottom: 120px;
    border-radius: 0px;
  }

  ${isDesktop} {
    padding-top: 40px;
    padding-bottom: 160px;
    border-radius: 0px;
  }

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  position: relative;

  > button {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
    width: 168px;

    &:disabled {
      cursor: default;
    }

    > p {
      font: var(--Unselected-Field-rNBLeft);
    }
  }
`;

export const DeadlineWrap = styled.div`
  border-top: 2px solid var(--Grey5);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }
`;
