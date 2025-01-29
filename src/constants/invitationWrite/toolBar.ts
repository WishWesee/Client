import { toolBarIconListType } from "@/types/invitationWrite/toolBar";
import ActiveBox from "@assets/icons/화면GUI_Full/2424_Activate/Box.svg?react";
import ActiveFinder from "@assets/icons/화면GUI_Full/2424_Activate/Finder.svg?react";
import ActiveImage from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import ActiveLine from "@assets/icons/화면GUI_Full/2424_Activate/Line.svg?react";
import ActiveLocation from "@assets/icons/화면GUI_Full/2424_Activate/Location.svg?react";
import ActiveMap from "@assets/icons/화면GUI_Full/2424_Activate/Map.svg?react";
import ActiveText from "@assets/icons/화면GUI_Full/2424_Activate/Text.svg?react";
import ActiveTimeTable from "@assets/icons/화면GUI_Full/2424_Activate/Timetable.svg?react";
import ActiveVote from "@assets/icons/화면GUI_Full/2424_Activate/Vote.svg?react";
import Box from "@assets/icons/화면GUI_Full/2424_Default/Box.svg?react";
import Finder from "@assets/icons/화면GUI_Full/2424_Default/Finder.svg?react";
import Image from "@assets/icons/화면GUI_Full/2424_Default/Img.svg?react";
import Line from "@assets/icons/화면GUI_Full/2424_Default/Line.svg?react";
import Location from "@assets/icons/화면GUI_Full/2424_Default/Location.svg?react";
import Map from "@assets/icons/화면GUI_Full/2424_Default/Map.svg?react";
import Text from "@assets/icons/화면GUI_Full/2424_Default/Text.svg?react";
import TimeTable from "@assets/icons/화면GUI_Full/2424_Default/Timetable.svg?react";
import Vote from "@assets/icons/화면GUI_Full/2424_Default/Vote.svg?react";

export const NomalToolBarList: toolBarIconListType[] = [
  {
    type: "Text",
    defaultIcon: Text,
    activeIcon: ActiveText,
  },
  {
    type: "Line",
    defaultIcon: Line,
    activeIcon: ActiveLine,
  },
  {
    type: "Image",
    defaultIcon: Image,
    activeIcon: ActiveImage,
    title: "사진",
  },
  {
    type: "Box",
    defaultIcon: Box,
    activeIcon: ActiveBox,
    title: "박스",
  },
  {
    type: "TimeTable",
    defaultIcon: TimeTable,
    activeIcon: ActiveTimeTable,
    title: "타임테이블",
  },
];

export const LocationToolBarList: toolBarIconListType[] = [
  {
    type: "Address",
    defaultIcon: Location,
    activeIcon: ActiveLocation,
    title: "주소만 보기",
  },
  {
    type: "Map",
    defaultIcon: Map,
    activeIcon: ActiveMap,
    title: "맵 보기",
  },
  {
    type: "ReSearch",
    defaultIcon: Finder,
    activeIcon: ActiveFinder,
    title: "다시 검색",
  },
];

export const DateToolBarList: toolBarIconListType[] = [
  {
    type: "Vote",
    defaultIcon: Vote,
    activeIcon: ActiveVote,
    title: "투표",
  },
];
