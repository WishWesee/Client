import * as style from "@/styles/essentialComponents/button/RadioButtonStyle";

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

const RadioButton = ({ isSelected, onClick }: Props) => {
  return (
    <style.RadioButton
      className={isSelected ? "toggled" : ""}
      onClick={onClick}
    >
      <style.RadioCircle className={isSelected ? "toggled" : ""} />
    </style.RadioButton>
  );
};

export default RadioButton;
