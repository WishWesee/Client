import FeaturesGuide from "@/components/home/FeaturesGuide";
import HomeLogin from "@/components/home/HomeLogin";
import UsageGuide from "@/components/home/UsageGuide";

const Home = () => {
  const isLogin = !!localStorage.getItem("authToken");

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
