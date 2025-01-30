import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 44px;

  ${isTablet} {
    padding: 40px 32px 120px;
  }

  ${isDesktop} {
    padding: 80px 64px 160px;
  }

  > h2 {
    transition: all 0.3s ease-in-out;
    padding: 20px 0;
    font: var(--PageName);
    color: var(--Black);
    text-align: center;

    ${isTablet} {
      text-align: left;
    }

    ${isDesktop} {
      padding: 24px 0;
      text-align: left;
    }
  }

  h4 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }
`;

export const TotalWrap = styled.div`
  transition: all 0.3s ease-in-out;
  margin: 0 20px;
  padding: 20px;
  background-color: var(--Blue5);
  border-radius: 8px;

  font: var(--RegularContext);
  color: var(--Black);
  text-align: center;

  ${isTablet} {
    margin: 0;
  }

  ${isDesktop} {
    margin: 0;
    padding: 24px;
  }
`;

export const YearWrap = styled.div`
  transition: all 0.3s ease-in-out;
  margin: 20px;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--Grey5);

  ${isTablet} {
    margin: 24px 0px 20px;
    padding: 18px 0px 38px;
    border-bottom: 2px solid var(--Gray10);
  }

  ${isDesktop} {
    margin: 80px 0px 24px;
    padding: 18px 0px 42px;
    border-bottom: 2px solid var(--Gray10);
  }
`;

export const RightBtnWrap = styled.div`
  display: flex;
  gap: 8px;

  > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;

    &:disabled {
      cursor: default;
    }
  }
`;

export const ListWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--Blue5);
  padding: 20px 21px;
  gap: 12px;

  ${isTablet} {
    grid-template-columns: repeat(3, 1fr);
    border-radius: 8px;
    padding: 20px 26px;
    gap: 20px;
  }

  ${isDesktop} {
    grid-template-columns: repeat(4, 1fr);
    border-radius: 8px;
    padding: 24px;
    gap: 16px;
  }
`;

export const ListItem = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: var(--White);
  cursor: pointer;

  > img {
    width: 100%;
    aspect-ratio: 350/262;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  > p {
    font: var(--AdditionalText);
    color: var(--Gray40);
    padding-left: 8px;
    padding-bottom: 4px;

    ${isTablet} {
      padding-bottom: 8.5px;
    }

    ${isDesktop} {
      font: var(--Unselected-Field-rNBLeft);
      padding-bottom: 8px;
    }
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0 4px 8px;

  ${isTablet} {
    padding: 8.5px 4px 4px 8px;
  }

  ${isDesktop} {
    padding: 8px 4px 8px 8px;
  }

  > h4 {
    ${isDesktop} {
      font: var(--PageName);
    }
  }
`;
