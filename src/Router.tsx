import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvitationWritePage from "./pages/InvitationWritePage";
import InvitationDetailPage from "./pages/invite/InvitationDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<InvitationWritePage />} />
          <Route path="/invite/:id" element={<InvitationDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
