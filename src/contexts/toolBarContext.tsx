import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { toolBarIconListType } from "@/types/invitationWrite/toolBar";
import { createContext, ReactNode, useContext, useState } from "react";

type ToolBarContextType = {
  selectedTool: toolBarIconListType | undefined;
  setSelectedTool: (index: number) => void;
  toolBarContent: toolBarIconListType[];
  setToolBarContent: (content: toolBarIconListType[]) => void;
};

const ToolBarContext = createContext<ToolBarContextType | undefined>(undefined);

export const ToolBarProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTool, setSelectedTool] = useState<
    toolBarIconListType | undefined
  >(undefined);
  const [toolBarContent, setToolBarContent] =
    useState<toolBarIconListType[]>(NomalToolBarList);

  const handleSetSelectedTool = (index: number) => {
    const tool = toolBarContent[index];
    setSelectedTool((prev) => (prev === tool ? undefined : tool));
  };

  const handleSetToolBarContent = (content: toolBarIconListType[]) => {
    setToolBarContent(content);
    setSelectedTool(undefined);
  };

  return (
    <ToolBarContext.Provider
      value={{
        selectedTool,
        setSelectedTool: handleSetSelectedTool,
        toolBarContent,
        setToolBarContent: handleSetToolBarContent,
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
