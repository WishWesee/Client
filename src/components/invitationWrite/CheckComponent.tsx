import * as S from "@styles/invite/InvitationDetailPageStyle";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteBottom from "@/components/invite/InviteBottom";
import { TInvitationReq } from "@/types/invite";
import CheckContentWrap from "@/components/invite/CheckContentWrap";

type Props = {
  data: TInvitationReq;
  isCheck: boolean;
};

const CheckComponent = ({ data, isCheck }: Props) => {
  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  //애니메이션 스크롤
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  //완성된 초대장 저장
  const handleSaveInvite = () => {
    //저장 후 결과로 받은 id값
    const id = 1;
    navigate(`/invites/${id}`, {
      state: { isDone: true },
    });
  };

  return (
    <S.Container $isHeader={true}>
      {data && (
        <>
          {isMobile && (
            <S.FadeInImage
              src={data.cardImage}
              alt="카드 이미지"
              $scrollY={scrollY}
              $screenWidth={screenWidth}
            />
          )}
          <TotheTopBtn />
          <S.BodyWrap $screenWidth={screenWidth}>
            {isMobile && (
              <S.Overlay style={{ opacity: Math.max(1 - scrollY / 300, 0) }} />
            )}
            <CheckContentWrap data={data} />
            <InviteBottom
              btnText="완료"
              onBtnClick={handleSaveInvite}
              isDisabled={false}
              isCheck={isCheck}
              onCheckClick={() => console.log(isCheck)}
            />
          </S.BodyWrap>
        </>
      )}
    </S.Container>
  );
};

export default CheckComponent;
