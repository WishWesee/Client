import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWriteBottomButtonStyle";
import { useState } from "react";
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
        <S.Label>참석 여부 조사</S.Label>
        <SlideButton
          currentState={attendanceSurveyEnabled}
          handleState={handleSurvey}
        />
      </S.LabelContainer>
      <S.OkButton $isEnable={isSubmit} onClick={onClick}>
        {text}
      </S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteBottomButton;
