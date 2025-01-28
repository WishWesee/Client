import { BoxColor } from "@/constants/invite";
import styled from "styled-components";

const ContentTextBox = ({ boxType }: { boxType: number }) => {
  return (
    <Container
      style={{
        backgroundColor: BoxColor[boxType].bgColor,
        border: BoxColor[boxType].border,
      }}
    >
      <h3>제목을 입력하세용</h3>
      <hr />
      <p>내용을 입력하세요</p>
    </Container>
  );
};

export default ContentTextBox;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  gap: 12px;
  width: 100%;

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }

  > hr {
    border: 1px solid var(--Gray10);
  }

  > p {
    font: var(--RegularContext);
    color: var(--Gray40);
  }
`;
