import * as S from "@styles/invite/ReviewWrapStyle";
import { useFeedbackQuery } from "@/api/invitation/getFeedback";
import ChatIcon from "@assets/icons/화면GUI_Full/2424_Activate/Chat.svg?react";
import ImgIcon from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import DeleteIcon from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import DeleteRedIcon from "@assets/icons/화면GUI_Full/2424_Activate/Delete.svg?react";
import { useRef, useState } from "react";
import { postFeedback } from "@/api/invitation/postFeedback";
import { deleteFeedback } from "@/api/invitation/deleteFeedback";
import TwoBtnModal from "../modal/TwoBtnModal";

type Props = {
  id: number;
  title: string;
  isOwner: boolean;
};

const ReviewWrap = ({ id, title, isOwner }: Props) => {
  const { data, refetch } = useFeedbackQuery(id);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState<{
    imageUrl: string;
    imageFile: File | null;
  }>({
    imageUrl: "",
    imageFile: null,
  }); //선택한 사진
  const [isInputFocused, setIsInputFocused] = useState(false); //Focus 상태관리
  const [deleteId, setDeleteId] = useState<number | null>(null); //삭제 Id 저장
  const [isDeleteModal, setIsDeleteModal] = useState(false); //삭제 모달

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log("파일이 선택되지 않았습니다.");
      return;
    }

    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImage((prev) => {
      if (prev.imageUrl) {
        URL.revokeObjectURL(prev.imageUrl);
      }
      return { imageUrl, imageFile: file };
    });

    e.target.value = "";
  };

  //후기 저장 함수
  const handleSaveReview = async () => {
    await postFeedback(id, image.imageFile, reviewText);
    refetch();
    setReviewText("");
    setImage({
      imageUrl: "",
      imageFile: null,
    });
  };

  //후기 삭제 함수
  const handleDeleteReview = async () => {
    if (deleteId === null) return;

    await deleteFeedback(id, deleteId);
    refetch();
    setDeleteId(null);
    setIsDeleteModal(false);
  };

  return (
    <S.Container>
      <S.HeadWrap>
        <S.TitleWrap>
          <h2>후기</h2>
          <p>
            <ChatIcon />
            {data.information.count}
          </p>
        </S.TitleWrap>
        <p>
          <span>{title}</span> 어떠셨나요?
        </p>
        <S.InputContainer>
          <S.InputWrap $isFocused={isInputFocused}>
            {image.imageFile && (
              <S.ImgWrap>
                <img src={image.imageUrl} alt="첨부한 이미지" />
                <DeleteIcon
                  onClick={() =>
                    setImage({
                      imageUrl: "",
                      imageFile: null,
                    })
                  }
                />
              </S.ImgWrap>
            )}
            <S.InputTextWrap>
              <input
                value={reviewText}
                placeholder="한 줄 후기를 작성해 보세요!"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 50);
                  setReviewText(e.target.value);
                }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
              {reviewText.length > 0 && (
                <DeleteIcon
                  onClick={() => setReviewText("")}
                  style={{ cursor: "pointer" }}
                />
              )}
              <ImgIcon
                style={{
                  cursor: image.imageFile === null ? "pointer" : "default",
                  opacity: image.imageFile === null ? 1 : 0.5,
                }}
                onClick={() => image.imageFile === null && onAddPicture()}
              />
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none", visibility: "hidden" }}
                ref={inputFileRef}
                onChange={handleFileChange}
              />
            </S.InputTextWrap>
          </S.InputWrap>
          {reviewText.length > 0 && (
            <button onClick={handleSaveReview}>확인</button>
          )}
        </S.InputContainer>
      </S.HeadWrap>
      <S.ContentWrap>
        {data.information.feedbackResList.map((data) => {
          return (
            <S.ReviewContent key={data.feedbackId}>
              {data.image && <img src={data.image} alt={data.content} />}
              <p>{data.content}</p>
              {isOwner && (
                <S.RightWrap>
                  <DeleteRedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDeleteId(data.feedbackId);
                      setIsDeleteModal(true);
                    }}
                  />
                </S.RightWrap>
              )}
            </S.ReviewContent>
          );
        })}
      </S.ContentWrap>
      {isDeleteModal && (
        <TwoBtnModal
          text="해당 후기를 삭제하시겠습니까?"
          leftBtnText="취소"
          rightBtnText="삭제"
          color="red"
          onLeftClick={() => {
            setDeleteId(null);
            setIsDeleteModal(false);
          }}
          onRightClick={handleDeleteReview}
        />
      )}
    </S.Container>
  );
};

export default ReviewWrap;
