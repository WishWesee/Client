import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvitationWritePage from "./pages/InvitationWritePage";
import LoginScreen from "./pages/LoginScreen";
import ImgContentCut from "./components/ImgContentCut";
import MyInviation from "./pages/MyInvitation";
import ChoiceCard from "./pages/ChoiceCard";
import InvitationDetailPage from "./pages/InvitationDetailPage";
import EmptyComponent from "./components/invite/EmptyComponent";
import SentInvitationListPage from "./pages/SentInvitationListPage";
import ReceivedInvitationListPage from "./pages/ReceivedInvitationListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<InvitationWritePage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/contentcut" element={<ImgContentCut />} />
          <Route path="/choicecard" element={<ChoiceCard />} />
          <Route path="/invites" element={<MyInviation />} />
          <Route path="/invites/:id" element={<InvitationDetailPage />} />
          <Route path="/invites/sent" element={<SentInvitationListPage />} />
          <Route
            path="/invites/received"
            element={<ReceivedInvitationListPage />}
          />
          <Route
            path="*"
            element={<EmptyComponent text="요청하신 페이지를 찾을 수 없어요" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
