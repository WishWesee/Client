import { isDesktop, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Button = styled.button<{ $isFold: boolean }>`
  width: 100%;
  border: none;
  border-top: ${(props) =>
    props.$isFold ? "none" : "2px solid var(--Gray10)"};
  background-color: transparent;
  cursor: pointer;
  padding-top: 20px;

  ${isTablet} {
    border-top: 2px solid var(--Gray10);
  }

  ${isDesktop} {
    border-top: 2px solid var(--Gray10);
  }

  > p {
    font: var(--AdditionalText);
    color: var(--Gray40);
    margin-bottom: 4px;
  }
`;
