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
  background-color: var(--White);

  ${isTablet} {
    padding: 0px;
    align-items: flex-end;
  }

  ${isDesktop} {
    padding: 0px;
    align-items: flex-end;
  }

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const ShareBtnWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > button {
    background-color: var(--Grey5);
    padding: 14px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
  }

  > p {
    font: var(--AdditionalText);
    color: var(--Black);
  }
`;
