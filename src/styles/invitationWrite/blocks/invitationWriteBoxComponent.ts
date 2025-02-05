import { isDesktop, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const TextBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  gap: 12px;
  width: 100%;

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }

  > hr {
    border: 1px solid var(--Gray10);
  }

  > p {
    font: var(--RegularContext);
    color: var(--Gray40);
    white-space: pre-wrap;
  }
`;

export const TitleInput = styled.input`
  display: flex;
  height: fit-content;
  color: var(--Black, #151516);
  text-align: center;
  width: 100%;
  border: none;
  resize: none;
  box-sizing: border-box;
  background-color: transparent;
  font: var(--Selected-BtnName-FileName);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--Black, #151516);
  }
`;

export const ContentInput = styled.textarea`
  display: flex;
  color: var(--Black, #151516);
  text-align: center;
  width: 100%;
  border: none;
  resize: none;
  padding: 12px 4px;
  box-sizing: border-box;
  background-color: transparent;

  color: var(--Grey40, #88898a);
  text-align: center;

  /* Regular/R_16_24 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:focus {
    outline: none;
    /* border-radius: 4px;
    border: 2px solid var(--Primary, #358ffe); */
  }

  &::placeholder {
    color: var(--Gray10);
  }
`;

export const InputContainer = styled.div<{ $isSequence: boolean }>`
  display: flex;
  width: 100%;
  padding: 8px;

  ${({ $isSequence }) =>
    $isSequence &&
    `
      outline: none;
      border-radius: 4px;
      border: 2px solid var(--Primary, #358ffe);
    `}
`;

// ------------ Time Table

export const TimeTableWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  gap: 12px;
  width: 100%;
  background-color: var(--Grey5);

  > h4 {
    font: var(--Selected-BtnName-FileName);
    color: var(-Black);
  }
`;

export const TimeTableItem = styled.div`
  display: flex;
  gap: 4px;

  > div {
    background-color: var(--White);
    border: 2px solid var(--Gray10);
    border-radius: 4px;
    padding: 14px 10px;

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
  }

  .time {
    width: 128px;

    ${isTablet} {
      width: 160px;
    }

    ${isDesktop} {
      width: 200px;
    }
  }

  .content {
    flex: 1;
    text-align: left;
  }
`;
