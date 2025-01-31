import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.div<{ $isSequence: boolean }>`
  display: flex;
  width: 100%;
  padding: 8px;

  ${({ $isSequence }) =>
    $isSequence &&
    `
      outline: none;
      border-radius: 4px;
      border: 2px solid var(--Primary, #358ffe);
    `}
`;

export const InputText = styled.textarea`
  display: flex;
  color: var(--Black, #151516);
  text-align: center;
  width: 100%;
  border: none;
  resize: none;
  padding: 12px 4px;
  box-sizing: border-box;
  background-color: var(--White);

  &:focus {
    outline: none;
    /* border-radius: 4px;
    border: 2px solid var(--Primary, #358ffe); */
  }

  &::placeholder {
    color: var(--Gray10);
  }
`;
