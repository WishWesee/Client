import * as S from "@styles/invite/VoteBoxStyle";
import VoteDueIcon from "@assets/icons/화면GUI_Full/2424_Activate/VoteDue.svg?react";
import VoteIcon from "@assets/icons/화면GUI_Full/2424_Activate/Vote.svg?react";
import { TInvitationRes, TVoterRes } from "@/types/invite";
import RadioButton from "../button/Btn_Radio";
import { useEffect, useState } from "react";
import { getGuestSchedule } from "@/api/schedultVote/getGuestSchedule";
import { postSchedule } from "@/api/schedultVote/postSchedule";
import { putSchedule } from "@/api/schedultVote/putSchedule";
import { getVoters } from "@/api/schedultVote/getVoters";
import VotePersonModal from "./VotePersonModal";
import { formatVoteDateTime } from "@/utils/formatVoteDateTime";
import InputWrap from "./InputWrap";

interface Props {
  data: TInvitationRes;
  refetch: () => void;
  isLogin: boolean;
}

const VoteBox = ({ data, refetch, isLogin }: Props) => {
  const [selectedVotes, setSelectedVotes] = useState<number[]>([]);
  const [personName, setPersonName] = useState("");
  const [isCheckPersonName, setIsCheckPersonName] = useState(isLogin);
  const [isVoteComplete, setIsVoteComplete] = useState(data.scheduleVoteClosed); //투표 완료 여부
  const [modalVoteId, setModalVoteId] = useState<number | null>(null); //모달 ID
  const [modalData, setModalData] = useState<TVoterRes | null>(null); //모달 데이터
  const [isComplete, setIsComplete] = useState(false); //일정 확정 창 띄우기 여부

  useEffect(() => {
    if (isLogin) {
      setSelectedVotes(
        data.scheduleVotes
          .filter((data) => data.isVoted)
          .map((data) => data.scheduleVoteId)
      );
      if (!data.scheduleVoteClosed) {
        setIsVoteComplete(data.hasScheduleVote);
      }
    }
  }, [data, isLogin]);

  //날짜 선택 함수
  const handleVoteSelection = (voteId: number) => {
    if (!isCheckPersonName) return;

    if (data.owner && data.scheduleVoteClosed) {
      setSelectedVotes([voteId]);
    } else {
      if (data.scheduleVoteMultiple) {
        setSelectedVotes((prev) =>
          prev.includes(voteId)
            ? prev.filter((id) => id !== voteId)
            : [...prev, voteId]
        );
      } else {
        setSelectedVotes([voteId]);
      }
    }
  };

  //닉네임의 참석 조사 결과 조회
  const handleGuestSchedule = async () => {
    try {
      const response = await getGuestSchedule(data.invitationId, personName);

      if (response.check) {
        setIsCheckPersonName(true);
        setSelectedVotes(response.information.scheduleVoteIds);
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  //일정 저장 함수
  const handleVoteSchedule = async () => {
    try {
      await postSchedule(data.invitationId, personName, selectedVotes);

      refetch();

      setIsCheckPersonName(true);
      setIsVoteComplete(true);
    } catch (error) {
      console.error("오류", error);
      setIsCheckPersonName(false);
      setIsVoteComplete(false);
    }
  };

  //일정 확정 함수
  const handleVoteConfirm = async () => {
    try {
      await putSchedule(data.invitationId, selectedVotes[0]);

      refetch();
      //페이지 새로고침 (투표 필드 삭제)
    } catch (error) {
      console.error("오류", error);
    }
  };

  //투표자 목록 조회
  const handleVoter = async (voteId: number) => {
    try {
      const response = await getVoters(data.invitationId, voteId);

      if (response?.check) {
        setModalData(response.information);
        setModalVoteId(voteId);
      }
    } catch (error) {
      console.error("오류", error);
    }
  };

  return (
    <S.Container>
      <S.InfoWraps>
        <S.InfoWrap>
          <VoteDueIcon />
          <p>투표 마감일 {data.voteDeadline.replaceAll("-", ".")}</p>
        </S.InfoWrap>
        {data.scheduleVoteMultiple && (
          <S.InfoWrap>
            <VoteIcon />
            <p>복수 선택 가능</p>
          </S.InfoWrap>
        )}
      </S.InfoWraps>
      <hr />
      {!isLogin && !data.scheduleVoteClosed && (
        <>
          <InputWrap
            labelText="투표자"
            placeholder="이름을 입력하세요"
            value={personName}
            onChange={(e) => {
              setPersonName(e.target.value);
              setIsCheckPersonName(false);
            }}
            isReadOnly={isVoteComplete}
            isViewDeleteButton={isVoteComplete}
            isViewCheckButton={isCheckPersonName}
            handleDeleteClick={() => setPersonName("")}
            handleCheckClick={handleGuestSchedule}
          />
          <hr />
        </>
      )}
      <S.VoteOptions $disabled={!isCheckPersonName}>
        {data.scheduleVotes.map((vote) => {
          return (
            <S.VoteOptionsChoice
              key={vote.scheduleVoteId}
              $isVoteComplete={isVoteComplete}
            >
              {(!isVoteComplete ||
                (data.owner && data.scheduleVoteClosed && isComplete)) && (
                <RadioButton
                  isSelected={selectedVotes.includes(vote.scheduleVoteId)}
                  onClick={() => handleVoteSelection(vote.scheduleVoteId)}
                />
              )}
              <S.VoteOption
                $isSelected={
                  data.scheduleVoteClosed
                    ? data.scheduleVoteClosed
                    : selectedVotes.includes(vote.scheduleVoteId)
                }
                $isVoteComplete={isVoteComplete}
                $isOwner={data.owner}
                onClick={() => data.owner && handleVoter(vote.scheduleVoteId)}
              >
                <S.LeftText
                  $isSelected={
                    data.scheduleVoteClosed
                      ? data.scheduleVoteClosed
                      : selectedVotes.includes(vote.scheduleVoteId)
                  }
                  $isVoteComplete={isVoteComplete}
                >
                  {formatVoteDateTime(
                    vote.startDate,
                    vote.endDate,
                    vote.startTime,
                    vote.endTime
                  )}
                </S.LeftText>
                {isVoteComplete && (
                  <S.RightText
                    $isSelected={
                      data.scheduleVoteClosed
                        ? data.scheduleVoteClosed
                        : selectedVotes.includes(vote.scheduleVoteId)
                    }
                  >
                    {vote.voterCount}
                  </S.RightText>
                )}
              </S.VoteOption>
              {modalVoteId === vote.scheduleVoteId && modalData && (
                <VotePersonModal
                  leftText={formatVoteDateTime(
                    modalData.startDate,
                    modalData.endDate,
                    modalData.startTime,
                    modalData.endTime
                  )}
                  rightText={modalData.voterCount}
                  nameTexts={modalData.voterNames}
                  onClick={() => setModalVoteId(null)}
                />
              )}
            </S.VoteOptionsChoice>
          );
        })}
      </S.VoteOptions>
      {data.scheduleVoteClosed ? (
        data.owner &&
        (isComplete ? (
          <S.BlueBtn
            disabled={selectedVotes.length === 0}
            onClick={handleVoteConfirm}
          >
            일정 확정
          </S.BlueBtn>
        ) : (
          <S.GrayBtn onClick={() => setIsComplete(true)}>일정 선택</S.GrayBtn>
        ))
      ) : (
        <S.BlueBtn
          disabled={selectedVotes.length === 0}
          onClick={() =>
            isVoteComplete ? setIsVoteComplete(false) : handleVoteSchedule()
          }
        >
          {isVoteComplete ? "다시 투표하기" : "투표"}
        </S.BlueBtn>
      )}
    </S.Container>
  );
};

export default VoteBox;
