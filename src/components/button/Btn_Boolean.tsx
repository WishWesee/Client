import * as style from "@/styles/essentialComponents/button/SlideButtonStyle";
import React, { useState } from "react";

interface SlideButtonProps {
  handleState: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({ handleState }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    handleState();
  };

  return (
    <style.SlideButton
      className={isToggled ? "toggled" : ""}
      onClick={handleToggle}
    >
      <style.SlideCircle className={isToggled ? "toggled" : ""} />
    </style.SlideButton>
  );
};

export default SlideButton;
