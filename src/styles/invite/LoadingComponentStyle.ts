import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  cursor: wait;

  > span {
    font: var(--Selected-BtnName-FileName);
    color: var(--Primary);
  }
`;
