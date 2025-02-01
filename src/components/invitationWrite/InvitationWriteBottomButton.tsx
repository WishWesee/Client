import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWriteBottomButtonStyle";
import SlideButton from "../button/Btn_Boolean";

const InvitationWriteBottomButton = ({
  isSubmit,
  text,
  onClick,
}: {
  isSubmit: boolean;
  text: string;
  onClick: () => void;
}) => {
  const { setInvitation } = useInvitationStore();

  const handleSurvey = () => {
    setInvitation((invitation) => {
      invitation.attendanceSurveyEnabled = !invitation.attendanceSurveyEnabled;
    });
  };

  return (
    <S.Container>
      <S.LabelContainer>
        <S.Label>참석 여부 조사</S.Label>
        <SlideButton handleState={handleSurvey} />
      </S.LabelContainer>
      <S.OkButton $isEnable={isSubmit} onClick={onClick}>
        {text}
      </S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteBottomButton;
