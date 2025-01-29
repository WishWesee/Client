import styled from "styled-components";
import LoadingIcon2 from "@assets/images/Loading/Loading2.svg?react";
import SadIcon from "@assets/icons/화면GUI_Line/2020/Sad.svg?react";

const EmptyComponent = ({ text }: { text: string }) => {
  return (
    <Container>
      <LoadingIcon2 />
      <TextWrap>
        <span>{text}</span>
        <SadIcon color="var(--Primary)" />
      </TextWrap>
    </Container>
  );
};

export default EmptyComponent;

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  > span {
    font: var(--Selected-BtnName-FileName);
    color: var(--Primary);
  }
`;
