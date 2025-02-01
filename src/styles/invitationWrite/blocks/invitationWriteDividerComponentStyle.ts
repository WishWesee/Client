import { isDesktop, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.div<{ $isSequence: boolean }>`
  width: 100%;
  padding: 8px;
  text-align: center;
  box-sizing: border-box;

  ${({ $isSequence }) =>
    $isSequence &&
    `
      outline: none;
      border-radius: 4px;
      border: 2px solid var(--Primary, #358ffe);
    `}

  > hr {
    display: flex;
    border: 1px solid var(--Gray10);
    margin: 10px 55px;
    width: 100% ${isTablet} {
      margin: 10px 120px;
    }

    ${isDesktop} {
      margin: 10px 160px;
    }
  }
`;
