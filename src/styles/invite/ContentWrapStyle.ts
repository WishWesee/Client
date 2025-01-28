import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const CardWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background-color: var(--White);
  padding: 20px;

  ${isTablet} {
    padding: 60px 40px;
    border-radius: 0px;
  }

  ${isDesktop} {
    padding: 80px 64px;
    border-radius: 0px;
  }
`;

export const HeaderWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 2px solid var(--Gray10);

  ${isTablet} {
    gap: 20px;
    padding: 0 0 20px;
    align-items: flex-start;
  }

  ${isDesktop} {
    gap: 24px;
    padding: 0 0 24px;
    align-items: flex-start;
  }

  > h1 {
    font: var(--TitleText);
    color: var(--Black);
  }
`;

export const StatusWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 4px;

  > span {
    font: var(--Selected-BtnName-FileName);
    color: var(--Gray40);
  }
`;

export const NotFoldWrap = styled.div<{ $isFold: boolean }>`
  transition: padding 0.3s ease-in-out, gap 0.3s ease-in-out,
    flex-direction 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;

  ${isTablet} {
    gap: 40px;
    padding: 52px 0;
    border-bottom: ${(props) =>
      props.$isFold ? "none" : "2px solid var(--Gray10)"};
  }

  ${isDesktop} {
    flex-direction: row;
    gap: 20px;
    padding: 56px 0;
    border-bottom: ${(props) =>
      props.$isFold ? "none" : "2px solid var(--Gray10)"};
  }

  > img {
    transition: all 0.3s ease-in-out;
    width: 100%;

    ${isTablet} {
      border-radius: 8px;
      padding: 0 4px;
    }

    ${isDesktop} {
      border-radius: 8px;
      padding: 0;
      max-width: 680px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    > p {
      font: var(--RegularContext);
      color: var(--Black);
      padding-left: 32px;
      margin-top: 4px;
    }

    > a {
      cursor: pointer;
      font: var(--UnderlineContext);
      color: var(--Gray40);
      text-decoration: underline var(--Gray40);
      padding-left: 32px;
      margin-top: 8px;
    }
  }
`;

export const SectionHeader = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;

  > h4 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }
`;

export const FoldWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  color: var(--Black);

  ${isTablet} {
    padding-top: 180px;
    padding-bottom: 60px;
  }

  ${isDesktop} {
    padding-top: 240px;
  }
`;
