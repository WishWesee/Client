import styled from "styled-components";

interface SaveButtonProps {
  isEnable?: boolean;
  buttonType: "삭제" | "저장" | null;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  margin-top: 54px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 14px 20px;
  border-bottom: 2px solid var(--Grey5);
  background-color: var(--White);
`;

export const BackContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const BackText = styled.p`
  font: var(--Unselected-Field-rNBLeft);
  color: var(--Black);
  text-align: center;
`;

export const SaveButton = styled.button.withConfig({
  // buttonType이 DOM으로 전달되지 않도록 필터링
  shouldForwardProp: (prop) => prop !== "isEnable" && prop !== "buttonType",
})<SaveButtonProps>`
  font: var(--BoldProperty-rNBRight);
  color: ${(props) =>
    props.buttonType === "삭제"
      ? "var(--Caution)"
      : props.isEnable
      ? "var(--Primary)"
      : "var(--Gray40)"};
  background-color: white;
  border: none;
  height: 20px;
  cursor: ${(props) => (props.isEnable ? "pointer" : "not-allowed")};
`;
