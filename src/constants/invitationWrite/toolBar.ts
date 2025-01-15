import { toolBarIconListType } from "@/types/invitationWrite/toolBar";
import ActiveBox from "@assets/icons/화면GUI_Full/2424_Activate/Box.svg?react";
import ActiveImage from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import ActiveLine from "@assets/icons/화면GUI_Full/2424_Activate/Line.svg?react";
import ActiveText from "@assets/icons/화면GUI_Full/2424_Activate/Text.svg?react";
import ActiveTimeTable from "@assets/icons/화면GUI_Full/2424_Activate/Timetable.svg?react";
import Box from "@assets/icons/화면GUI_Full/2424_Default/Box.svg?react";
import Image from "@assets/icons/화면GUI_Full/2424_Default/Img.svg?react";
import Line from "@assets/icons/화면GUI_Full/2424_Default/Line.svg?react";
import Text from "@assets/icons/화면GUI_Full/2424_Default/Text.svg?react";
import TimeTable from "@assets/icons/화면GUI_Full/2424_Default/Timetable.svg?react";

export const TOOLBARICONLIST: toolBarIconListType[] = [
  {
    defaultIcon: Text,
    activeIcon: ActiveText,
  },
  {
    defaultIcon: Line,
    activeIcon: ActiveLine,
  },
  {
    defaultIcon: Image,
    activeIcon: ActiveImage,
    title: "사진",
  },
  {
    defaultIcon: Box,
    activeIcon: ActiveBox,
    title: "박스",
  },
  {
    defaultIcon: TimeTable,
    activeIcon: ActiveTimeTable,
    title: "타임테이블",
  },
];
