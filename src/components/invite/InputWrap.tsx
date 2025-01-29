import * as S from "@styles/invite/InputWrapStyle";
import DeleteIcon from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";

type Props = {
  labelText: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isReadOnly: boolean;
  isViewDeleteButton: boolean;
  isViewCheckButton: boolean;
  handleDeleteClick: () => void;
  handleCheckClick: () => void;
};

const InputWrap = ({
  labelText,
  placeholder,
  value,
  onChange,
  isReadOnly,
  isViewDeleteButton,
  isViewCheckButton,
  handleDeleteClick,
  handleCheckClick,
}: Props) => {
  return (
    <S.PersonInputWrap $isViewCheckButton={isViewCheckButton}>
      <label htmlFor="input">{labelText}</label>
      <input
        type="text"
        id="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
      />
      {value.length > 0 && (
        <>
          {isViewDeleteButton && <DeleteIcon onClick={handleDeleteClick} />}
          {!isViewCheckButton && (
            <button onClick={handleCheckClick}>확인</button>
          )}
        </>
      )}
    </S.PersonInputWrap>
  );
};

export default InputWrap;
