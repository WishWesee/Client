import CheckContentWrap from "@/components/invite/CheckContentWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { TInvitationReq } from "@/types/invite";
import * as S from "@styles/invite/InvitationDetailPageStyle";
import { useCallback, useEffect, useState } from "react";

type Props = {
  data: TInvitationReq;
};

const CheckComponent = ({ data }: Props) => {
  const { isMobile } = useWMediaQuery();

  //애니메이션 스크롤
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);

    if (window.scrollY === 0 && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [animationStarted]);

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
  }, [handleScroll]);

  useEffect(() => {
    if (window.scrollY === 0 && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [animationStarted]);

  return (
    <S.Container $isHeader={true}>
      {data && (
        <>
          {isMobile && (
            <S.FadeInImage
              src={
                data.cardImage instanceof File
                  ? URL.createObjectURL(data.cardImage)
                  : (data.cardImage as unknown as string)
              }
              alt="카드 이미지"
              $scrollY={scrollY}
              $screenWidth={screenWidth}
              $isHeader={true}
              $animationStarted={animationStarted}
            />
          )}
          <TotheTopBtn />
          <S.BodyWrap $screenWidth={screenWidth}>
            {isMobile && (
              <S.Overlay style={{ opacity: Math.max(1 - scrollY / 300, 0) }} />
            )}
            <CheckContentWrap data={data} />
            {/* <InviteBottom
              btnText="완료"
              onBtnClick={handleSaveInvite}
              isDisabled={false}
              isCheck={isCheck}
              onCheckClick={() => console.log(isCheck)}
            /> */}
          </S.BodyWrap>
        </>
      )}
    </S.Container>
  );
};

export default CheckComponent;
