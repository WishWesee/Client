import styled from "styled-components";
import SaveBoxIcon from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import ArrowRight from "@assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
import { useNavigate } from "react-router-dom";
import { postSaveReceived } from "@/api/invitation/postSaveReceived";

type Props = {
  id: number;
  isAlreadySave: boolean;
  isLogin: boolean;
};

const SaveWrap = ({ id, isAlreadySave, isLogin }: Props) => {
  const navigate = useNavigate();

  const handleSaveReceived = async () => {
    try {
      await postSaveReceived(id);
      navigate(`/invite/${id}`);
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <Container>
      <h3>추억을 저장해보세요!</h3>
      <Button
        $isAlreadySave={isAlreadySave}
        onClick={() =>
          isAlreadySave
            ? navigate("/invite")
            : isLogin
            ? handleSaveReceived()
            : navigate("/login")
        }
      >
        <span>
          <SaveBoxIcon />
          {isAlreadySave ? "보관함 보러가기" : "보관함에 저장하기"}
        </span>
        {isAlreadySave && <ArrowRight color="var(--Primary)" />}
      </Button>
    </Container>
  );
};

export default SaveWrap;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: var(--White);

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const Button = styled.button<{ $isAlreadySave: boolean }>`
  transition: all 0.3s ease-in-out;
  display: flex;
  gap: 8px;
  justify-content: ${(props) =>
    props.$isAlreadySave ? "space-between" : "center"};
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.$isAlreadySave ? "var(--Gray5)" : "var(--Blue10)"};
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;

  > span {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Primary);
  }
`;
