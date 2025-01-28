import { useToolBarContext } from "@/contexts/toolBarContext";
import * as S from "@styles/invitationWrite/invitationWriteToolBar";

const InvitationWriteToolBar = () => {
  const { selectedTool, setSelectedTool, toolBarContent } = useToolBarContext();

  return (
    <S.Container>
      {toolBarContent.map((item, index) => (
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
