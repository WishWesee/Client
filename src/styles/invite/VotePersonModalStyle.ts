import styled from "styled-components";

export const ModalWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  margin-top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 310px;
  padding: 24px;
  border: 2px solid var(--Blue10);
  background-color: var(--White);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > h4 {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
  }

  > hr {
    width: 100%;
    border: 1px solid var(--Grey5);
  }
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Primary);
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
