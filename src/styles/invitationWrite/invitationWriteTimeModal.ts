import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: calc(100% - 12px);
  left: 20px;
  width: 310px;
  height: fit-content;
  padding: 24px 12px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 2px solid var(--Blue10);
  background: var(--White);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TimeContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--Black);
  font: var(--Selected-BtnName-FileName);
  padding-bottom: 20px;
  border-bottom: 2px solid var(--Gray5);
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 16px;
  cursor: pointer;
`;

export const OkButton = styled.button`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  margin-top: 24px;
  background: var(--Primary);
  color: white;
  font: var(--Selected-BtnName-FileName);
`;
