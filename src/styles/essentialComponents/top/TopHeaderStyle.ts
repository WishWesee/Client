import styled from "styled-components";

export const TopHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfd;
`;

export const HeaderButtonWithModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonContainer = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  gap: 4px;
  width: 80px;
  height: 76px;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background-color: var(--White);
  font: var(--RegularContext);
  color: var(--Black);
  box-shadow: 0px 0px 8px 0px #00000033;
`;
