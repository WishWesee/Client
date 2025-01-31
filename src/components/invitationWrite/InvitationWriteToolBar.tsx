import {
  NomalToolBarList,
  SubTextToolBarList,
  TextToolBarList,
} from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import Arrow from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteToolBar";

const InvitationWriteToolBar = () => {
  const {
    selectedTool,
    subSelectedTool,
    setSelectedTool,
    setSubSelectedTool,
    toolBarContent,
    setToolBarContent,
    subToolBarContent,
  } = useToolBarContext();

  const isSubToolBar = selectedTool && toolBarContent === TextToolBarList;

  const handleSubTool = (index: number) => {
    setSubSelectedTool(index);
    if (subToolBarContent === SubTextToolBarList) {
      toolBarContent[0] = subToolBarContent[index];
    }
  };

  return (
    <S.Container>
      <S.ToolContainer>
        {/* "<" 구현 */}
        {toolBarContent !== NomalToolBarList && (
          <Arrow onClick={() => setToolBarContent(NomalToolBarList)} />
        )}
        {toolBarContent.map((item, index) => (
          <S.ToolButton key={index} onClick={() => setSelectedTool(index)}>
            {selectedTool === item ? <item.activeIcon /> : <item.defaultIcon />}
            {item.title && (
              <S.ToolButtonText $isActive={selectedTool === item}>
                {item.title}
              </S.ToolButtonText>
            )}
          </S.ToolButton>
        ))}
      </S.ToolContainer>

      {isSubToolBar && (
        <S.SubToolContainer>
          {subToolBarContent.map((item, index) => (
            <S.ToolButton key={index} onClick={() => handleSubTool(index)}>
              {subSelectedTool === item ? (
                <item.activeIcon />
              ) : (
                <item.defaultIcon />
              )}
              {item.title && (
                <S.ToolButtonText $isActive={subSelectedTool === item}>
                  {item.title}
                </S.ToolButtonText>
              )}
            </S.ToolButton>
          ))}
        </S.SubToolContainer>
      )}
    </S.Container>
  );
};

export default InvitationWriteToolBar;
