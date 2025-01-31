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
  box-shadow: 0px -20px 8px rgba(0, 0, 0, 0.25);

  ${isTablet} {
    padding: 60px 40px;
    border-radius: 0px;
    box-shadow: none;
  }

  ${isDesktop} {
    padding: 80px 64px;
    border-radius: 0px;
    box-shadow: none;
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
  cursor: pointer;

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
  gap: 40px;
  padding-bottom: 80px;
  color: var(--Black);

  ${isTablet} {
    padding-top: 180px;
    padding-bottom: 60px;
    gap: 60px;
  }

  ${isDesktop} {
    padding: 240px 16px 80px;
    gap: 80px;
  }
`;

export const FlodItem = styled.div`
  text-align: center;
  width: 100%;

  > img {
    border-radius: 8px;
    width: 100%;
  }

  > hr {
    border: 1px solid var(--Gray10);
    margin: 10px 55px;

    ${isTablet} {
      margin: 10px 120px;
    }

    ${isDesktop} {
      margin: 10px 160px;
    }
  }
`;
