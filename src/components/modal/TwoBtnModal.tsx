import * as S from "@/styles/ModalStyle";
import BtnModalCaution from "../button/Btn_Modal_Caution";

type Props = {
  text: string;
  leftBtnText: string;
  rightBtnText: string;
  color: string;
  onLeftClick: () => void;
  onRightClick: () => void;
};

const TwoBtnModal = ({
  text,
  leftBtnText,
  rightBtnText,
  color,
  onLeftClick,
  onRightClick,
}: Props) => {
  return (
    <S.Overlay>
      <S.Modal>
        <h4>
          {text.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h4>{" "}
        <S.BtnWrap>
          <BtnModalCaution
            text={leftBtnText}
            color="default"
            onClick={onLeftClick}
          />
          <BtnModalCaution
            text={rightBtnText}
            color={color}
            onClick={onRightClick}
          />
        </S.BtnWrap>
      </S.Modal>
    </S.Overlay>
  );
};

export default TwoBtnModal;
