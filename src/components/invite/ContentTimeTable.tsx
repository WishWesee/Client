import { TimeTableWrap, TimeTableItem } from "@/styles/invite/ContentBodyStyle";
import { TimeTableType } from "@/types/invite";
import { formatTime } from "@/utils/formatVoteDateTime";

type Props = {
  content: TimeTableType["content"];
};

const ContentTimeTable = ({ content }: Props) => {
  return (
    <TimeTableWrap>
      <h4>타임테이블</h4>
      {content.map((data) => {
        return (
          <TimeTableItem>
            <div className="time">{formatTime(data.time)}</div>
            <div className="content">{data.content}</div>
          </TimeTableItem>
        );
      })}
    </TimeTableWrap>
  );
};

export default ContentTimeTable;
