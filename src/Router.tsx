import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvitationWritePage from "./pages/InvitationWritePage";
import LoginScreen from "./pages/LoginScreen";
import ImgContentCut from "./components/ImgContentCut";
import MyInviation from "./pages/MyInvitation";
import ChoiceCard from "./pages/ChoiceCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<InvitationWritePage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/contentcut" element={<ImgContentCut />} />
          <Route path="/choicecard" element={<ChoiceCard/>} />
          <Route path="/myinvitation" element={<MyInviation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
