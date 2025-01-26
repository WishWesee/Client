import styled from "styled-components";
import { useFeedbackQuery } from "@/api/invitation/getFeedback";
import ChatIcon from "@assets/icons/화면GUI_Full/2424_Activate/Chat.svg?react";
import ImgIcon from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import DeleteIcon from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import DeleteRedIcon from "@assets/icons/화면GUI_Full/2424_Activate/Delete.svg?react";
import { useRef, useState } from "react";
import { isDesktop, isTablet } from "@/hooks/Media";
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
    setImage({ imageUrl: imageUrl, imageFile: file });
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
    <Container>
      <HeadWrap>
        <TitleWrap>
          <h2>후기</h2>
          <p>
            <ChatIcon />
            {data.information.count}
          </p>
        </TitleWrap>
        <p>
          <span>{title}</span> 어떠셨나요?
        </p>
        <InputContainer>
          <InputWrap $isFocused={isInputFocused}>
            {image.imageFile && (
              <ImgWrap>
                <img src={image.imageUrl} alt="첨부한 이미지" />
                <DeleteIcon
                  onClick={() =>
                    setImage({
                      imageUrl: "",
                      imageFile: null,
                    })
                  }
                />
              </ImgWrap>
            )}
            <InputTextWrap>
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
              <ImgIcon style={{ cursor: "pointer" }} onClick={onAddPicture} />
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none", visibility: "hidden" }}
                ref={inputFileRef}
                onChange={handleFileChange}
              />
            </InputTextWrap>
          </InputWrap>
          {reviewText.length > 0 && (
            <button onClick={handleSaveReview}>확인</button>
          )}
        </InputContainer>
      </HeadWrap>
      <ContentWrap>
        {data.information.feedbackResList.map((data) => {
          return (
            <ReviewContent key={data.feedbackId}>
              {data.image && <img src={data.image} alt={data.content} />}
              <p>{data.content}</p>
              {isOwner && (
                <RightWrap>
                  <DeleteRedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDeleteId(data.feedbackId);
                      setIsDeleteModal(true);
                    }}
                  />
                </RightWrap>
              )}
            </ReviewContent>
          );
        })}
      </ContentWrap>
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
    </Container>
  );
};

export default ReviewWrap;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--Blue5);
  padding-bottom: 40px;

  ${isTablet} {
    padding: 30px 40px;
  }

  ${isDesktop} {
    padding: 40px 64px;
  }
`;

export const HeadWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  background-color: var(--White);

  ${isTablet} {
    padding: 30px;
  }

  ${isDesktop} {
    padding: 40px;
  }

  > p {
    font: var(--Selected-BtnName-FileName);
    color: var(--Gray40);
    padding: 0 20px 12px;

    ${isTablet} {
      padding: 0;
    }

    ${isDesktop} {
      padding: 0;
    }

    > span {
      color: var(--Primary);
    }
  }
`;

export const TitleWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 0;

  ${isTablet} {
    padding: 0;
  }

  ${isDesktop} {
    padding: 0;
  }

  > h2 {
    font: var(--TitleText);
    color: var(--Black);
  }

  > p {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  > button {
    background-color: transparent;
    border: none;
    padding: 16px 0;
    cursor: pointer;

    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    flex-shrink: 0;
  }
`;

export const InputWrap = styled.div<{ $isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid
    ${(props) => (props.$isFocused ? "var(--Primary)" : "var(--Gray10)")};
  border-radius: 4px;
  padding: 12px;
  width: 100%;
`;

export const ImgWrap = styled.div`
  position: relative;
  max-width: 326px;

  > img {
    width: 100%;
    border-radius: 8px;
  }

  > svg {
    position: absolute;
    z-index: 10;
    background-color: var(--White);
    border-radius: 100%;
    right: 0;
    margin: 8px;
    cursor: pointer;
  }
`;

export const InputTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > input {
    border: none;
    outline: none;
    font: var(--Unselected-Field-rNBLeft);
    color: var(--Black);
    flex-grow: 1;

    &::placeholder {
      color: var(--Gray40);
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 0;

  ${isTablet} {
    padding: 20px 0 0;
  }

  ${isDesktop} {
    padding: 20px 0 0;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background-color: var(--White);
  border-radius: 8px;

  > img {
    max-width: 326px;
    border-radius: 8px;
  }

  > p {
    font: var(--RegularContext);
    color: var(--Black);
  }
`;

export const RightWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
