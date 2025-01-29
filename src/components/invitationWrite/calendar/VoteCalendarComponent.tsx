import { Value, ValuePiece } from "@/types/invitationWrite/calendar";
import * as S from "@styles/common/calendar";

interface VoteCalendarComponentProps {
  date: ValuePiece;
  setDate: (newDate: ValuePiece) => void;
}

const VoteCalendarComponent: React.FC<VoteCalendarComponentProps> = ({
  date,
  setDate,
}) => {
  const handleOnChange = (newDate: Value | null) => {
    if (!newDate) return;

    if (Array.isArray(newDate)) {
      setDate(newDate[0]);
    } else {
      setDate(newDate);
    }
  };

  const isRangeSelected = Array.isArray(date);

  // 오늘 이전 날짜와 2주 이후 날짜 비활성화
  const disableTile = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 시간 초기화

    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14); // 2주 후 날짜 계산

    return date < today || date > twoWeeksLater; // 과거 & 2주 이후 날짜 비활성화
  };

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
        tileDisabled={disableTile} // 🚀 비활성화 적용
      />
    </div>
  );
};

export default VoteCalendarComponent;
