import { ReactElement, useEffect, useState } from "react";
import ShareKakao from "./ShareKakao";

const ShareKakaoBtn = ({
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
  const [shareButton, setShareButton] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setShareButton(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {shareButton === true ? (
        <ShareKakao
          title={title}
          text={text}
          imageUrl={imageUrl}
          link={link}
          buttonComponent={buttonComponent}
        />
      ) : (
        buttonComponent
      )}
    </div>
  );
};

export default ShareKakaoBtn;
