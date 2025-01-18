import useInvitationStore from "@/store/invitation";
import { ValuePiece } from "@/types/invitationWrite/calendar";
import {
  formatDateToCustomFormat,
  formatTimeToCustomFormat,
} from "@/utils/calendar/formatCustomDateFromDate";
import ActiveCalendar from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import ActiveTime from "@assets/icons/화면GUI_Full/2424_Activate/Time.svg?react";
import Calendar from "@assets/icons/화면GUI_Full/2424_Default/Calendar.svg?react";
import Time from "@assets/icons/화면GUI_Full/2424_Default/Time.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteCalendar";
import { useState } from "react";
import InvitationWriteCalendarModal from "./InvitationWriteCalendarModal";
import InvitationWriteTimeModal from "./InvitationWriteTimeModal";

const InvitationWriteCalendar = () => {
  const [date, setDate] = useState<ValuePiece>();

  const [isTimeShow, setIsTimeShow] = useState<boolean>(false);
  const [activeStateModal, setActiveStateModal] = useState<
    "time" | "date" | null
  >(null);

  const { invitation, setInvitation } = useInvitationStore();

  const formatDate = date ? formatDateToCustomFormat(date) : "날짜 선택.";

  const formatTime =
    invitation.startTime === ""
      ? "시간 선택."
      : formatTimeToCustomFormat(invitation.startTime);

  const toggleTimeShow = () => {
    if (isTimeShow) {
      setInvitation((prevInvitation) => {
        prevInvitation.startTime = "";
      });
    }
    setIsTimeShow((prev) => !prev);
  };

  const toggleState = (state: "time" | "date") =>
    setActiveStateModal((prev) => (prev === state ? null : state));

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Label>일정</S.Label>
        <S.Text>일정 박스를 눌러 투표를 추가해보세요.</S.Text>
      </S.TitleContainer>
      <S.DateContainer>
        <S.SelectDateButton onClick={() => toggleState("date")}>
          {date === undefined ? (
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
          <S.SelectTimeButton onClick={() => toggleState("time")}>
            {formatTime === "시간 선택." ? (
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
      </S.DateContainer>
      {activeStateModal === "date" && (
        <InvitationWriteCalendarModal
          date={date!}
          setDate={setDate}
          handleCloseModal={() => toggleState("date")}
          isTimeShow={isTimeShow}
          handleTimeShow={toggleTimeShow}
        />
      )}
      {activeStateModal === "time" && (
        <InvitationWriteTimeModal
          handleCloseModal={() => toggleState("time")}
        />
      )}
    </S.Container>
  );
};

export default InvitationWriteCalendar;
