import BtnModalCaution from "@/components/button/Btn_Modal_Caution";
import useInvitationStore from "@/store/invitation";
import * as S from "@/styles/invitationWrite/calendar/voteModalStyle";
import { ValuePiece } from "@/types/invitationWrite/calendar";
import { formatDateToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import ActiveCalendar from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import Calendar from "@assets/icons/화면GUI_Full/2424_Default/Calendar.svg?react";
import { useState } from "react";
import InvitationWriteVoteCalendarModal from "./InvitationWriteVoteCalendarModal";

type Props = {
  onClose: () => void;
};

const VoteModal: React.FC<Props> = ({ onClose }) => {
  const { invitation, setInvitation } = useInvitationStore();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [date, setDate] = useState<ValuePiece>(null);

  const formatDate =
    invitation.voteDeadline === "" || !date
      ? "투표 마감일 선택"
      : formatDateToCustomFormat(date);

  const handleSetVoteDate = () => {
    setInvitation((prevInvitation) => {
      prevInvitation.voteDeadline = formatDateToCustomFormat(date!);
      return prevInvitation;
    });
    onClose();
  };

  console.log(invitation.voteDeadline);

  return (
    <S.Overlay>
      <S.Modal>
        <h4>투표 마감일을 추가해주세요!</h4>
        <S.SelectDateButton
          onClick={(e) => {
            e.stopPropagation();
            setIsShowModal(!isShowModal);
          }}
        >
          {formatDate === "투표 마감일 선택" ? (
            <>
              <Calendar />
              <S.ButtonText>{formatDate}</S.ButtonText>
            </>
          ) : (
            <>
              <ActiveCalendar />
              <S.ButtonText style={{ color: "var(--Black)" }}>
                {formatDate}
              </S.ButtonText>
            </>
          )}
        </S.SelectDateButton>
        <S.BtnWrap>
          <BtnModalCaution
            text={"취소"}
            color={"default"}
            onClick={() => {
              onClose();
            }}
          />
          <BtnModalCaution
            text={"확인"}
            color={"blue"}
            onClick={handleSetVoteDate}
          />
        </S.BtnWrap>

        {isShowModal && (
          <InvitationWriteVoteCalendarModal
            handleCloseModal={() => setIsShowModal(false)}
            date={date}
            setDate={(newDate) => setDate(newDate)}
          />
        )}
      </S.Modal>
    </S.Overlay>
  );
};

export default VoteModal;
