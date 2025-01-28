//날짜, 시간 포맷팅 함수 (yyyy.mm.dd hh:mm AM/PM ~ yyyy.mm.dd hh:mm AM/PM)
export const formatVoteDateTime = (
  voteStartDate: string,
  voteEndDate: string,
  voteStartTime: string,
  voteEndTime: string
) => {
  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(0, 0, 0, hours, minutes).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const startDate = (voteStartDate || "").replaceAll("-", ".");
  const endDate = (voteEndDate || "").replaceAll("-", ".");
  const startTime = formatTime(voteStartTime);
  const endTime = formatTime(voteEndTime);

  if (!startTime && !endTime && startDate === endDate) {
    return startDate;
  }

  return `${startDate} ${startTime} ~ ${endDate} ${endTime}`;
};
