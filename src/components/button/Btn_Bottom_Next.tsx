import * as style from "@/styles/essentialComponents/button/ButtonBottomNextStyle";

interface ButtonBottomNextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  width?: boolean;
  onClick?: () => void;
}

const ButtonBottomNext = ({
  text,
  color,
  width,
  onClick,
  ...props
}: ButtonBottomNextProps) => {
  return (
    <style.ToggleButton
      $color={color}
      $width={width}
      {...props}
      onClick={onClick}
    >
      {text}
    </style.ToggleButton>
  );
};

export default ButtonBottomNext;
