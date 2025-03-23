import ArrowRight from "@/assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
import * as style from "@/styles/myInvitation/MyInvitationContainerStyle";
import { useNavigate } from "react-router-dom";

type NBProps = {
  Title: string;
  Date: string;
  Image: string;
  token: string;
};

const LetterContainer: React.FC<NBProps> = ({ Title, Date, Image, token }) => {
  const navigate = useNavigate();

  let titleContent;

  if (Title) {
    if (Title.length >= 9) {
      titleContent = Title.slice(0, 8) + "...";
    } else {
      titleContent = Title;
    }
  } else {
    titleContent = <div></div>;
  }

  return (
    <style.LetterContainer>
      <style.LetterImgBox>
        <img
          src={Image}
          alt={Title}
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: "4px 4px 0px 0px",
            objectFit: "cover",
          }}
        />
      </style.LetterImgBox>

      <style.LetterTextBox>
        <style.LetterTitleBox>
          {titleContent}
          <ArrowRight
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/invites/${token}`)}
          />
        </style.LetterTitleBox>
        <style.LetterDateBox>{Date}</style.LetterDateBox>
      </style.LetterTextBox>
    </style.LetterContainer>
  );
};

export default LetterContainer;
