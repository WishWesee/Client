import { UsageText } from "@/constants/home";
import * as S from "@styles/home/UsageGuideStyle";

const UsageCard = ({ item }: { item: (typeof UsageText)[0] }) => {
  const { id, color, content, img } = item;

  return (
    <S.UsageCard $color={color} $isSecond={id === 2} $isThird={id === 3}>
      <S.NumBox>{id}</S.NumBox>
      <S.ContentText
        dangerouslySetInnerHTML={{ __html: content }}
        $isSecond={id === 2}
      />
      <img src={img} />
    </S.UsageCard>
  );
};

export default UsageCard;
