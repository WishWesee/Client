import SlideButton from "./Btn_Boolean";
import Button_Bottom_Next from "./Btn_Bottom_Next";
import Btn_Modal_Caution from "./Btn_Modal_Caution";
import RadioButton from "./Btn_Radio";
import TopHeader from "./Top_Header";
import ReactNB from "./Top_reactNB";
import DocumentTB from "./Top_documentTB";
import Bottom from "./Bottom_Bottom";
import {constants} from "../constants/Comp_Btn"
import TxtBox_Content_Box from "./Box_TxtBox_Content_Box";
import Box_LocationBox_Content from "./Box_LocationBox_Content";

const Tsta = () => {
  return <div>
    <Button_Bottom_Next text={constants.Btn_text}/>
    <SlideButton/>
    <Btn_Modal_Caution/>
    <RadioButton/>
    <TopHeader/>
    <ReactNB/>
    <DocumentTB/>
    <Bottom/>
    <TxtBox_Content_Box/>
    <Box_LocationBox_Content/>
  </div>;
};

export default Tsta;
