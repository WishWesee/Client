import * as S from "@/styles/ModalStyle";
import BtnModalCaution from "../button/Btn_Modal_Caution";

type Props = {
  title: string;
  text: string;
  leftBtnText: string;
  rightBtnText: string;
  onLeftClick: () => void;
  onRightClick: () => void;
};

const DeleteAccountModal = ({
  title,
  text,
  leftBtnText,
  rightBtnText,
  onLeftClick,
  onRightClick,
}: Props) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.Title>{title}</S.Title>
        <h4>
          {text.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h4>
        <S.BtnWrap>
          <BtnModalCaution
            text={leftBtnText}
            color="red"
            onClick={onLeftClick}
          />
          <BtnModalCaution
            text={rightBtnText}
            color="default"
            onClick={onRightClick}
          />
        </S.BtnWrap>
      </S.Modal>
    </S.Overlay>
  );
};

export default DeleteAccountModal;
