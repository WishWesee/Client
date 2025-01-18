import { ValuePiece } from "@/types/invitationWrite/calendar";
import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import SlideButton from "../button/Btn_Boolean";
import CalendarComponent from "../common/Calendar";

interface InvitationWriteCalendarModalProps {
  startDate?: ValuePiece;
  date: ValuePiece;
  setDate: React.Dispatch<React.SetStateAction<ValuePiece | undefined>>;
  handleCloseModal: () => void;
  isTimeShow: boolean;
  handleTimeShow: () => void;
}

const InvitationWriteCalendarModal: React.FC<
  InvitationWriteCalendarModalProps
> = ({ date, setDate, handleCloseModal, isTimeShow, handleTimeShow }) => {
  const handleDateChange = (newDate: ValuePiece) => {
    setDate(newDate);
  };

  return (
    <S.Container>
      <CalendarComponent date={date} handleDateChange={handleDateChange} />
      <S.TimeButtonContainer>
        시간 포함
        <SlideButton currentState={isTimeShow} handleState={handleTimeShow} />
      </S.TimeButtonContainer>
      <S.OkButton onClick={() => handleCloseModal()}>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteCalendarModal;
