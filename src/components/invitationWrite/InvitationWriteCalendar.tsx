import { DateToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { formatTimeToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import ActiveCalendar from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import ActiveTime from "@assets/icons/화면GUI_Full/2424_Activate/Time.svg?react";
import Calendar from "@assets/icons/화면GUI_Full/2424_Default/Calendar.svg?react";
import Time from "@assets/icons/화면GUI_Full/2424_Default/Time.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteCalendar";
import { useEffect, useState } from "react";
import AuthModal from "../modal/AuthModal";
import InvitationWriteCalendarModal from "./calendar/InvitationWriteCalendarModal";
import VoteModal from "./calendar/VoteModal";
import InvitationWriteTimeModal from "./InvitationWriteTimeModal";

export type activeState = "startTime" | "endTime" | "date" | null;

const InvitationWriteCalendar = () => {
  const [isTimeShow, setIsTimeShow] = useState<boolean>(false);
  const [activeStateModal, setActiveStateModal] = useState<activeState>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowAuthModal, setIsShowAuthModal] = useState<boolean>(false);

  const { invitation, setInvitation } = useInvitationStore();
  const { selectedTool, setToolBarContent } = useToolBarContext();

  const getAuthTokenFromCookie = () => {
    return (
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("Authorization="))
        ?.split("=")[1] || null
    );
  };

  const isAuth = getAuthTokenFromCookie();

  useEffect(() => {
    console.log(selectedTool);
    if (selectedTool?.type === "Vote") {
      if (isAuth) {
        setIsShowModal(true);
      } else {
        setIsShowAuthModal(true);
      }
    }
  }, [selectedTool]);

  const formatDate =
    invitation.startDate === "" ? "날짜 선택" : invitation.startDate;

  const formatTime =
    invitation.startTime === ""
      ? "시간 선택"
      : formatTimeToCustomFormat(invitation.startTime);

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
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        setToolBarContent(DateToolBarList);
      }}
    >
      <S.TitleContainer>
        <S.Label>일정</S.Label>
        <S.Text>일정 박스를 눌러 투표를 추가해보세요.</S.Text>
      </S.TitleContainer>

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
                    {formatDate.replaceAll("-", ".")}
                  </S.ButtonText>
                </>
              )}
            </S.SelectDateButton>

            {isTimeShow && (
              <S.SelectTimeButton
                disabled={invitation.startDate === ""}
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

          {invitation.endDate !== "" && (
            <S.ButtonContainer>
              <S.SelectDateButton onClick={() => toggleState("date")}>
                <ActiveCalendar />
                <S.ButtonText style={{ color: "var(--Black)" }}>
                  {invitation.endDate}
                </S.ButtonText>
              </S.SelectDateButton>
              {isTimeShow && (
                <S.SelectTimeButton onClick={() => toggleState("endTime")}>
                  {invitation.endTime === "" ? (
                    <>
                      <Time />
                      <S.ButtonText>시간 선택</S.ButtonText>
                    </>
                  ) : (
                    <>
                      <ActiveTime />
                      <S.ButtonText style={{ color: "var(--Black)" }}>
                        {formatTimeToCustomFormat(invitation.endTime)}
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
          <InvitationWriteCalendarModal
            handleCloseModal={() => toggleState("date")}
            isTimeShow={isTimeShow}
            handleTimeShow={toggleTimeShow}
          />
        )}
        {activeStateModal === "startTime" && (
          <InvitationWriteTimeModal
            isStartTime={true}
            handleCloseModal={() => toggleState("startTime")}
          />
        )}
        {activeStateModal === "endTime" && (
          <InvitationWriteTimeModal
            isStartTime={false}
            handleCloseModal={() => toggleState("endTime")}
          />
        )}

        {isShowModal && <VoteModal onClose={() => setIsShowModal(false)} />}
        {isShowAuthModal && (
          <AuthModal
            exitModal={() => setIsShowAuthModal(false)}
            text={"로그인 후 투표 기능을 이용할 수 있어요"}
          />
        )}
      </S.DateContainer>
    </S.Container>
  );
};

export default InvitationWriteCalendar;
