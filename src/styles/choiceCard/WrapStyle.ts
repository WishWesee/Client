import styled from 'styled-components';

export const WrapBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 1.25rem;
  align-items: center;
  justify-content: center;
  background-color: var(--White);
`;

export const WrapTitle = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1.25rem 0;
  align-items: center;
  justify-content: center;
  color: var(--Black);
  font: var(--PageName);
  background-color: var(--White);
`;

export const WrapSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 0;
  align-items: center;
  justify-content: center;
  color: var(--Black);
  font: var(--RegularContext);
  background-color: var(--Blue5);
  border-radius: 8px;
  .highlight {
    color: var(--Primary);
  }
`;