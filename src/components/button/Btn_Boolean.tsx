import * as style from "@/styles/essentialComponents/button/SlideButtonStyle";
import React, { useState } from "react";

interface SlideButtonProps {
  handleState: () => void;
  currentState?: boolean;
}

const SlideButton: React.FC<SlideButtonProps> = ({
  handleState,
  currentState,
}) => {
  const [isToggled, setIsToggled] = useState(
    currentState ? currentState : false
  );

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
