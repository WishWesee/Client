import Calendar from "@assets/icons/화면GUI_Full/2424_Default/Calendar.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteCalendar";
import { useState } from "react";
import InvitationWriteCalendarModal from "./InvitationWriteCalendarModal";

const InvitationWriteCalendar = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Label>일정</S.Label>
        <S.Text>일정 박스를 눌러 투표를 추가해보세요.</S.Text>
      </S.TitleContainer>
      <S.SelectDateButton onClick={() => setIsShowModal(!isShowModal)}>
        <Calendar />
        <S.ButtonText>날짜 선택</S.ButtonText>
      </S.SelectDateButton>
      {isShowModal && <InvitationWriteCalendarModal />}
    </S.Container>
  );
};

export default InvitationWriteCalendar;
