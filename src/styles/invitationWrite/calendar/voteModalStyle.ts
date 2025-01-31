import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  background-color: var(--White);
  border-radius: 8px;

  > h4 {
    font: var(--RegularContext);
    color: var(--Black);
    text-align: center;
  }
`;

export const SelectDateButton = styled.button`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 2px solid var(--Blue-10, #d7e9ff);
  background: var(--White, #fcfcfd);
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font: var(--Unselected-Field-rNBLeft);
  color: var(--Gray40);
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
`;
