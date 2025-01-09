import { TOOLBARICONLIST } from "@/constants/invitationWrite/toolBar";
import * as S from "@styles/invitationWrite/invitationWriteToolBar";
import { useState } from "react";

const InvitationWriteToolBar = () => {
  const [selectedTool, setSelectedTool] = useState<number>(0);
  return (
    <S.Container>
      {TOOLBARICONLIST.map((item, index) => (
        <S.ToolButton key={index} onClick={() => setSelectedTool(index)}>
          {selectedTool === index ? <item.activeIcon /> : <item.defaultIcon />}
          {item.title && (
            <S.ToolButtonText $isActive={selectedTool === index}>
              {item.title}
            </S.ToolButtonText>
          )}
        </S.ToolButton>
      ))}
    </S.Container>
  );
};

export default InvitationWriteToolBar;
