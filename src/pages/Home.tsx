import FeaturesGuide from "@/components/home/FeaturesGuide";
import HomeLogin from "@/components/home/HomeLogin";
import UsageGuide from "@/components/home/UsageGuide";
import { useAuthStore } from "@/store/useAuthStore";

const Home = () => {
  const { isLogin } = useAuthStore();
  sessionStorage.removeItem("navigate-page");

  return (
    <>
      <HomeLogin />
      {!isLogin && (
        <>
          <FeaturesGuide />
          <UsageGuide />
        </>
      )}
    </>
  );
};

export default Home;
