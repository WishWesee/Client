import useInvitationStore from "@/store/invitation";
import { formatTimeToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import ActiveCalendar from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import ActiveTime from "@assets/icons/화면GUI_Full/2424_Activate/Time.svg?react";
import Calendar from "@assets/icons/화면GUI_Full/2424_Default/Calendar.svg?react";
import Time from "@assets/icons/화면GUI_Full/2424_Default/Time.svg?react";
import * as S from "@styles/invitationWrite/calendar/invitationWriteVoteComponentStyle";
import { useState } from "react";
import { activeState } from "../InvitationWriteCalendar";
import InvitationWriteVoteCalendarModal from "./InvitationWriteVoteCalendarModal";
import InvitationWriteVoteTimeModal from "./InvitationWriteVoteTimeModal";

interface InvitationWriteVoteItemProps {
  index: number;
}

const InvitationWriteVoteItem: React.FC<InvitationWriteVoteItemProps> = ({
  index,
}) => {
  const [isTimeShow, setIsTimeShow] = useState<boolean>(false);
  const [activeStateModal, setActiveStateModal] = useState<activeState>(null);
  // const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { invitation, setInvitation } = useInvitationStore();

  const formatDate =
    invitation.scheduleVotes[index].startDate === ""
      ? "날짜 선택"
      : invitation.scheduleVotes[index].startDate;

  const formatTime =
    invitation.scheduleVotes[index].startTime === ""
      ? "시간 선택"
      : formatTimeToCustomFormat(invitation.scheduleVotes[index].startTime);

  const toggleTimeShow = () => {
    if (isTimeShow) {
      setInvitation((prevInvitation) => {
        prevInvitation.startTime = "";
      });
    }
    setIsTimeShow((prev) => !prev);
  };

  const toggleState = (state: activeState) =>
    setActiveStateModal((prev) => (prev === state ? null : state));

  return (
    <S.DateContainer>
      <S.ComponentContainer>
        <S.ButtonContainer>
          <S.SelectDateButton onClick={() => toggleState("date")}>
            {formatDate === "날짜 선택" ? (
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

          {isTimeShow && (
            <S.SelectTimeButton
              disabled={invitation.scheduleVotes[index].startDate === ""}
              onClick={() => toggleState("startTime")}
            >
              {formatTime === "시간 선택" ? (
                <>
                  <Time />
                  <S.ButtonText>{formatTime}</S.ButtonText>
                </>
              ) : (
                <>
                  <ActiveTime />
                  <S.ButtonText style={{ color: "var(--Black)" }}>
                    {formatTime}
                  </S.ButtonText>
                </>
              )}
            </S.SelectTimeButton>
          )}
        </S.ButtonContainer>

        {invitation.scheduleVotes[index].endDate !== "" && (
          <S.ButtonContainer>
            <S.SelectDateButton onClick={() => toggleState("date")}>
              <ActiveCalendar />
              <S.ButtonText style={{ color: "var(--Black)" }}>
                {invitation.scheduleVotes[index].endDate}
              </S.ButtonText>
            </S.SelectDateButton>
            {isTimeShow && (
              <S.SelectTimeButton onClick={() => toggleState("endTime")}>
                {invitation.scheduleVotes[index].endTime === "" ? (
                  <>
                    <Time />
                    <S.ButtonText>시간 선택</S.ButtonText>
                  </>
                ) : (
                  <>
                    <ActiveTime />
                    <S.ButtonText style={{ color: "var(--Black)" }}>
                      {formatTimeToCustomFormat(
                        invitation.scheduleVotes[index].endTime
                      )}
                    </S.ButtonText>
                  </>
                )}
              </S.SelectTimeButton>
            )}
          </S.ButtonContainer>
        )}
      </S.ComponentContainer>

      {/* Modal */}

      {activeStateModal === "date" && (
        <InvitationWriteVoteCalendarModal
          handleCloseModal={() => toggleState("date")}
          isTimeShow={isTimeShow}
          handleTimeShow={toggleTimeShow}
          index={index}
        />
      )}
      {activeStateModal === "startTime" && (
        <InvitationWriteVoteTimeModal
          isStartTime={true}
          handleCloseModal={() => toggleState("startTime")}
          index={index}
        />
      )}
      {activeStateModal === "endTime" && (
        <InvitationWriteVoteTimeModal
          isStartTime={false}
          handleCloseModal={() => toggleState("endTime")}
          index={index}
        />
      )}
    </S.DateContainer>
  );
};

export default InvitationWriteVoteItem;
