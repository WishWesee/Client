import useInvitationStore from "@/store/invitation";
import { TimeTable } from "@/types/invitation";
import { formatTimeToAM } from "@/utils/calendar/formatCustomDateFromDate";
import ArrowDown from "@assets/icons/화면GUI_Line/2020/Arrow_Down.svg?react";
import ArrowTop from "@assets/icons/화면GUI_Line/2020/Arrow_Top.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteTimeModal";
import { useState } from "react";

interface InvitationWriteTimeTableModalProps {
  handleCloseModal: () => void;
  index: number;
  item: TimeTable;
  currentSequence: number;
}

const InvitationWriteTimeTableModal: React.FC<
  InvitationWriteTimeTableModalProps
> = ({ handleCloseModal, index, item, currentSequence }) => {
  const { updateTimeTable } = useInvitationStore();

  const [hour, setHour] = useState<number>(
    item.time === "" ? 0 : formatTimeToAM(item.time)
  );
  const [minute, setMinute] = useState<number>(
    item.time === "" ? 0 : Number(item.time.split(":")[1])
  );
  const [isAM, setIsAM] = useState<boolean>(
    Number(item.time.split(":")[0]) < 12
  );

  const handleDateChange = () => {
    const newHour = isAM ? hour : hour + 12;
    const newMinute = minute < 10 ? "0" + minute : minute;
    const newStartTime = newHour + ":" + newMinute;

    updateTimeTable(currentSequence, index, newStartTime);

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

export default InvitationWriteTimeTableModal;
