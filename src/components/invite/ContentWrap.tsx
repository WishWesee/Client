import * as S from "@styles/invite/ContentWrapStyle";
import { TInvitationRes } from "@/types/invite";
import VoteBox from "./VoteBox";
import PageFoldBtn from "./PageFoldBtn";
import { formatVoteDateTime } from "@/utils/formatVoteDateTime";
import ArrowBackIcon from "@assets/icons/화면GUI_Line/2020/Arrow_Back.svg?react";
import ArrowLeftIcon from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import CalendarIcon from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import LocationIcon from "@assets/icons/화면GUI_Full/2424_Activate/Location.svg?react";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShareWrap from "./ShareWrap";
import ContentTextBox from "./ContentTextBox";
import ContentTimeTable from "./ContentTimeTable";

interface Props {
  invitationState: number;
  data: TInvitationRes;
  refetch: () => void;
  isLogin: boolean;
}

const ContentWrap = ({ invitationState, data, refetch, isLogin }: Props) => {
  const { isMobile, isTablet, isDesktop } = useWMediaQuery();
  const navigate = useNavigate();

  const [isFold, setIsFold] = useState(false); //글이 접힌 상태인지 여부

  return (
    <S.CardWrap>
      <S.HeaderWrap>
        <S.StatusWrap
          onClick={() =>
            invitationState === 1
              ? navigate("/invites/sent")
              : navigate("/invites/received")
          }
        >
          {invitationState !== 0 &&
            (isTablet ? <ArrowBackIcon /> : isDesktop && <ArrowLeftIcon />)}
          <span>
            {invitationState === 1
              ? "내가 보낸 초대장"
              : invitationState === 2
              ? "내가 받은 초대장"
              : "초대장이 도착했어요!"}
          </span>
        </S.StatusWrap>
        <h1>{data.title}</h1>
      </S.HeaderWrap>
      <S.NotFoldWrap $isFold={isFold}>
        {!isMobile && <img src={data.cardImage} alt="카드 이미지" />}
        <div>
          <S.SectionHeader>
            <CalendarIcon />
            <h4>일정</h4>
          </S.SectionHeader>
          {data.startDate && (
            <p>
              {formatVoteDateTime(
                data.startDate,
                data.endDate,
                data.startTime,
                data.endTime
              )}
            </p>
          )}
          {data.scheduleVotes.length > 0 && (
            <VoteBox data={data} refetch={refetch} isLogin={isLogin} />
          )}
          <S.SectionHeader style={{ marginTop: 40 }}>
            <LocationIcon />
            <h4>{data.location}</h4>
          </S.SectionHeader>
          <a onClick={() => window.open(`${data.mapLink}`)}>{data.address}</a>
        </div>
      </S.NotFoldWrap>
      {!isFold && (
        <S.FoldWrap>
          {data.blocks.map((block) => {
            return (
              <S.FlodItem key={block.sequence}>
                {block.type === "divider" && <hr />}
                {block.type === "box" && (
                  <ContentTextBox
                    boxType={0}
                    title={block.title}
                    content={block.content}
                  />
                )}
                {block.type === "photo" && (
                  <img src={block.image} alt="첨부한 이미지" />
                )}
                {block.type === "text" && (
                  <div
                    style={{
                      font: `var(${block.font})`,
                      color: block.color,
                      fontWeight: block.styles === "bold" ? 600 : "normal",
                      transform:
                        block.styles === "italic" ? "skewX(-10deg)" : "none",
                      textDecoration:
                        block.styles === "strikethru"
                          ? "line-through"
                          : block.styles === "underline"
                          ? "underline"
                          : "none",
                    }}
                  >
                    {block.content}
                  </div>
                )}
                {block.type === "timeTable" && (
                  <ContentTimeTable content={block.content} />
                )}
              </S.FlodItem>
            );
          })}
        </S.FoldWrap>
      )}
      <PageFoldBtn isFold={isFold} setIsFold={setIsFold} />
      {!isMobile && (
        <ShareWrap
          id={data.invitationId}
          title={data.title}
          cardImage={data.cardImage}
          isAlreadySave={data.alreadySaved}
          isLogin={isLogin}
          isShareLink={invitationState === 0}
          refetch={refetch}
        />
      )}
    </S.CardWrap>
  );
};

export default ContentWrap;
