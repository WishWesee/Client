import * as S from "@styles/invite/VoteBoxStyle";
import VoteDueIcon from "@assets/icons/화면GUI_Full/2424_Activate/VoteDue.svg?react";
import VoteIcon from "@assets/icons/화면GUI_Full/2424_Activate/Vote.svg?react";
import { TInvitationReq } from "@/types/invite";
import RadioButton from "../button/Btn_Radio";
import { formatVoteDateTime } from "@/utils/formatVoteDateTime";

interface Props {
  deadline: string;
  isMultiple: boolean;
  data: TInvitationReq["invitation"]["scheduleVotes"];
}

const CheckVoteBox = ({ deadline, isMultiple, data }: Props) => {
  return (
    <S.Container>
      <S.InfoWraps>
        <S.InfoWrap>
          <VoteDueIcon />
          <p>투표 마감일 {deadline.replaceAll("-", ".")}</p>
        </S.InfoWrap>
        {isMultiple && (
          <S.InfoWrap>
            <VoteIcon />
            <p>복수 선택 가능</p>
          </S.InfoWrap>
        )}
      </S.InfoWraps>
      <hr />
      <S.VoteOptions $disabled={false} style={{ pointerEvents: "none" }}>
        {data.map((vote, index) => {
          return (
            <S.VoteOptionsChoice key={index} $isVoteComplete={false}>
              <RadioButton isSelected={false} onClick={() => {}} />
              <S.VoteOption
                $isSelected={false}
                $isVoteComplete={false}
                $isOwner={false}
                onClick={() => {}}
              >
                <S.LeftText $isSelected={false} $isVoteComplete={false}>
                  {formatVoteDateTime(
                    vote.startDate,
                    vote.endDate,
                    vote.startTime,
                    vote.endTime
                  )}
                </S.LeftText>
              </S.VoteOption>
            </S.VoteOptionsChoice>
          );
        })}
      </S.VoteOptions>
      <S.BlueBtn disabled={true}>투표</S.BlueBtn>
    </S.Container>
  );
};

export default CheckVoteBox;
