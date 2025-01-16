import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import { useState } from "react";
import SlideButton from "../button/Btn_Boolean";
import Calendar from "../common/Calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const InvitationWriteCalendarModal = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [isContainTime, setIsContaineTime] = useState<boolean>(false);

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <S.Container>
      <Calendar date={date} handleDateChange={handleDateChange} />
      <S.TimeButtonContainer>
        시간 포함
        <SlideButton handleState={() => setIsContaineTime(!isContainTime)} />
      </S.TimeButtonContainer>
      <S.OkButton>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteCalendarModal;
