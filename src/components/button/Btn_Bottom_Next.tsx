import * as style from "@/styles/essentialComponents/button/ButtonBottomNextStyle";

interface ButtonBottomNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const ButtonBottomNext = ({ text, color, ...props }: ButtonBottomNextProps) => {
  return (
    <style.ToggleButton $color={color} {...props}>
      {text}
    </style.ToggleButton>
  );
};

export default ButtonBottomNext;
