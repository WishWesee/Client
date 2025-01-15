import * as S from "@styles/home/FeaturesGuideStyle";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { FeaturesText } from "@/constants/home";

const FeaturesGuide = () => {
  const { isMobile } = useWMediaQuery();

  return (
    <S.Container>
      <S.MainText>
        위시위씨의 다양한 기능을
        {isMobile ? <br /> : " "}
        경험해 보세요!
      </S.MainText>
      <S.FeaturesWrap>
        {FeaturesText.map((item) => {
          return (
            <S.FeatureBox key={item.id}>
              <item.icon />
              <S.MainText>{item.title}</S.MainText>
              <p>{item.content}</p>
            </S.FeatureBox>
          );
        })}
      </S.FeaturesWrap>
    </S.Container>
  );
};

export default FeaturesGuide;
