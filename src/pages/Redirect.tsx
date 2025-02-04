import useNavigateStore from "@/store/useNavigateStore";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const { navigatePage } = useNavigateStore();
  const [cookies] = useCookies(["Authorization", "Refresh_Token"]);

  useEffect(() => {
    const { Authorization, Refresh_Token } = cookies;

    if (Authorization) {
      localStorage.setItem("Authorization", Authorization);
      if (Refresh_Token) {
        localStorage.setItem("Refresh_Token", Refresh_Token);
      }
      navigate(navigatePage);
      sessionStorage.removeItem("navigate-page");
    } else {
      console.error("로그인 실패");
    }
  }, [cookies, navigate, navigatePage]);

  return <></>;
};

export default Redirect;
