import { Button } from "@styles/invite/TotheTopBtnStyle";
import ArrowTopIcon from "@assets/icons/화면GUI_Line/3232/ArrowTop.svg?react";

const TotheTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={scrollToTop}>
      <ArrowTopIcon />
    </Button>
  );
};

export default TotheTopBtn;
