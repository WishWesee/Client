import * as S from "@styles/invite/KakaoWrapStyle";
import { useState } from "react";
import InputWrap from "./InputWrap";
import ButtonBottomNext from "../button/Btn_Bottom_Next";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { TInvitationRes } from "@/types/invite";

interface Props {
  data: TInvitationRes;
}

const KakaoWrap = ({ data }: Props) => {
  const { isDesktop } = useWMediaQuery();
  const [content, setContent] = useState("");

  return (
    <S.Container>
      <h3>카카오톡으로 초대장을 전달하세요!</h3>
      <S.ContentWrap>
        <div style={{ width: "100%" }}>
          <InputWrap
            labelText="설명"
            placeholder="초대장이 도착했어요!"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            isReadOnly={false}
            isViewDeleteButton={true}
            isViewCheckButton={true}
            handleDeleteClick={() => setContent("")}
            handleCheckClick={() => {}}
          />
          {isDesktop && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <ButtonBottomNext text="보내기" color="blue" />
            </div>
          )}
        </div>
        <S.KakaoPreview>
          <S.KakaoPreviewWrap>
            <img src={data.cardImage} alt="카드 이미지" />
            <S.KakaoPreviewTextWrap>
              <h5>{data.title}</h5>
              <p
                style={{
                  color: content.length > 0 ? "var(--Primary)" : "var(--Black)",
                }}
              >
                {content ? content : "초대장이 도착했어요!"}
              </p>
              <p>wishwesee.com</p>
            </S.KakaoPreviewTextWrap>
          </S.KakaoPreviewWrap>
        </S.KakaoPreview>
        {!isDesktop && <ButtonBottomNext text="보내기" color="blue" />}
      </S.ContentWrap>
    </S.Container>
  );
};

export default KakaoWrap;
