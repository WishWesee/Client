import styled from "styled-components";
import { useFeedbackQuery } from "@/api/invitation/getFeedback";
import ChatIcon from "@assets/icons/화면GUI_Full/2424_Activate/Chat.svg?react";
import ImgIcon from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import DeleteIcon from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import { useRef, useState } from "react";
import { isDesktop, isTablet } from "@/hooks/Media";

type Props = {
  id: number;
  title: string;
};

const ReviewWrap = ({ id, title }: Props) => {
  const { data } = useFeedbackQuery(id);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState<{
    imageUrl: string;
    imageFile: File | null;
  }>({
    imageUrl: "",
    imageFile: null,
  });
  const [isInputFocused, setIsInputFocused] = useState(false); //Focus 상태관리

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
          {reviewText.length > 0 && <button>확인</button>}
        </InputContainer>
      </HeadWrap>
      <ContentWrap></ContentWrap>
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
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  background-color: var(--White);

  > p {
    font: var(--Selected-BtnName-FileName);
    color: var(--Gray40);
    padding: 0 20px 12px;

    > span {
      color: var(--Primary);
    }
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 0;

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
  background-color: var(--Blue5);
`;
