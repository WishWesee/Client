import useInvitationStore from "@/store/invitation";
import { formatTimeToAM } from "@/utils/calendar/formatCustomDateFromDate";
import ArrowDown from "@assets/icons/화면GUI_Line/2020/Arrow_Down.svg?react";
import ArrowTop from "@assets/icons/화면GUI_Line/2020/Arrow_Top.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteTimeModal";
import { useState } from "react";

interface InvitationWriteVoteTimeModalProps {
  isStartTime: boolean;
  handleCloseModal: () => void;
  index: number;
}

const InvitationWriteVoteTimeModal: React.FC<
  InvitationWriteVoteTimeModalProps
> = ({ isStartTime, handleCloseModal, index }) => {
  const { invitation, setInvitation } = useInvitationStore();

  const time = isStartTime
    ? invitation.scheduleVotes[index].startTime
    : invitation.scheduleVotes[index].endTime;

  const [hour, setHour] = useState<number>(
    time === "" ? 0 : formatTimeToAM(time)
  );
  const [minute, setMinute] = useState<number>(
    time === "" ? 0 : Number(time.split(":")[1])
  );
  const [isAM, setIsAM] = useState<boolean>(Number(time.split(":")[0]) < 12);

  const handleDateChange = () => {
    const newHour = isAM ? hour : hour + 12;
    const newMinute = minute < 10 ? "0" + minute : minute;
    const newStartTime = newHour + ":" + newMinute;
    setInvitation((prevInvitation) => {
      isStartTime
        ? (prevInvitation.scheduleVotes[index].startTime = newStartTime)
        : (prevInvitation.scheduleVotes[index].endTime = newStartTime);
    });
    handleCloseModal();
  };

  const handleTimeChange = (
    type: "hour" | "minute" | "amPm",
    state?: "up" | "down"
  ) => {
    if (type === "hour") {
      if (state === "up" && hour < 12) setHour(hour + 1);
      if (state === "down" && hour > 0) setHour(hour - 1);
    } else if (type === "minute") {
      if (state === "up" && minute < 50) setMinute(minute + 10);
      if (state === "down" && minute > 0) setMinute(minute - 10);
    } else if (type === "amPm") {
      setIsAM(!isAM);
    }
  };

  return (
    <S.Container>
      <S.TimeContainer>
        <S.Time>
          <ArrowTop onClick={() => handleTimeChange("hour", "up")} />
          {hour}
          <ArrowDown onClick={() => handleTimeChange("hour", "down")} />
        </S.Time>
        :
        <S.Time>
          <ArrowTop onClick={() => handleTimeChange("minute", "up")} />
          {minute < 10 ? "0" + minute : minute}
          <ArrowDown onClick={() => handleTimeChange("minute", "down")} />
        </S.Time>
        <div />
        <S.Time>
          <ArrowTop onClick={() => handleTimeChange("amPm")} />
          {isAM ? "AM" : "PM"}
          <ArrowDown onClick={() => handleTimeChange("amPm")} />
        </S.Time>
      </S.TimeContainer>
      <S.OkButton onClick={() => handleDateChange()}>완료</S.OkButton>
    </S.Container>
  );
};

export default InvitationWriteVoteTimeModal;
