import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";
import InputWrap from "./InputWrap";
import { useEffect, useState } from "react";
import HappyIcon from "@assets/icons/화면GUI_Line/2020/Happy.svg?react";
import SadIcon from "@assets/icons/화면GUI_Line/2020/Sad.svg?react";
import SlideButton from "../button/Btn_Boolean";
import { getGuestAttendance } from "@/api/attendanceVote/getGuestAttendance";
import { useAttendanceQuery } from "@/api/attendanceVote/getAttendance";
import { postAttendance } from "@/api/attendanceVote/postAttendance";
import { putAttendance } from "@/api/attendanceVote/putAttendance";

const ComingWrap = ({ id }: { id: number }) => {
  const isLogin = true; //로그인되어있는 경우

  const { data, refetch } = useAttendanceQuery(id);

  const [personName, setPersonName] = useState("");
  const [isCheckPersonName, setIsCheckPersonName] = useState(isLogin);
  const [isAttending, setIsAttending] = useState<boolean | null>(null); //투표자의 참석 여부
  const [attendanceClosed, setAttendanceClosed] = useState(
    data.information.attendanceSurveyClosed
  ); //참석 조사 마감 여부

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
    <Container>
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
      <BtnWrap>
        <AttendanceButton
          icon={HappyIcon}
          text="참석 가능해요!"
          count={data.information.attendingCount}
          isEnd={attendanceClosed}
          isActive={isAttending === true}
          onClick={() => handleAttendance(true)}
          disabled={!isCheckPersonName || attendanceClosed}
        />
        <AttendanceButton
          icon={SadIcon}
          text="다음에 함께..."
          count={data.information.notAttendingCount}
          isEnd={attendanceClosed}
          isActive={isAttending === false}
          onClick={() => handleAttendance(false)}
          disabled={!isCheckPersonName || attendanceClosed}
        />
      </BtnWrap>
      {data.information.isSender && (
        <DeadlineWrap>
          <h3>참석 여부 마감</h3>
          <SlideButton
            handleState={handleAttendanceClose}
            currentState={attendanceClosed}
          />
        </DeadlineWrap>
      )}
    </Container>
  );
};

export default ComingWrap;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--White);

  ${isTablet} {
    padding-top: 30px;
    padding-bottom: 120px;
  }

  ${isDesktop} {
    padding-top: 40px;
    padding-bottom: 160px;
  }

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
    padding: 12px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;

  > button {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
    width: 168px;

    &:disabled {
      cursor: default;
    }

    > p {
      font: var(--Unselected-Field-rNBLeft);
    }
  }
`;

export const DeadlineWrap = styled.div`
  border-top: 2px solid var(--Grey5);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  > h3 {
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
  }
`;
