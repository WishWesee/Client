import SaveBox from "@assets/icons/화면GUI_Full/2424_Activate/SaveBox.svg?react";
import * as S from "@styles/common/checkModal";

interface CheckModalProps {
  exitModal: () => void;
}
const CheckModal: React.FC<CheckModalProps> = ({ exitModal }) => {
  return (
    <S.Overlay onClick={exitModal}>
      <S.Modal>
        <SaveBox />
        <h4>나의 초대장에 저장되었습니다!</h4>
      </S.Modal>
    </S.Overlay>
  );
};

export default CheckModal;
