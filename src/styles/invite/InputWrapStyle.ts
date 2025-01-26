import styled from "styled-components";

export const PersonInputWrap = styled.div<{ $isViewCheckButton: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  > label {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    flex-shrink: 0;
  }

  > input {
    width: 100%;
    border-radius: 4px;
    padding: 14px 40px 14px 10px;
    background-color: var(--White);
    border: 2px solid var(--Gray10);
    outline-color: var(--Primary);

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);

    &::placeholder {
      color: var(--Gray40);
    }
  }

  > svg {
    position: absolute;
    right: ${(props) => (props.$isViewCheckButton ? 12 : 48)}px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  > button {
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    border: none;
    background-color: transparent;
    flex-shrink: 0;
    padding: 0;
    cursor: pointer;
  }
`;
