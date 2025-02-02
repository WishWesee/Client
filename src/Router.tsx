import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImgContentCut from "./components/ImgContentCut";
import EmptyComponent from "./components/invite/EmptyComponent";
import Layout from "./components/Layout";
import ChoiceCard from "./pages/ChoiceCard";
import Home from "./pages/Home";
import InvitationDetailPage from "./pages/InvitationDetailPage";
import InvitationWritePage from "./pages/InvitationWritePage";
import LoginScreen from "./pages/LoginScreen";
import MyInviation from "./pages/MyInvitation";
import ReceivedInvitationListPage from "./pages/ReceivedInvitationListPage";
import SentInvitationListPage from "./pages/SentInvitationListPage";
import Redirect from "./pages/Redirect";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/redirect" element={<Redirect />} />
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
