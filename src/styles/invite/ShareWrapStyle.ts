import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div<{ $isShareLink: boolean }>`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: var(--White);
  border-radius: 8px;

  ${isTablet} {
    padding: 0px 40px;
    flex-direction: row;
    justify-content: ${(props) =>
      props.$isShareLink ? "space-between" : "flex-end"};
    border-radius: 0px;
  }

  ${isDesktop} {
    padding: 0px 64px;
    flex-direction: row;
    justify-content: ${(props) =>
      props.$isShareLink ? "space-between" : "flex-end"};
    border-radius: 0px;
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

export const Button = styled.button<{ $isAlreadySave: boolean }>`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.$isAlreadySave ? "var(--Gray5)" : "var(--Blue10)"};
  border: none;
  padding: 14px;
  border-radius: 30px;
  cursor: pointer;
`;
