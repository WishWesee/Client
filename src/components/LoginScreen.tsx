import Mail from "@/assets/icons/화면GUI_Full/2424_Activate/Invitation.svg?react";
import SaveBox from "@/assets/icons/화면GUI_Full/2424_Activate/SaveBox.svg?react";
import Vote from "@/assets/icons/화면GUI_Full/2424_Activate/Vote.svg?react";
import GreetingMessage from "@/components/login/GreetingMessage";
import LoginBoxColumn from "@/components/login/LoginBoxColumn";
import LoginSection from "@/components/login/LoginSection";
import * as Style from "@/styles/login/LoginScreenPageStyle";
import React from "react";
import {
  FirstColumConstants,
  SecondColumConstants,
  greetingMessage,
} from "../constants/login/loginScreen";

const LoginScreen: React.FC = () => {
  const firstColumnFeatures = [
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

  const secondColumnFeatures = [
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

  return (
    <Style.Background>
      <Style.HeaderComp>
        <GreetingMessage message={greetingMessage.greetingMessage} />
        <LoginSection />
      </Style.HeaderComp>
      <Style.Columns>
        <LoginBoxColumn features={firstColumnFeatures} />
        <LoginBoxColumn features={secondColumnFeatures} />
      </Style.Columns>
    </Style.Background>
  );
};

export default LoginScreen;
