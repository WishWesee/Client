import styled from "styled-components";

export const ToggleButton = styled.button<{ $color: string }>`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$color === "blue" ? "var(--Primary)" : "var(--Gray10)"};
  color: ${(props) =>
    props.$color === "blue" ? "var(--White)" : "var(--Gray40)"};
  border: none;
  cursor: pointer;
  font: var(--Selected-BtnName-FileName);

  @media (min-width: 768px) {
    width: calc( 100vw - 128px );
    height: 48px;
  }
`;
