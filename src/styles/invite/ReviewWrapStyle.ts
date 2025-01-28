import styled from "styled-components";

import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--Blue5);
  padding-bottom: 40px;
  border-radius: 8px;

  ${isTablet} {
    padding: 30px 40px;
    border-radius: 0px;
  }

  ${isDesktop} {
    padding: 40px 64px;
    border-radius: 0px;
  }
`;

export const HeadWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  background-color: var(--White);

  ${isTablet} {
    padding: 30px;
  }

  ${isDesktop} {
    padding: 40px;
  }

  > p {
    font: var(--Selected-BtnName-FileName);
    color: var(--Gray40);
    padding: 0 20px 12px;

    ${isTablet} {
      padding: 0;
    }

    ${isDesktop} {
      padding: 0;
    }

    > span {
      color: var(--Primary);
    }
  }
`;

export const TitleWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 0;

  ${isTablet} {
    padding: 0;
  }

  ${isDesktop} {
    padding: 0;
  }

  > h2 {
    font: var(--TitleText);
    color: var(--Black);
  }

  > p {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  > button {
    background-color: transparent;
    border: none;
    padding: 16px 0;
    cursor: pointer;

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    flex-shrink: 0;
  }
`;

export const InputWrap = styled.div<{ $isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid
    ${(props) => (props.$isFocused ? "var(--Primary)" : "var(--Gray10)")};
  border-radius: 4px;
  padding: 12px;
  width: 100%;
`;

export const ImgWrap = styled.div`
  position: relative;
  max-width: 326px;

  > img {
    width: 100%;
    border-radius: 8px;
  }

  > svg {
    position: absolute;
    z-index: 10;
    background-color: var(--White);
    border-radius: 100%;
    right: 0;
    margin: 8px;
    cursor: pointer;
  }
`;

export const InputTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > input {
    border: none;
    outline: none;
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    flex-grow: 1;

    &::placeholder {
      color: var(--Gray40);
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 0;

  ${isTablet} {
    padding: 20px 0 0;
  }

  ${isDesktop} {
    padding: 20px 0 0;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background-color: var(--White);
  border-radius: 8px;

  > img {
    max-width: 326px;
    border-radius: 8px;
  }

  > p {
    font: var(--RegularContext);
    color: var(--Black);
  }
`;

export const RightWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
