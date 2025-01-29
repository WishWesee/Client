import { BoxColor } from "@/constants/invite";
import { TextBoxWrap } from "@/styles/invite/ContentBodyStyle";

type Props = {
  boxType: number;
  title: string;
  content: string;
};

const ContentTextBox = ({ boxType, title, content }: Props) => {
  return (
    <TextBoxWrap
      style={{
        backgroundColor: BoxColor[boxType].bgColor,
        border: BoxColor[boxType].border,
      }}
    >
      <h3>{title}</h3>
      <hr />
      <p>{content}</p>
    </TextBoxWrap>
  );
};

export default ContentTextBox;
