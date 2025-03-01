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
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  background-color: var(--White);
  border-radius: 8px;
  width: 350px;

  > h4 {
    font: var(--RegularContext);
    color: var(--Black);
    text-align: center;
  }
`;

export const Title = styled.div`
  font: var(--BoldProperty-rNBRight);
  color: var(--Black);
  margin: 0 0 15px 0;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  width: 148px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Primary, #358ffe);
  border: none;
  color: white;
  font: var(--Selected-BtnName-FileName);
`;
