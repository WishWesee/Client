import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;

  ${isTablet} {
    padding-top: 40px;
  }

  ${isDesktop} {
    padding-top: 40px;
  }

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const ContentWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  ${isDesktop} {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const KakaoPreview = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Blue10);
  border-radius: 8px;
  padding: 29px 25px;

  ${isTablet} {
    padding: 29px 20px;
  }

  ${isDesktop} {
    padding: 29px 20px;
  }
`;

export const KakaoPreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  > img {
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    border-radius: 4px 4px 0px 0px;
  }
`;

export const KakaoPreviewTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background-color: var(--White);
  border-radius: 0px 0px 4px 4px;

  > h5 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }

  > p {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
  }
`;
