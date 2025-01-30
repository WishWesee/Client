import Mail from "@/assets/icons/화면GUI_Full/2424_Activate/Invitation.svg?react";
import SaveBox from "@/assets/icons/화면GUI_Full/2424_Activate/SaveBox.svg?react";
import Vote from "@/assets/icons/화면GUI_Full/2424_Activate/vote.svg?react";
import GreetingMessage from "@/components/login/GreetingMessage";
import LoginBoxColumn from "@/components/login/LoginBoxColumn";
import LoginSection from "@/components/login/LoginSection";
import * as Style from "@/styles/login/LoginScreenPageStyle";
import React, { useState, useEffect } from "react";
import {
  FirstColumConstants,
  SecondColumConstants,
  greetingMessage,
} from "../constants/login/loginScreen";

const LoginScreen: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  

  const MobilefirstColumnFeatures = [
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle2",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: FirstColumConstants.txt_Feature, //3
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: FirstColumConstants.txt_Feature2, //4
      subtitle: FirstColumConstants.txt_Feature_Sub2,
      Icon: SaveBox as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle5",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle6",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const MobilesecondColumnFeatures = [
    {
      title: "Rectangle7",
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 46.59, height: 45 },
    },
    {
      title: "Rectangle8",
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 46.59, height: 45 },
    },
    {
      title: SecondColumConstants.txt_Feature,
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 46.59, height: 45 },
    },
    {
      title: "Rectangle10",
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 46.59, height: 45 },
    },
    {
      title: "Rectangle11",
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 46.59, height: 45 },
    },
  ];

  const TabletFirstColumnFeatures = [
    {
      title: "Rectangle3",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: FirstColumConstants.txt_Feature, //3
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 50, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const TabletSecondColumnFeatures = [
    {
      title: "Rectangle2",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: SecondColumConstants.txt_Feature,
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 50, height: 45 },
    },
    {
      title: "Rectangle5",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const TabletThirdColumnFeatures = [
    {
      title: "Rectangle3",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: FirstColumConstants.txt_Feature2, //4
      subtitle: FirstColumConstants.txt_Feature_Sub2,
      Icon: SaveBox as React.FC<{ width: number; height: number }>,
      iconSize: { width: 50, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const PCFirstColumnFeatures = [
    {
      title: "Rectangle2",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle5",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle5",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const PCSecondColumnFeatures = [
    {
      title: "Rectangle3",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: FirstColumConstants.txt_Feature, //3
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 65, height: 65 },
    },
    {
      title: FirstColumConstants.txt_Feature2, //4
      subtitle: FirstColumConstants.txt_Feature_Sub2,
      Icon: SaveBox as React.FC<{ width: number; height: number }>,
      iconSize: { width: 65, height: 65 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const PCThirdColumnFeatures = [
    {
      title: "Rectangle2",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: SecondColumConstants.txt_Feature,
      subtitle: SecondColumConstants.txt_Feature_Sub,
      Icon: Vote as React.FC<{ width: number; height: number }>,
      iconSize: { width: 65, height: 65 },
    },
    {
      title: "Rectangle5",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const PCFourthColumnFeatures = [
    {
      title: "Rectangle3",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
    {
      title: "Rectangle1",
      subtitle: FirstColumConstants.txt_Feature_Sub,
      Icon: Mail as React.FC<{ width: number; height: number }>,
      iconSize: { width: 45, height: 45 },
    },
  ];

  const renderColumns = () => {
    if (windowWidth < 768) {
      return (
        <>
          <LoginBoxColumn features={MobilefirstColumnFeatures} />
          <LoginBoxColumn features={MobilesecondColumnFeatures} />
        </>
      );
    } else if (windowWidth < 1200) {
      return (
        <>
          <LoginBoxColumn features={TabletFirstColumnFeatures} />
          <LoginBoxColumn features={TabletSecondColumnFeatures} />
          <LoginBoxColumn features={TabletThirdColumnFeatures} />
        </>
      );
    } else {
      return (
        <>
          <LoginBoxColumn features={PCFirstColumnFeatures} />
          <LoginBoxColumn features={PCSecondColumnFeatures} />
          <LoginBoxColumn features={PCThirdColumnFeatures} />
          <LoginBoxColumn features={PCFourthColumnFeatures} />
        </>
      );
    }
  };

  return (
    <Style.Background>
      <Style.HeaderComp>
        <GreetingMessage message={greetingMessage.greetingMessage} />
        <LoginSection />
      </Style.HeaderComp>
      <Style.Columns>{renderColumns()}</Style.Columns>
    </Style.Background>
  );
};

export default LoginScreen;
