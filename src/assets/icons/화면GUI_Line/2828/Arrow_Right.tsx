import React from "react";

type ArrowLeftProps = {
  stroke?: string;
  onClick?: () => void;
};

const Arrow_Left: React.FC<ArrowLeftProps> = ({ stroke = "#151516", onClick }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick} // 클릭 이벤트 추가
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <path d="M10 6L18 14L10 22" stroke={stroke} strokeWidth="2" />
  </svg>
);

export default Arrow_Left;
