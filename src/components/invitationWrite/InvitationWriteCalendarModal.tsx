import useInvitationStore from "@/store/invitation";
import { ValuePiece } from "@/types/invitationWrite/calendar";
import { formatDateToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import { useState } from "react";
import SlideButton from "../button/Btn_Boolean";
import CalendarComponent from "../common/Calendar";

interface InvitationWriteCalendarModalProps {
  startDate?: ValuePiece;
  handleCloseModal: () => void;
  isTimeShow: boolean;
  handleTimeShow: () => void;
}

const InvitationWriteCalendarModal: React.FC<
  InvitationWriteCalendarModalProps
> = ({ handleCloseModal, isTimeShow, handleTimeShow }) => {
  const [date, setDate] = useState<ValuePiece>();

  const { setInvitation } = useInvitationStore();

  const handleDateChange = (newDate: ValuePiece) => {
    setDate(newDate);
  };

  const handleSetDate = () => {
    if (date) {
      setInvitation((prevInvitation) => {
        prevInvitation.startDate = formatDateToCustomFormat(date);
      });
    }
    handleCloseModal();
  };

  return (
    <S.Container>
      <CalendarComponent />
      <S.TimeButtonContainer>
        시간 포함
        <SlideButton currentState={isTimeShow} handleState={handleTimeShow} />
      </S.TimeButtonContainer>
      <S.OkButton onClick={handleSetDate}>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteCalendarModal;
