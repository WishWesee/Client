import * as S from "@styles/common/calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  date: ValuePiece;
  handleDateChange: (value: ValuePiece) => void;
}

const CalendarComponent: React.FC<CalendarProps> = ({
  date,
  handleDateChange,
}) => {
  const handleOnChange = (value: Value) => {
    // 단일 날짜 혹은 범위를 처리
    if (Array.isArray(value)) {
      handleDateChange(value[0]); // 범위의 시작 날짜로 설정
    } else {
      handleDateChange(value); // 단일 날짜
    }
  };

  return (
    <div>
      <S.StyledCalendar
        value={date}
        onChange={handleOnChange}
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

export default CalendarComponent;
