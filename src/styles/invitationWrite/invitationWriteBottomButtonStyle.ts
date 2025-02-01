import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 20px 40px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top: 2px solid var(--Gray10);
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.p`
  color: var(--Black, #151516);
  font: var(--Unselected-Field-rNBLeft);
`;

export const OkButton = styled.button<{ $isEnable: boolean }>`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  font: var(--Selected-BtnName-FileName);
  background: ${({ $isEnable }) =>
    $isEnable ? "var(--Primary, #358ffe)" : "var(--Gray10)"};
  color: ${({ $isEnable }) => ($isEnable ? "var(--White)" : "var(--Gray40)")};
  cursor: ${({ $isEnable }) => ($isEnable ? "pointer" : "not-allowed")};
`;
