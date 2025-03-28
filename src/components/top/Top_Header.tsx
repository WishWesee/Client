import * as style from "@/styles/essentialComponents/top/TopHeaderStyle";
import HeaderLogo from "@assets/icons/Logo/HeaderLogo.svg?react";
import TwoBtnModal from "@components/top/DeleteAccountModal"; // ✅ 추가된 모달
import { FetchMyInfo } from "@/api/login/profile";
import { DeleteAccount } from "@/api/login/deleteAccount";
import { DeleteModal } from "@/constants/login/loginScreen";
import { Logout } from "@/api/login/logOut";
import SaveBox from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

type HeaderProps = {
  profileBool: boolean;
};

type MyInfoType = {
  image: string;
};

const TopHeader: React.FC<HeaderProps> = ({ profileBool }) => {
  const [myInfo, setMyInfo] = useState<MyInfoType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 프로필 모달 상태
  const [isTwoBtnModalOpen, setIsTwoBtnModalOpen] = useState(false); // ✅ 탈퇴 모달 상태
  const { isLogin, setIsLogin } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const loadInvitations = async () => {
      try {
        const data = await FetchMyInfo();
        setMyInfo(data);
        setIsLogin(true);
        console.log("Fetched Data:", data);
      } catch (error) {
        setIsLogin(false);
        console.error("Error fetching invitations:", error);
      }
    };

    loadInvitations();
  }, [setIsLogin]);

  const handleDeleteAccount = async () => {
    try {
      await DeleteAccount();
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
    }
  };

  const handleLogout =  async () => {
    try {
      await Logout();
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <style.TopHeader>
      <HeaderLogo
        className="item"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      <style.HeaderButtonWithModal>
        <style.HeaderButtonContainer>
          <SaveBox
            className="item"
            style={{ cursor: "pointer" }}
            onClick={() =>
              isLogin ? navigate("/invites") : navigate("/login")
            }
          />
          {profileBool && myInfo ? (
            <div style={{ paddingTop: "3px" }}>
              <img
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                src={myInfo.image}
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </div>
          ) : null}
        </style.HeaderButtonContainer>

        {isModalOpen && (
          <style.Modal>
            <div style={{ cursor: "pointer" }} onClick={handleLogout}>
              로그아웃
            </div>
            <div
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => setIsTwoBtnModalOpen(true)} 
            >
              탈퇴하기
            </div>
          </style.Modal>
        )}

        {isTwoBtnModalOpen && (
          <TwoBtnModal
            title="탈퇴하시겠습니까?"
            text={DeleteModal.delete}
            leftBtnText="탈퇴"
            rightBtnText="취소"
            onLeftClick={handleDeleteAccount}
            onRightClick={() => {
              setIsModalOpen(false);
              setIsTwoBtnModalOpen(false);
            }}
          />
        )}
      </style.HeaderButtonWithModal>
    </style.TopHeader>
  );
};

export default TopHeader;
