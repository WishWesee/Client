import useInvitationStore from "@/store/invitation";
import { Value, ValuePiece } from "@/types/invitationWrite/calendar";
import { formatDateToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import { useState } from "react";
import SlideButton from "../../button/Btn_Boolean";
import CalendarComponent from "../../common/Calendar";

interface InvitationWriteVoteCalendarModalProps {
  startDate?: ValuePiece;
  handleCloseModal: () => void;
  isTimeShow: boolean;
  handleTimeShow: () => void;
  index: number;
}

const InvitationWriteVoteCalendarModal: React.FC<
  InvitationWriteVoteCalendarModalProps
> = ({ handleCloseModal, isTimeShow, handleTimeShow, index }) => {
  const [date, setDate] = useState<Value>(null);

  const { setInvitation } = useInvitationStore();

  const handleSetDate = () => {
    if (date) {
      if (Array.isArray(date)) {
        // date가 배열인 경우
        setInvitation((prevInvitation) => {
          prevInvitation.scheduleVotes[index].startDate =
            formatDateToCustomFormat(date[0]!);
          prevInvitation.scheduleVotes[index].endDate =
            formatDateToCustomFormat(date[1]!);
          return prevInvitation;
        });
      } else {
        // date가 단일 값인 경우
        setInvitation((prevInvitation) => {
          prevInvitation.scheduleVotes[index].startDate =
            formatDateToCustomFormat(date);
          prevInvitation.scheduleVotes[index].endDate = "";
          return prevInvitation;
        });
      }
    }
    handleCloseModal();
  };

  return (
    <S.Container>
      <CalendarComponent date={date} setDate={setDate} />
      <S.TimeButtonContainer>
        시간 포함
        <SlideButton currentState={isTimeShow} handleState={handleTimeShow} />
      </S.TimeButtonContainer>
      <S.OkButton onClick={handleSetDate}>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteVoteCalendarModal;
