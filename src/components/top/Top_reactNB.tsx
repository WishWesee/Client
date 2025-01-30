import React from "react";
import Arrow_Left from "@/assets/icons/화면GUI_Line/2020/Arrow_Left.tsx";
import * as style from "@/styles/essentialComponents/top/TopReactNBStyles";

type NBProps = {
  Back: string;
  Front: string;
  Color?: string;
  onBackClick?: () => void;
  onFrontClick?: () => void;
};

const ReactNB: React.FC<NBProps> = ({ Back, Front, Color = "blue", onBackClick, onFrontClick }) => {

  return (
    <style.TopReactNB className={Color === "white" ? "white" : undefined}>
      <style.BtnRNBack className={Color === "white" ? "white" : undefined} onClick={onBackClick}>
        {Color === "white" ? <Arrow_Left stroke="#FCFCFD" /> : <Arrow_Left />}
        {Back}
      </style.BtnRNBack>
      {Front !== "null" ? (
        <style.BtnRNSave
          className={Color === "blue" ? "" : "white"}
          onClick={onFrontClick} // Front 클릭 시 콜백 호출
        >
          {Front}
        </style.BtnRNSave>
      ) : null}
    </style.TopReactNB>
  );
};

export default ReactNB;
