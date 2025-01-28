import * as S from "@styles/invite/VotePersonModalStyle";
import ButtonBottomNext from "../button/Btn_Bottom_Next";

type Props = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  leftText: string;
  rightText: number;
  nameTexts: string[];
  onClick: () => void;
};

const VotePersonModal = ({
  icon: Icon,
  leftText,
  rightText,
  nameTexts,
  onClick,
}: Props) => {
  return (
    <S.ModalWrap>
      <S.HeadWrap>
        <S.IconWrap>
          {Icon && <Icon color="var(--Primary)" />}
          <h3>{leftText}</h3>
        </S.IconWrap>
        <h3 style={{ flexShrink: 0 }}>{rightText}명</h3>
      </S.HeadWrap>
      {nameTexts.map((name, index) => {
        return <h4 key={name + index}>{name}</h4>;
      })}
      <hr />
      <ButtonBottomNext text="완료" color="blue" onClick={onClick} />
    </S.ModalWrap>
  );
};

export default VotePersonModal;
