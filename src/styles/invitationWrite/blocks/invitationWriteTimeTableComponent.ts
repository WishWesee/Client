import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  background: var(--Gray5, #f4f4f4);
  box-sizing: border-box;
  width: 100%;

  > label {
    color: var(--Black, #151516);
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font: var(--Selected-BtnName-FileName);
  }
`;

export const InputContainer = styled.div<{ $isSequence: boolean }>`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  ${({ $isSequence }) =>
    $isSequence &&
    `
      outline: none;
      border-radius: 4px;
      border: 2px solid var(--Primary, #358ffe);
    `}
`;

export const AddButton = styled.button`
  display: flex;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Gray40, #88898a);
  color: white;
  font: var(--Selected-BtnName-FileName);
  border: none;
  cursor: pointer;
`;
