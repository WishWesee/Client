import useNavigateStore from "@/store/useNavigateStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const { navigatePage } = useNavigateStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate(navigatePage);
      console.log(navigatePage);
      sessionStorage.removeItem("navigate-page");
    } else {
      console.error("로그인 실패");
    }
  }, [navigate, navigatePage]);

  return <></>;
};

export default Redirect;
