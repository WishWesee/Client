import SlideButton from "../button/Btn_Boolean";
import * as S from "@styles/invite/InviteBottomStyle";

type Props = {
  btnText: string;
  onBtnClick: () => void;
  isDisabled: boolean;
  isCheck: boolean;
  onCheckClick: () => void;
};

const InviteBottom = ({
  btnText,
  onBtnClick,
  isDisabled,
  isCheck,
  onCheckClick,
}: Props) => {
  return (
    <S.Container>
      <S.AttendanceControl>
        <span>참석 여부 조사</span>
        <SlideButton handleState={onCheckClick} currentState={isCheck} />
      </S.AttendanceControl>
      <button onClick={onBtnClick} disabled={isDisabled}>
        {btnText}
      </button>
    </S.Container>
  );
};

export default InviteBottom;
