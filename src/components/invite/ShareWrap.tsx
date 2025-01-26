import * as S from "@styles/invite/ShareWrapStyle";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import KakaoTalkIcon from "@assets/icons/화면GUI_Line/3232/KakaoTalk.svg?react";
import LinkIcon from "@assets/icons/화면GUI_Line/3232/Link.svg?react";
import UploadIcon from "@assets/icons/화면GUI_Line/3232/Upload.svg?react";
import ShareKakaoBtn from "../shareSNS/ShareKakaoBtn";

const ShareWrap = ({
  id,
  title,
  cardImage,
}: {
  id: number;
  title: string;
  cardImage: string;
}) => {
  const { isMobile } = useWMediaQuery();

  const ClipBoard = () => {
    const url = `http://localhost:3000/invite/${id}/share`;

    navigator.clipboard.writeText(url).then(() => {
      alert("초대 링크가 복사되었습니다");
    });
  };

  const ShareBtn = ({
    text,
    icon: Icon,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }) => {
    return (
      <S.BtnContainer>
        <button {...props}>
          <Icon />
        </button>
        {isMobile && <p>{text}</p>}
      </S.BtnContainer>
    );
  };

  return (
    <S.Container>
      {isMobile && <h3>친구들을 초대해보세요!</h3>}
      <S.ShareBtnWrap>
        <ShareKakaoBtn
          title={title}
          text="초대장이 도착했어요!"
          imageUrl={cardImage}
          link={`http://localhost:3000/invite/${id}/share`}
          buttonComponent={<ShareBtn text="카카오톡" icon={KakaoTalkIcon} />}
        />
        <ShareBtn text="링크 복사" icon={LinkIcon} onClick={ClipBoard} />
        {isMobile && <ShareBtn text="더보기" icon={UploadIcon} />}
      </S.ShareBtnWrap>
    </S.Container>
  );
};

export default ShareWrap;
