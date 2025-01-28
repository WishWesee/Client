// import { ReactComponent as ArrowLeft } from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg";
import ArrowLeft from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import * as S from "@styles/invitationWrite/InvitationWriteHeader";

interface InvitationWriteHeaderProps {
  backText: string;
  buttonType: "삭제" | "저장" | null;
  isEnable?: boolean;
  onLeftBtnClick?: () => void;
  onRightBtnClick?: () => void;
}

const InvitationWriteHeader: React.FC<InvitationWriteHeaderProps> = ({
  backText,
  buttonType,
  isEnable,
  onLeftBtnClick,
  onRightBtnClick,
}) => {
  return (
    <S.Container>
      <S.BackContainer onClick={onLeftBtnClick}>
        <ArrowLeft />
        <S.BackText> {backText}</S.BackText>
      </S.BackContainer>
      {buttonType !== null && (
        <S.SaveButton
          isEnable={buttonType === "삭제" || isEnable}
          buttonType={buttonType}
          onClick={onRightBtnClick}
        >
          {buttonType}
        </S.SaveButton>
      )}
    </S.Container>
  );
};

export default InvitationWriteHeader;
