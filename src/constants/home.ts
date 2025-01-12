import Invitation from "@assets/images/5454/Invitation.svg?react";
import Vote from "@assets/images/5454/Vote.svg?react";
import Savebox from "@assets/images/5454/Savebox.svg?react";

import SigninCardImg1 from "@assets/images/Home/SigninCardImg1.png";
import SigninCardImg2 from "@assets/images/Home/SigninCardImg2.png";
import SigninCardImg3 from "@assets/images/Home/SigninCardImg3.png";

export const FeaturesText = [
  {
    id: 1,
    icon: Invitation,
    title: "초대장 작성",
    content:
      "나만의 카드를 고른 뒤, 초대에 대해 소개하고\n기대와 설렘을 담아 초대장을 보내보세요.",
  },
  {
    id: 2,
    icon: Vote,
    title: "모두를 위한 초대장",
    content:
      "일정 투표로 초대할 사람들과 함께 시간을 정하고,\n참석 여부 선택으로 올 수 있는지 알아보세요.",
  },
  {
    id: 3,
    icon: Savebox,
    title: "나의 초대장",
    content:
      "모임에 대한 짧은 후기를 남기고,\n초대장들을 모아보며 추억을 간직할 수 있어요.",
  },
];

export const UsageText = [
  {
    id: 1,
    img: SigninCardImg1,
    content: `마음에 쏙 드는 <span>카드</span>를 골라보세요!`,
    color: "var(--Grey5)",
  },
  {
    id: 2,
    img: SigninCardImg2,
    content: `언제 어디서 만나나요?\n다양한 기능들로 <span>초대장을 알차게 채워보세요!</span>`,
    color: "var(--Blue5)",
  },
  {
    id: 3,
    img: SigninCardImg3,
    content: `초대장을 전달하면, 우리만의 특별한 <span>초대 시작!</span>`,
    color: "var(--Blue10)",
  },
];
