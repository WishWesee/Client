import * as S from "@styles/invite/SaveWrapStyle";
import SaveBoxIcon from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import ArrowRightIcon from "@assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
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
    <S.Container>
      <h3>추억을 저장해보세요!</h3>
      <S.Button
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
        {isAlreadySave && <ArrowRightIcon color="var(--Primary)" />}
      </S.Button>
    </S.Container>
  );
};

export default SaveWrap;
