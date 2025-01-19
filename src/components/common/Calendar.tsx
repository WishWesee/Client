import { Value } from "@/types/invitationWrite/calendar";
import * as S from "@styles/common/calendar";
import { useState } from "react";

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Value>(null);

  const handleOnChange = (newDate: Value) => {
    if (!Array.isArray(newDate)) {
      // 단일 날짜 선택
      if (!date || Array.isArray(date)) {
        // 첫 번째 날짜 클릭
        setDate(newDate);
      } else {
        // 두 번째 날짜 클릭 시 범위로 설정
        if (newDate! < date) {
          // 두 번째 날짜가 첫 번째 날짜보다 이전일 경우 선택 방지
          alert("두 번째 날짜는 첫 번째 날짜 이후여야 합니다.");
          return;
        }
        setDate([date, newDate]);
      }
    }
  };

  const isRangeSelected = Array.isArray(date);

  return (
    <div>
      <S.StyledCalendar
        value={date}
        onChange={handleOnChange}
        formatDay={(locale, date) => date.getDate().toString()} // 날짜 포맷을 숫자로만 표시
        calendarType="gregory" // 일요일부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        minDetail="year" // 10년 단위 년도 숨기기
        formatShortWeekday={(locale, date) => {
          const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
          return weekdays[date.getDay()];
        }}
        isRangeSelected={isRangeSelected} // 단일/범위 선택 상태 전달
      />
    </div>
  );
};

export default CalendarComponent;
