import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import { useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const InvitationWriteCalendarModal = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };
  return (
    <S.Container>
      <S.StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => date.getDate().toString()} // 날짜 포맷을 숫자로만 표시
        calendarType="gregory" // 일요일 부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        minDetail="year" // 10년단위 년도 숨기기
      />
    </S.Container>
  );
};

export default InvitationWriteCalendarModal;
