import * as S from "@styles/invite/ShareWrapStyle";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import KakaoTalkIcon from "@assets/icons/화면GUI_Line/3232/KakaoTalk.svg?react";
import LinkIcon from "@assets/icons/화면GUI_Line/3232/Link.svg?react";
import UploadIcon from "@assets/icons/화면GUI_Line/3232/Upload.svg?react";
import SaveBoxIcon from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import ShareKakaoBtn from "../shareSNS/ShareKakaoBtn";
import { useNavigate } from "react-router-dom";
import { postSaveReceived } from "@/api/invitation/postSaveReceived";
import useNavigateStore from "@/store/useNavigateStore";

type Props = {
  id: number;
  token: string | null;
  title: string;
  cardImage: string;
  isAlreadySave: boolean;
  isLogin: boolean;
  isShareLink: boolean;
  refetch: () => void;
};

const ShareWrap = ({
  id,
  token,
  title,
  cardImage,
  isLogin,
  isShareLink,
  refetch,
}: Props) => {
  const navigate = useNavigate();
  const { setNavigatePage } = useNavigateStore();

  const { isMobile } = useWMediaQuery();

  //초대 링크 복사 함수
  const ClipBoard = () => {
    const url = `https://chochocho.wishwesee.n-e.kr/invites/${token}`;

    navigator.clipboard.writeText(url).then(() => {
      alert("초대 링크가 복사되었습니다");
    });
  };

  //디바이스 공유 함수
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      alert("이 브라우저에서는 공유 기능을 지원하지 않습니다.");
    }
  };

  const handleSaveReceived = async () => {
    try {
      await postSaveReceived(id);
      refetch();
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const handleSaveClick = () => {
    if (isLogin) {
      handleSaveReceived();
    } else {
      setNavigatePage(`/invites/${token}`);
      navigate("/login");
    }
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
    <S.Container $isShareLink={isShareLink}>
      {isMobile && <h3>친구들을 초대해보세요!</h3>}
      {!isMobile && isShareLink && (
        <S.Button onClick={handleSaveClick}>
          <SaveBoxIcon />
        </S.Button>
      )}
      <S.ShareBtnWrap>
        <ShareKakaoBtn
          title={title}
          text="초대장이 도착했어요!"
          imageUrl={cardImage}
          link={`https://chochocho.wishwesee.n-e.kr/invites/${token}`}
          buttonComponent={<ShareBtn text="카카오톡" icon={KakaoTalkIcon} />}
        />
        <ShareBtn text="링크 복사" icon={LinkIcon} onClick={ClipBoard} />
        {isMobile && (
          <ShareBtn text="더보기" icon={UploadIcon} onClick={handleShare} />
        )}
      </S.ShareBtnWrap>
    </S.Container>
  );
};

export default ShareWrap;
