import { ValuePiece } from "@/types/invitationWrite/calendar";
import * as S from "@styles/invitationWrite/invitationWriteCalendarModal";
import VoteCalendarComponent from "./VoteCalendarComponent";

interface InvitationWriteVoteCalendarModalProps {
  startDate?: ValuePiece;
  date: ValuePiece;
  setDate: (newDate: ValuePiece) => void;
  handleCloseModal: () => void;
}

const InvitationWriteVoteCalendarModal: React.FC<
  InvitationWriteVoteCalendarModalProps
> = ({ handleCloseModal, date, setDate }) => {
  return (
    <S.Container style={{ top: "calc(100% - 92px)" }}>
      <VoteCalendarComponent date={date} setDate={setDate} />
      <S.OkButton onClick={handleCloseModal}>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteVoteCalendarModal;
