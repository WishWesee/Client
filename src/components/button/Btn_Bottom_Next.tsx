import * as style from "@/styles/essentialComponents/button/ButtonBottomNextStyle";

interface ButtonBottomNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  width?: boolean;
}

const ButtonBottomNext = ({ text, color, width, ...props }: ButtonBottomNextProps) => {
  return (
    <style.ToggleButton $color={color} $width={width} {...props}>
      {text}
    </style.ToggleButton>
  );
};

export default ButtonBottomNext;
