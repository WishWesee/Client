import * as S from "@styles/invite/SaveWrapStyle";
import SaveBoxIcon from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import { useNavigate } from "react-router-dom";
import { postSaveReceived } from "@/api/invitation/postSaveReceived";
import useNavigateStore from "@/store/useNavigateStore";

type Props = {
  id: number;
  isLogin: boolean;
  refetch: () => void;
};

const SaveWrap = ({ id, isLogin, refetch }: Props) => {
  const navigate = useNavigate();
  const { setNavigatePage } = useNavigateStore();

  const handleSaveReceived = async () => {
    try {
      await postSaveReceived(id);
      refetch();
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const handleSaveClick = () => {
    if (isLogin) {
      handleSaveReceived();
    } else {
      setNavigatePage(`/invites/${id}`);
      navigate("/login");
    }
  };

  return (
    <S.Container>
      <h3>추억을 저장해보세요!</h3>
      <S.Button onClick={handleSaveClick}>
        <SaveBoxIcon />
        <span>보관함에 저장하기</span>
      </S.Button>
    </S.Container>
  );
};

export default SaveWrap;
