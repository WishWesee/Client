import * as S from "@styles/invite/ComingWrapStyle";
import InputWrap from "./InputWrap";
import { useEffect, useState } from "react";
import HappyIcon from "@assets/icons/화면GUI_Line/2020/Happy.svg?react";
import SadIcon from "@assets/icons/화면GUI_Line/2020/Sad.svg?react";
import SlideButton from "../button/Btn_Boolean";
import { getGuestAttendance } from "@/api/attendanceVote/getGuestAttendance";
import { useAttendanceQuery } from "@/api/attendanceVote/getAttendance";
import { postAttendance } from "@/api/attendanceVote/postAttendance";
import { putAttendance } from "@/api/attendanceVote/putAttendance";
import { TAttendanceVotersRes } from "@/types/invite";
import VotePersonModal from "./VotePersonModal";
import { getAttendanceVoters } from "@/api/attendanceVote/getAttendanceVoters";

type Props = {
  id: number;
  isLogin: boolean;
  isReview: boolean;
};

const ComingWrap = ({ id, isLogin, isReview }: Props) => {
  const { data, refetch } = useAttendanceQuery(id);

  const [personName, setPersonName] = useState("");
  const [isCheckPersonName, setIsCheckPersonName] = useState(isLogin);
  const [isAttending, setIsAttending] = useState<boolean | null>(null); //투표자의 참석 여부
  const [attendanceClosed, setAttendanceClosed] = useState(
    data.information.attendanceSurveyClosed
  ); //참석 조사 마감 여부
  const [modalVote, setModalVote] = useState<boolean | null>(null); //선택한 모달
  const [modalData, setModalData] = useState<TAttendanceVotersRes | null>(null); //모달 데이터

  useEffect(() => {
    if (isLogin) {
      setIsAttending(data.information.isAttending);
    }
  }, [data, isLogin]);

  //닉네임의 참석 조사 결과 조회
  const handleGuestAttendance = async () => {
    try {
      const response = await getGuestAttendance(id, personName);

      if (response.check) {
        setIsCheckPersonName(true);
        setIsAttending(response.information.isAttending);
      }
    } catch (error) {
      console.error("에러", error);
    }
  };

  const handleAttendance = async (isBool: boolean) => {
    try {
      await postAttendance(id, personName, isBool);

      refetch();
      setIsAttending(isBool);
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const handleAttendanceClose = async () => {
    try {
      const response = await putAttendance(id);

      if (response.check) {
        setAttendanceClosed(response.information.attendanceSurveyClosed);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //투표자 목록 조회
  const handleVoter = async (isBool: boolean) => {
    try {
      if (isBool === null) return;

      const response = await getAttendanceVoters(id, isBool);

      if (response?.check) {
        setModalVote(isBool);
        setModalData(response.information);
      }
    } catch (error) {
      console.error("오류", error);
    }
  };

  const AttendanceButton = ({
    icon: Icon,
    text,
    count,
    isEnd,
    isActive,
    onClick,
    disabled,
  }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
    count: number;
    isEnd: boolean;
    isActive: boolean;
    onClick: () => void;
    disabled: boolean;
  }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          borderColor: isEnd
            ? "var(--Black)"
            : isActive
            ? "var(--Primary)"
            : "var(--Gray10)",
          backgroundColor: isEnd
            ? "var(--Black)"
            : isActive
            ? "var(--Primary)"
            : "var(--White)",
        }}
      >
        <Icon
          color={
            isEnd
              ? "var(--Gray40)"
              : isActive
              ? "var(--White)"
              : "var(--Gray40)"
          }
        />
        <p
          style={{
            color: isEnd
              ? "var(--Gray40)"
              : isActive
              ? "var(--White)"
              : "var(--Gray40)",
          }}
        >
          {text}
        </p>
        <p
          style={{
            color: isEnd
              ? "var(--Gray40)"
              : isActive
              ? "var(--White)"
              : "var(--Gray40)",
          }}
        >
          {count}
        </p>
      </button>
    );
  };

  return (
    <S.Container $isReview={isReview}>
      <h3>함께할 수 있는지 알려주세요!</h3>
      {!isLogin && !attendanceClosed && (
        <div style={{ width: 348 }}>
          <InputWrap
            labelText="투표자"
            placeholder="이름을 입력하세요"
            value={personName}
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
            isReadOnly={isCheckPersonName}
            isViewDeleteButton={!isCheckPersonName}
            isViewCheckButton={isCheckPersonName}
            handleDeleteClick={() => setPersonName("")}
            handleCheckClick={handleGuestAttendance}
          />
        </div>
      )}
      <S.BtnWrap>
        <AttendanceButton
          icon={HappyIcon}
          text="참석 가능해요!"
          count={data.information.attendingCount}
          isEnd={attendanceClosed}
          isActive={isAttending === true}
          onClick={() =>
            attendanceClosed ? handleVoter(true) : handleAttendance(true)
          }
          disabled={
            !isCheckPersonName ||
            (attendanceClosed && !data.information.isSender)
          }
        />
        <AttendanceButton
          icon={SadIcon}
          text="다음에 함께..."
          count={data.information.notAttendingCount}
          isEnd={attendanceClosed}
          isActive={isAttending === false}
          onClick={() =>
            attendanceClosed ? handleVoter(false) : handleAttendance(false)
          }
          disabled={
            !isCheckPersonName ||
            (attendanceClosed && !data.information.isSender)
          }
        />
        {modalVote !== null && modalData && (
          <VotePersonModal
            icon={modalVote ? HappyIcon : SadIcon}
            leftText={modalVote ? "참석 가능해요!" : "다음에 함께..."}
            rightText={modalData.voterCount}
            nameTexts={modalData.voterNames}
            onClick={() => setModalVote(null)}
          />
        )}
      </S.BtnWrap>
      {data.information.isSender && (
        <S.DeadlineWrap>
          <h3>참석 여부 마감</h3>
          <SlideButton
            handleState={handleAttendanceClose}
            currentState={attendanceClosed}
          />
        </S.DeadlineWrap>
      )}
    </S.Container>
  );
};

export default ComingWrap;
