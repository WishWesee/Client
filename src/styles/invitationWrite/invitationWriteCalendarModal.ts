import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: calc(100% - 12px);
  left: 20px;
  width: 310px;
  height: fit-content;
  padding: 24px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 2px solid var(--Blue10);
  background: var(--White);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const TimeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--Gray5);
  width: 100%;
  margin-top: 24px;
  color: black;
  padding-top: 24px;
  font: var(--Selected-BtnName-FileName);
  align-items: center;
`;

export const OkButton = styled.button`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  border: none;
  margin-top: 24px;
  background: var(--Primary);
  color: white;
  font: var(--Selected-BtnName-FileName);
`;
