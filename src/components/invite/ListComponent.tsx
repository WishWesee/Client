import * as S from "@styles/invite/ListComponentStyle";
import useWMediaQuery from "@hooks/useWMediaQuery";
import ArrowLeftIcon from "@assets/icons/화면GUI_Full/2424_Default/Arrow_Left.svg?react";
import ArrowRightIcon from "@assets/icons/화면GUI_Full/2424_Default/Arrow_Right.svg?react";
import ArrowRight20Icon from "@assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
import ArrowBackIcon from "@assets/icons/화면GUI_Line/2828/Arrow_Left.svg?react";
import { useNavigate } from "react-router-dom";
import { StatusWrap } from "@styles/invite/ContentWrapStyle";
import TotheTopBtn from "@components/invite/TotheTopBtn";
import { TInviteListRes } from "@/types/invite";

type Props = {
  data: TInviteListRes;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  title: string;
};

const ListComponent = ({ data, year, setYear, title }: Props) => {
  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  return (
    <S.Container>
      {!isMobile && (
        <StatusWrap onClick={() => navigate("/invite")}>
          <ArrowBackIcon color="var(--Gray40)" />
          <span style={{ paddingTop: 1 }}>나의 초대장</span>
        </StatusWrap>
      )}
      <h2>내가 {title} 초대장</h2>
      <S.TotalWrap>
        총 {data?.totalInvitations}번의 초대를
        {title === "보낸" ? " 보냈어요!" : " 받았어요!"}
      </S.TotalWrap>
      <S.YearWrap>
        <h4>{year}</h4>
        <S.RightBtnWrap>
          <button disabled={true}>
            <ArrowLeftIcon onClick={() => setYear((prev) => prev - 1)} />
          </button>
          <button disabled={true}>
            <ArrowRightIcon onClick={() => setYear((prev) => prev + 1)} />
          </button>
        </S.RightBtnWrap>
      </S.YearWrap>
      <S.ListWrap>
        {data?.invitations.map((data) => {
          return (
            <S.ListItem
              key={data.invitationId}
              onClick={() => navigate(`/invite/${data.invitationId}`)}
            >
              <img src={data.cardImage} alt={data.title} />
              <S.TitleWrap>
                <h4>{data.title}</h4>
                <ArrowRight20Icon color="var(--Black)" />
              </S.TitleWrap>
              <p>{data.date.replaceAll("-", ".")}</p>
            </S.ListItem>
          );
        })}
      </S.ListWrap>
      <TotheTopBtn />
    </S.Container>
  );
};

export default ListComponent;
