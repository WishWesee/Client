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

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const Button = styled.button<{ $isAlreadySave: boolean }>`
  transition: all 0.3s ease-in-out;
  display: flex;
  gap: 8px;
  justify-content: ${(props) =>
    props.$isAlreadySave ? "space-between" : "center"};
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.$isAlreadySave ? "var(--Gray5)" : "var(--Blue10)"};
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;

  > span {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Primary);
  }
`;
