import { cloneElement, ReactElement, useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const ShareKakao = ({
  title,
  text,
  imageUrl,
  link,
  buttonComponent,
}: {
  title: string;
  text: string;
  imageUrl: string;
  link: string;
  buttonComponent: ReactElement;
}) => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }
  }, []);

  const ShareKakao = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: text,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: link,
            webUrl: link,
          },
        },
        buttons: [
          {
            title: "초대장 보기",
            link: {
              mobileWebUrl: link,
              webUrl: link,
            },
          },
          {
            title: "초대장 만들기",
            link: {
              mobileWebUrl: "http://localhost:3000",
              webUrl: "http://localhost:3000",
            },
          },
        ],
      });
    }
  };

  return cloneElement(buttonComponent, {
    id: "kakao-link-btn",
    onClick: ShareKakao,
  });
};

export default ShareKakao;
