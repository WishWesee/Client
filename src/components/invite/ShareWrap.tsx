import * as S from "@styles/invite/ShareWrapStyle";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import KakaoTalkIcon from "@assets/icons/화면GUI_Line/3232/KakaoTalk.svg?react";
import LinkIcon from "@assets/icons/화면GUI_Line/3232/Link.svg?react";
import UploadIcon from "@assets/icons/화면GUI_Line/3232/Upload.svg?react";
import SaveBoxIcon from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import ArrowRightIcon from "@assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
import ShareKakaoBtn from "../shareSNS/ShareKakaoBtn";
import { useNavigate } from "react-router-dom";
import { postSaveReceived } from "@/api/invitation/postSaveReceived";

const ShareWrap = ({
  id,
  title,
  cardImage,
  isAlreadySave,
  isLogin,
  isShareLink,
}: {
  id: number;
  title: string;
  cardImage: string;
  isAlreadySave: boolean;
  isLogin: boolean;
  isShareLink: boolean;
}) => {
  const navigate = useNavigate();

  const { isMobile } = useWMediaQuery();

  const ClipBoard = () => {
    const url = `http://localhost:3000/invite/${id}`;

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

  const handleSaveReceived = async () => {
    try {
      await postSaveReceived(id);
      navigate(`/invite/${id}`);
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <S.Container $isShareLink={isShareLink}>
      {isMobile && <h3>친구들을 초대해보세요!</h3>}
      {!isMobile && isShareLink && (
        <S.Button
          $isAlreadySave={isAlreadySave}
          onClick={() =>
            isAlreadySave
              ? navigate("/invite")
              : isLogin
              ? handleSaveReceived()
              : navigate("/login")
          }
        >
          <SaveBoxIcon />
          {isAlreadySave && <ArrowRightIcon color="var(--Primary)" />}
        </S.Button>
      )}
      <S.ShareBtnWrap>
        <ShareKakaoBtn
          title={title}
          text="초대장이 도착했어요!"
          imageUrl={cardImage}
          link={`http://localhost:3000/invite/${id}`}
          buttonComponent={<ShareBtn text="카카오톡" icon={KakaoTalkIcon} />}
        />
        <ShareBtn text="링크 복사" icon={LinkIcon} onClick={ClipBoard} />
        {isMobile && <ShareBtn text="더보기" icon={UploadIcon} />}
      </S.ShareBtnWrap>
    </S.Container>
  );
};

export default ShareWrap;
