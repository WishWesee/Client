import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  border-top: 2px solid var(--Gray10);
  background-color: transparent;
  cursor: pointer;

  > p {
    font: var(--AdditionalText);
    color: var(--Gray40);
    margin-top: 20px;
    margin-bottom: 4px;
  }
`;
