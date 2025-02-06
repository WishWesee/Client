import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWriteBottomButtonStyle";
import { useState } from "react";
import SlideButton from "../button/Btn_Boolean";

const InvitationWriteBottomButton = ({
  isSubmit,
  text,
  onClick,
  isAuth,
}: {
  isSubmit: boolean;
  text: string;
  isAuth: string | null;
  onClick: () => void;
}) => {
  const { invitation, setInvitation } = useInvitationStore();

  const [attendanceSurveyEnabled, setAttendanceSurveyEnabled] =
    useState<boolean>(invitation.attendanceSurveyEnabled);

  const handleSurvey = () => {
    setInvitation((invitation) => {
      invitation.attendanceSurveyEnabled = !attendanceSurveyEnabled;
    });
    setAttendanceSurveyEnabled(!attendanceSurveyEnabled);
  };

  return (
    <S.Container>
      <S.LabelContainer>
        {isAuth && (
          <>
            <S.Label>참석 여부 조사</S.Label>
            <SlideButton
              currentState={attendanceSurveyEnabled}
              handleState={handleSurvey}
            />
          </>
        )}
      </S.LabelContainer>
      <S.OkButton $isEnable={isSubmit} onClick={onClick} disabled={!isSubmit}>
        {text}
      </S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteBottomButton;
