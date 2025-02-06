import * as S from "@styles/common/checkModal";

interface CheckModalProps {
  exitModal: () => void;
  text: string;
}
const AuthModal: React.FC<CheckModalProps> = ({ exitModal, text }) => {
  return (
    <S.Overlay onClick={exitModal}>
      <S.Modal>
        <h4>{text}</h4>
        <S.Button>확인</S.Button>
      </S.Modal>
    </S.Overlay>
  );
};

export default AuthModal;
