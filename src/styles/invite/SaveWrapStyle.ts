import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: var(--White);
  border-radius: 8px;

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const Button = styled.button`
  transition: all 0.3s ease-in-out;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--Blue10);
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  max-width: 348px;

  > span {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Primary);
  }
`;
