import * as style from "@/styles/essentialComponents/button/BtnModalCautionStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const BtnModalCaution = ({ text, color, ...props }: Props) => {
  return (
    <style.CautionButton
      className={
        color === "red" ? "red" : color === "blue" ? "blue" : "default"
      }
      {...props}
    >
      {text}
    </style.CautionButton>
  );
};

export default BtnModalCaution;
