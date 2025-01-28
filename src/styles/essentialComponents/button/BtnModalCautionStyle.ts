import styled from "styled-components";

export const CautionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font: var(--Selected-BtnName-FileName);
  cursor: pointer;

  background-color: #e1e1e2;
  color: #88898a;

  &.red {
    background-color: #ff4b4b;
    color: #fcfcfd;
  }

  &.blue {
    background-color: #358ffe;
    color: #fcfcfd;
  }
`;
