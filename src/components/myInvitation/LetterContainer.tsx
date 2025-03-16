import ArrowRight from "@/assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react";
import * as style from "@/styles/myInvitation/MyInvitationContainerStyle";
import { useNavigate } from "react-router-dom";

type NBProps = {
  Title: string;
  Date: string;
  Image: string;
  Id: number;
};

const LetterContainer: React.FC<NBProps> = ({ Title, Date, Image, Id }) => {
  const navigate = useNavigate();

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
          Title ? {Title} : <div></div>
          <ArrowRight
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/invites/${Id}`)}
          />
        </style.LetterTitleBox>
        <style.LetterDateBox>{Date}</style.LetterDateBox>
      </style.LetterTextBox>
    </style.LetterContainer>
  );
};

export default LetterContainer;
