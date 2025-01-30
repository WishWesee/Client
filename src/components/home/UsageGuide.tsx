import { UsageText } from "@/constants/home";
import * as S from "@styles/home/UsageGuideStyle";
import UsageCard from "./UsageCard";
import GoogleLogin from "../login/GoogleLogin";

const UsageGuide = () => {
  return (
    <S.Container>
      <S.MainText>위시위씨 이용 방법</S.MainText>
      <S.CardWrap>
        <S.LeftWrap>
          {UsageText.slice(0, 2).map((item) => (
            <UsageCard key={item.id} item={item} />
          ))}
        </S.LeftWrap>
        {UsageText.slice(2).map((item) => (
          <UsageCard key={item.id} item={item} />
        ))}
      </S.CardWrap>
      <GoogleLogin />
    </S.Container>
  );
};

export default UsageGuide;
