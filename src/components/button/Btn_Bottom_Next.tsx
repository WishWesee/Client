import * as style from "@/styles/essentialComponents/button/ButtonBottomNextStyle";

type ButtonBottomNextProps = {
  text: string;
  color: string;
};

const ButtonBottomNext = ({ text, color }: ButtonBottomNextProps) => {
  return <style.ToggleButton $color={color}>{text}</style.ToggleButton>;
};

export default ButtonBottomNext;
