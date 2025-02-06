import useWMediaQuery from "@/hooks/useWMediaQuery";
import { TInvitationReq } from "@/types/invite";
import { formatVoteDateTime } from "@/utils/formatVoteDateTime";
import CalendarIcon from "@assets/icons/화면GUI_Full/2424_Activate/Calendar.svg?react";
import LocationIcon from "@assets/icons/화면GUI_Full/2424_Activate/Location.svg?react";
import * as S from "@styles/invite/ContentWrapStyle";
import { useState } from "react";
import LocationMapComponent from "../invitationWrite/location/LocationMapComponent";
import CheckVoteBox from "./CheckVoteBox";
import ContentTextBox from "./ContentTextBox";
import ContentTimeTable from "./ContentTimeTable";
import PageFoldBtn from "./PageFoldBtn";

interface Props {
  data: TInvitationReq;
}

const CheckContentWrap = ({ data }: Props) => {
  const { isMobile, isTablet, isDesktop } = useWMediaQuery();

  const [isFold, setIsFold] = useState(false); //글이 접힌 상태인지 여부

  return (
    <S.CardWrap>
      <S.HeaderWrap>
        <S.StatusWrap>
          <span>초대장이 완성되었어요!</span>
        </S.StatusWrap>
        <h1>{data.invitation.title}</h1>
      </S.HeaderWrap>
      <S.NotFoldWrap $isFold={isFold}>
        {!isMobile && data.cardImage && (
          <img src={URL.createObjectURL(data.cardImage)} alt="카드 이미지" />
        )}
        <div>
          <S.SectionHeader>
            <CalendarIcon />
            <h4>일정</h4>
          </S.SectionHeader>
          {data.invitation.startDate && (
            <p>
              {formatVoteDateTime(
                data.invitation.startDate,
                data.invitation.endDate,
                data.invitation.startTime,
                data.invitation.endTime
              )}
            </p>
          )}
          {data.invitation.scheduleVotes.length > 0 && (
            <CheckVoteBox
              deadline={data.invitation.voteDeadline}
              isMultiple={data.invitation.scheduleVoteMultiple}
              data={data.invitation.scheduleVotes}
            />
          )}
          {(data.invitation.userLocation || data.invitation.location) && (
            <S.SectionHeader style={{ marginTop: 40 }}>
              <LocationIcon />
              <h4>
                {data.invitation.userLocation || data.invitation.location}
              </h4>
            </S.SectionHeader>
          )}
          {data.invitation.location && (
            <>
              <a onClick={() => window.open(`${data.invitation.mapLink}`)}>
                {data.invitation.address}
              </a>
              <LocationMapComponent
                location={{
                  location: data.invitation.location,
                  address: data.invitation.address,
                  mapLink: data.invitation.mapLink,
                  latitude: data.invitation.latitude,
                  longitude: data.invitation.longitude,
                }}
                borderColor={"var(--Gray5)"}
              />
            </>
          )}
        </div>
      </S.NotFoldWrap>
      {!isFold && (
        <S.FoldWrap>
          {data.invitation.blocks.map((block) => {
            return (
              <S.FlodItem key={block.sequence}>
                {block.type === "divider" && <hr />}
                {block.type === "box" && (
                  <ContentTextBox
                    boxType={0}
                    title={block.title!}
                    content={
                      typeof block.content! === "string" ? block.content : ""
                    }
                  />
                )}
                {block.type === "photo" && (
                  <img src={block.image!} alt="첨부한 이미지" />
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
                    {typeof block.content! === "string" ? block.content : ""}
                  </div>
                )}
                {block.type === "timeTable" && (
                  <ContentTimeTable
                    content={Array.isArray(block.content) ? block.content : []}
                  />
                )}
              </S.FlodItem>
            );
          })}
        </S.FoldWrap>
      )}
      <PageFoldBtn isFold={isFold} setIsFold={setIsFold} />
      <div style={{ height: isTablet ? "60px" : isDesktop ? "80px" : 0 }}></div>
    </S.CardWrap>
  );
};

export default CheckContentWrap;
