import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { toolBarIconListType } from "@/types/invitationWrite/toolBar";
import { createContext, ReactNode, useContext, useState } from "react";

type ToolBarContextType = {
  selectedTool: toolBarIconListType | undefined;
  setSelectedTool: (index: number) => void;
  toolBarContent: toolBarIconListType[];
  setToolBarContent: (content: toolBarIconListType[]) => void;
  // subToolBar
  subSelectedTool: toolBarIconListType | undefined;
  setSubSelectedTool: (index: number) => void;
  subToolBarContent: toolBarIconListType[];
  setSubToolBarContent: (content: toolBarIconListType[]) => void;
};

const ToolBarContext = createContext<ToolBarContextType | undefined>(undefined);

export const ToolBarProvider = ({ children }: { children: ReactNode }) => {
  // 메인 툴바 상태
  const [selectedTool, setSelectedTool] = useState<
    toolBarIconListType | undefined
  >(undefined);
  const [toolBarContent, setToolBarContent] =
    useState<toolBarIconListType[]>(NomalToolBarList);

  // 서브 툴바 상태
  const [subSelectedTool, setSubSelectedTool] = useState<
    toolBarIconListType | undefined
  >(undefined);
  const [subToolBarContent, setSubToolBarContent] = useState<
    toolBarIconListType[]
  >([]);

  // 메인 툴 선택 핸들러
  const handleSetSelectedTool = (index: number) => {
    const tool = toolBarContent[index];
    setSelectedTool((prev) => (prev === tool ? undefined : tool));
  };

  // 메인 툴바 변경 핸들러
  const handleSetToolBarContent = (content: toolBarIconListType[]) => {
    setToolBarContent(content);
    setSelectedTool(undefined);
  };

  // 서브 툴 선택 핸들러
  const handleSetSubSelectedTool = (index: number) => {
    const tool = subToolBarContent[index];
    setSubSelectedTool((prev) => (prev === tool ? undefined : tool));
  };

  // 서브 툴바 변경 핸들러
  const handleSetSubToolBarContent = (content: toolBarIconListType[]) => {
    setSubToolBarContent(content);
    setSubSelectedTool(undefined);
  };

  return (
    <ToolBarContext.Provider
      value={{
        selectedTool,
        setSelectedTool: handleSetSelectedTool,
        toolBarContent,
        setToolBarContent: handleSetToolBarContent,
        subSelectedTool,
        setSubSelectedTool: handleSetSubSelectedTool,
        subToolBarContent,
        setSubToolBarContent: handleSetSubToolBarContent,
      }}
    >
      {children}
    </ToolBarContext.Provider>
  );
};

export const useToolBarContext = () => {
  const context = useContext(ToolBarContext);
  if (!context) {
    throw new Error("useToolBar must be used within a ToolBarProvider");
  }
  return context;
};
