import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvitationWritePage from "./pages/InvitationWritePage";
import ChoiceCard from "./pages/ChoiceCard";
import MyInviation from "./pages/MyInvitation";
import LoginScreen from "./pages/LoginScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<InvitationWritePage />} />
          <Route path="/choicecard" element={<ChoiceCard />} />
          <Route path="/myinvitation" element={<MyInviation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
