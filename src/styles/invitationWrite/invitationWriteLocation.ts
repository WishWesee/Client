import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: var(--Blue5);
  border-radius: 8px;
  padding: 20px;
  margin-top: 12px;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const Label = styled.p`
  font: var(--Selected-BtnName-FileName);
  color: var(--Black);
  margin: 0;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 12px;
  height: 48px;
  width: 100%;
  align-items: center;
  gap: 9px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 12px;
  align-self: stretch;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid var(--Blue10);
  background: var(--White);

  ::placeholder {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Gray40);
  }

  &:focus {
    border: 2px solid var(--Primary);
    outline: none;
    width: calc(100% - 40px);
  }
`;

export const LocationInput = styled.input`
  display: flex;
  width: 100%;

  padding: 12px;
  padding-left: 40px;
  align-self: stretch;
  border-radius: 4px;
  border: 2px solid var(--Blue10);

  ::placeholder {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Gray40);
  }

  &:focus {
    border: 2px solid var(--Primary);
    outline: none;
    width: calc(100% - 40px);
  }
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: end;
  height: 100%;
  padding: 0;
  align-items: center;
  color: var(--Black, #151516);
  text-align: center;
  font: var(--Unselected-Field-rNBLeft);
  background-color: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
