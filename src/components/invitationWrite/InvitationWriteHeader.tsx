// import { ReactComponent as ArrowLeft } from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg";
import ArrowLeft from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import * as S from "@styles/invitationWrite/InvitationWriteHeader";
import { useNavigate } from "react-router-dom";

interface InvitationWriteHeaderProps {
  backText: string;
  buttonType: "삭제" | "저장" | null;
  isEnable?: boolean;
}

const InvitationWriteHeader: React.FC<InvitationWriteHeaderProps> = ({
  backText,
  buttonType,
  isEnable,
}) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.BackContainer onClick={() => navigate(-1)}>
        <ArrowLeft />
        <S.BackText> {backText}</S.BackText>
      </S.BackContainer>
      {buttonType !== null && (
        <S.SaveButton
          isEnable={buttonType === "삭제" || isEnable}
          buttonType={buttonType}
        >
          {buttonType}
        </S.SaveButton>
      )}
    </S.Container>
  );
};

export default InvitationWriteHeader;
