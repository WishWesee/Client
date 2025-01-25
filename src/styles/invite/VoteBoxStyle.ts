import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 20px;
  background-color: var(--Grey5);
  border-radius: 8px;

  > hr {
    border: 1px solid var(--Gray10);
  }

  > button {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: none;
    font: var(--Selected-BtnName-FileName);
    cursor: pointer;
  }
`;

export const BlueBtn = styled.button`
  background-color: var(--Primary);
  color: var(--White);

  &:disabled {
    background-color: var(--Gray10);
    color: var(--Gray40);
    cursor: default;
  }
`;

export const GrayBtn = styled.button`
  background-color: var(--Gray10);
  color: var(--Gray40);
`;

export const InfoWraps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 8px;

  > svg {
    width: 24px;
    height: 24px;
  }

  > p {
    font: var(--RegularContext);
    color: var(--Black);
  }
`;

export const PersonInputWrap = styled.div<{ $isCheckPersonName: boolean }>`
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
    padding: 14px 10px;
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
    right: ${(props) => (props.$isCheckPersonName ? 12 : 48)}px;
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

export const VoteOptions = styled.div<{ $disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
`;

export const VoteOptionsChoice = styled.div<{ $isVoteComplete: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${(props) => !props.$isVoteComplete && "0px 4px"};
  position: relative;

  > p {
    color: var(--Black);
  }
`;

export const VoteOption = styled.div<{
  $isSelected: boolean;
  $isVoteComplete: boolean;
  $isOwner: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${(props) =>
    props.$isSelected && props.$isVoteComplete
      ? "var(--Primary)"
      : "var(--White)"};
  border: 2px solid
    ${(props) => (props.$isSelected ? "var(--Primary)" : "var(--Gray10)")};
  border-radius: 4px;
  padding: 14px 10px;

  cursor: ${(props) => (props.$isOwner ? "pointer" : "default")};
`;

export const LeftText = styled.p<{
  $isSelected: boolean;
  $isVoteComplete: boolean;
}>`
  font: var(--Unselected-Field-rNBLeft);
  color: ${(props) =>
    props.$isSelected && props.$isVoteComplete
      ? "var(--White)"
      : "var(--Black)"};
`;

export const RightText = styled.p<{ $isSelected: boolean }>`
  font: var(--Selected-BtnName-FileName);
  color: ${(props) => (props.$isSelected ? "var(--White)" : "var(--Black)")};
`;
