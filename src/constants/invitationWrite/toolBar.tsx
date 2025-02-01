import { toolBarIconListType } from "@/types/invitationWrite/toolBar";
import ActiveA from "@assets/icons/화면GUI_Full/2424_Activate/ActiveA.svg?react";
import ActiveColor from "@assets/icons/화면GUI_Full/2424_Activate/ActiveColor.svg?react";
import ActiveGodic from "@assets/icons/화면GUI_Full/2424_Activate/ActiveGodic.svg?react";
import ActiveSerif from "@assets/icons/화면GUI_Full/2424_Activate/ActiveSerif.svg?react";
import ActiveB from "@assets/icons/화면GUI_Full/2424_Activate/B.svg?react";
import ActiveBox from "@assets/icons/화면GUI_Full/2424_Activate/Box.svg?react";
import ActiveFinder from "@assets/icons/화면GUI_Full/2424_Activate/Finder.svg?react";
import ActiveI from "@assets/icons/화면GUI_Full/2424_Activate/I.svg?react";
import ActiveImage from "@assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import ActiveLine from "@assets/icons/화면GUI_Full/2424_Activate/Line.svg?react";
import ActiveLocation from "@assets/icons/화면GUI_Full/2424_Activate/Location.svg?react";
import ActiveMap from "@assets/icons/화면GUI_Full/2424_Activate/Map.svg?react";
import ActiveS from "@assets/icons/화면GUI_Full/2424_Activate/S.svg?react";
import ActiveText from "@assets/icons/화면GUI_Full/2424_Activate/Text.svg?react";
import ActiveTimeTable from "@assets/icons/화면GUI_Full/2424_Activate/Timetable.svg?react";
import ActiveU from "@assets/icons/화면GUI_Full/2424_Activate/U.svg?react";
import ActiveVote from "@assets/icons/화면GUI_Full/2424_Activate/Vote.svg?react";
import ActiveColor2 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor2.svg?react";
import ActiveColor3 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor3.svg?react";
import ActiveColor4 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor4.svg?react";
import ActiveColor5 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor5.svg?react";
import ActiveColor6 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor6.svg?react";
import ActiveColor7 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor7.svg?react";
import ActiveColor8 from "@assets/icons/화면GUI_Full/2424_Activate/color/ActiveColor8.svg?react";
import A from "@assets/icons/화면GUI_Full/2424_Default/A.svg?react";
import B from "@assets/icons/화면GUI_Full/2424_Default/B.svg?react";
import Box from "@assets/icons/화면GUI_Full/2424_Default/Box.svg?react";
import Color from "@assets/icons/화면GUI_Full/2424_Default/Color.svg?react";
import Finder from "@assets/icons/화면GUI_Full/2424_Default/Finder.svg?react";
import I from "@assets/icons/화면GUI_Full/2424_Default/I.svg?react";
import Image from "@assets/icons/화면GUI_Full/2424_Default/Img.svg?react";
import Line from "@assets/icons/화면GUI_Full/2424_Default/Line.svg?react";
import Location from "@assets/icons/화면GUI_Full/2424_Default/Location.svg?react";
import Map from "@assets/icons/화면GUI_Full/2424_Default/Map.svg?react";
import S from "@assets/icons/화면GUI_Full/2424_Default/S.svg?react";
import Text from "@assets/icons/화면GUI_Full/2424_Default/Text.svg?react";
import TimeTable from "@assets/icons/화면GUI_Full/2424_Default/Timetable.svg?react";
import U from "@assets/icons/화면GUI_Full/2424_Default/U.svg?react";
import Vote from "@assets/icons/화면GUI_Full/2424_Default/Vote.svg?react";
import Color2 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 02.svg?react";
import Color3 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 03.svg?react";
import Color4 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 04.svg?react";
import Color5 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 05.svg?react";
import Color6 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 06.svg?react";
import Color7 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 07.svg?react";
import Color8 from "@assets/icons/화면GUI_Full/2424_Default/color/Btn_pTB_Item_Color 08.svg?react";
import Godic from "@assets/icons/화면GUI_Full/2424_Default/godic.svg?react";
import Serif from "@assets/icons/화면GUI_Full/2424_Default/serif.svg?react";
import ArrowBottom from "@assets/icons/화면GUI_Full/3232/Arrow_Bottom.svg?react";
import ArrowTop from "@assets/icons/화면GUI_Full/3232/Arrow_Top.svg?react";
import Delete from "@assets/icons/화면GUI_Full/3232/Delete.svg?react";

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

export const TextToolBarList: toolBarIconListType[] = [
  {
    type: "Font",
    defaultIcon: Godic,
    activeIcon: ActiveGodic,
  },
  {
    type: "Style",
    defaultIcon: A,
    activeIcon: ActiveA,
  },
  {
    type: "Color",
    defaultIcon: Color,
    activeIcon: ActiveColor,
  },
];

// SubToolBarList
export const SubTextToolBarList: toolBarIconListType[] = [
  {
    type: "Godic",
    defaultIcon: Godic,
    activeIcon: ActiveGodic,
  },
  {
    type: "Serif",
    defaultIcon: Serif,
    activeIcon: ActiveSerif,
  },
];

export const SubTextStyleBarList: toolBarIconListType[] = [
  {
    type: "Bold",
    defaultIcon: B,
    activeIcon: ActiveB,
  },
  {
    type: "Italic",
    defaultIcon: I,
    activeIcon: ActiveI,
  },
  {
    type: "TextLine",
    defaultIcon: S,
    activeIcon: ActiveS,
  },
  {
    type: "UnderLine",
    defaultIcon: U,
    activeIcon: ActiveU,
  },
];

export const SubColorStyleBarList: toolBarIconListType[] = [
  {
    type: "color1",
    defaultIcon: Color,
    activeIcon: ActiveColor,
  },
  {
    type: "color2",
    defaultIcon: Color2,
    activeIcon: ActiveColor2,
  },
  {
    type: "color3",
    defaultIcon: Color3,
    activeIcon: ActiveColor3,
  },
  {
    type: "color4",
    defaultIcon: Color4,
    activeIcon: ActiveColor4,
  },
  {
    type: "color5",
    defaultIcon: Color5,
    activeIcon: ActiveColor5,
  },
  {
    type: "color6",
    defaultIcon: Color6,
    activeIcon: ActiveColor6,
  },
  {
    type: "color7",
    defaultIcon: Color7,
    activeIcon: ActiveColor7,
  },
  {
    type: "color8",
    defaultIcon: Color8,
    activeIcon: ActiveColor8,
  },
];

// ArrowToolBar
export const ArrowToolBar: toolBarIconListType[] = [
  {
    type: "Bottom",
    defaultIcon: ArrowBottom,
    activeIcon: ArrowBottom,
  },
  {
    type: "Top",
    defaultIcon: ArrowTop,
    activeIcon: ArrowTop,
  },
  {
    type: "Delete",
    defaultIcon: Delete,
    activeIcon: Delete,
  },
];
