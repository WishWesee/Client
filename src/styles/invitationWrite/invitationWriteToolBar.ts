import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  margin-top: 48px;
  justify-content: start;
  width: 100%;
  height: 48px;
  gap: 24px;
  padding: 0 20px;
  background-color: var(--Blue5);
  box-sizing: border-box;
  z-index: 1000;
`;

export const ToolButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: var(--Blue5);
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const ToolButtonText = styled.p<{ $isActive: boolean }>`
  font: ${(props) =>
    props.$isActive
      ? "var(--Selected-BtnName-FileName)"
      : "var(--Unselected-Field-rNBLeft)"};

  color: ${(props) => (props.$isActive ? "var(--Primary)" : "var(--Black)")};
`;
