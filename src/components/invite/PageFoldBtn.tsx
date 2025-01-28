import { Button } from "@styles/invite/PageFoldBtnStyle";
import ArrowIcon from "@assets/icons/화면GUI_Line/2828/Arrow_Top.svg?react";

type Props = {
  isFold: boolean;
  setIsFold: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageFoldBtn = ({ isFold, setIsFold }: Props) => {
  return (
    <Button onClick={() => setIsFold(!isFold)} $isFold={isFold}>
      <p>{isFold ? "초대장 펼치기" : "초대장 접기"}</p>
      <ArrowIcon
        color="var(--Primary)"
        style={{
          transform: isFold ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Button>
  );
};

export default PageFoldBtn;
