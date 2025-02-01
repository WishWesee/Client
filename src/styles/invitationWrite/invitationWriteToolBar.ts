import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  margin-top: 48px;
  justify-content: start;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  align-items: center;
  flex-direction: column;
`;

export const ToolContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: start;
  align-items: center;
  background-color: var(--Blue5);
  gap: 24px;

  /* 첫 번째 버튼의 오른쪽 간격 줄이기 */
  & > *:first-child {
    margin-right: -12px; /* 원하는 값으로 조정 */
  }
`;

export const ToolButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ToolButtonText = styled.p<{ $isActive: boolean }>`
  font: ${(props) =>
    props.$isActive
      ? "var(--Selected-BtnName-FileName)"
      : "var(--Unselected-Field-rNBLeft)"};

  color: ${(props) => (props.$isActive ? "var(--Primary)" : "var(--Black)")};
`;

export const SubToolContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 48px;
  padding: 0 20px 0 64px;
  box-sizing: border-box;

  justify-content: start;
  align-items: center;
  background-color: var(--Gray5, #f4f4f4);
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 12px;

  > * {
    cursor: pointer;
  }
`;
