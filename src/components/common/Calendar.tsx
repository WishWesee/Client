import * as S from "@styles/common/calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  date: Value;
  handleDateChange: (newDate: Value) => void;
}

const Calendar: React.FC<CalendarProps> = ({ date, handleDateChange }) => {
  return (
    <div>
      <S.StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => date.getDate().toString()} // 날짜 포맷을 숫자로만 표시
        calendarType="gregory" // 일요일 부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        formatShortWeekday={(locale, date) => {
          const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
          return weekdays[date.getDay()];
        }}
      />
    </div>
  );
};

export default Calendar;
