import CheckContentWrap from "@/components/invite/CheckContentWrap";
import InviteBottom from "@/components/invite/InviteBottom";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { usePostInvitation } from "@/hooks/write/usePostInvitation";
import { TInvitationReq } from "@/types/invite";
import * as S from "@styles/invite/InvitationDetailPageStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: TInvitationReq;
  isCheck: boolean;
};

const CheckComponent = ({ data, isCheck }: Props) => {
  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();
  const { mutate: postInvitation } = usePostInvitation();

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
    const formData = new FormData();
    formData.append(
      "invitation",
      new Blob([JSON.stringify(data.invitation)], { type: "application/json" })
    );
    if (data.cardImage) {
      formData.append("cardImage", data.cardImage);
    }

    if (data.photoImages && data.photoImages.length > 0) {
      Array.from(data.photoImages).forEach((file) => {
        formData.append("photoImages", file);
      });
    }

    postInvitation(formData, {
      onSuccess: (response) => {
        //저장 후 결과로 받은 id값
        const id = response.invitationId;
        navigate(`/invites/${id}`, {
          state: { isDone: true },
        });
      },
      onError: (error) => {
        console.error("등록 실패:", error);
      },
    });
  };

  return (
    <S.Container $isHeader={true}>
      {data && (
        <>
          {isMobile && (
            <S.FadeInImage
              src={
                data.cardImage instanceof File
                  ? URL.createObjectURL(data.cardImage)
                  : (data.cardImage as unknown as string) // SVG 경로 그대로 사용
              }
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
