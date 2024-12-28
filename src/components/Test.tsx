import SlideButton from "./Btn_Boolean";
import Button_Bottom_Next from "./Btn_Bottom_Next";
import Btn_Modal_Caution from "./Btn_Modal_Caution";
import RadioButton from "./Btn_Radio";
import TopHeader from "./Top_Header";
import ReactNB from "./Top_reactNB";
import DocumentTB from "./Top_documentTB";
import Bottom from "./Bottom";
import {constants} from "../constants/Comp_Btn"

const Tsta = () => {
  return <div>
    <svg>
      <use xlinkHref="src/assets/logo.svg#HeaderLogo"></use>
    </svg>
    <Button_Bottom_Next text={constants.Btn_text}/>
    <SlideButton/>
    <Btn_Modal_Caution/>
    <RadioButton/>
    <TopHeader/>
    <ReactNB/>
    <DocumentTB/>
    <Bottom/>
  </div>;
};

export default Tsta;
