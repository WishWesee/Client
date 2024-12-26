import SlideButton from "./Btn_Boolean";
import Button_Bottom_Next from "./Btn_Bottom_Next";
import Btn_Modal_Caution from "./Btn_Modal_Caution";
import RadioButton from "./Btn_Radio";

const Tsta = () => {
  return <div>
    <svg>
      <use xlinkHref="src/assets/logo.svg#HeaderLogo"></use>
    </svg>
    <Button_Bottom_Next/>
    <SlideButton/>
    <Btn_Modal_Caution/>
    <RadioButton/>
  </div>;
};

export default Tsta;
