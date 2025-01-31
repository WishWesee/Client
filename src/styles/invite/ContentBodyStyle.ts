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
