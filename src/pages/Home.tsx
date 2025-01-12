import ReactNB from "@/components/top/Top_reactNB";
import {choiceCardPageUI} from "@/constants/choiceCard/Wrap";
import Layout from "@/components/Layout";
import ChoiceCard from "@/components/login/GoogleLogin";

const Home = () => {
  return (
    /**<div>
      <Layout children={<ReactNB Back={choiceCardPageUI.Btn_rNB_Back} Front='null'/>}/>
    </div>*/
    <>
    <Layout children={<ChoiceCard/>}/>
    </>
  );
};

export default Home;
