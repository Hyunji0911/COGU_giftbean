import React from "react";
import Logo_row from "../assets/Logo_row.svg";
import { GreenButton } from "../components/styledComponents/GreenButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SettingPageContainer = styled.div`
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .header-logo {
    margin-top: 20px;
  }

  .welcome-text {
    width: 264px;
    height: 40px;
    background-color: #f4ffe4;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    margin-top: 83px;
    margin-bottom: 20px;
  }

  .copyright {
    font-size: 12px;
    margin-bottom: 93px;
    margin-top: 33px;
  }

  .isUseBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 100px;
    & div:first-child {
      font-size: 32px;
      font-weight: 500;
    }
    & div:last-child {
      font-size: 20px;
    }
  }

  .isUseBox-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 80px;
  }

  .setting-button {
    margin-bottom: 40px;
  }
`;

const LogoutButton = styled.button`
  width: 160px;
  height: 40px;
  background-color: #a72800;
  color: #ffffff;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 80px;
`;

function SettingsPage() {
  return (
    <div>
      <SettingPageContainer>
        <img className="header-logo" alt="header logo" src={Logo_row}></img>
        <p className="welcome-text">웰콩, 스푼0911님!</p>
        <div className="isUseBox-container">
          <div className="isUseBox">
            <div>20</div>
            <div>사용 가능</div>
          </div>
          <div className="isUseBox">
            <div>8</div>
            <div>사용 완료</div>
          </div>
        </div>
        <Link to="/userinfoedit">
          <GreenButton className="setting-button">설정</GreenButton>
        </Link>
        <Link to="/used">
          <GreenButton>사용한 기프티콘</GreenButton>
        </Link>
        <LogoutButton>로그아웃</LogoutButton>
        <p className="copyright">Copyright by COGU uZZUgo juZZUgo</p>
      </SettingPageContainer>
    </div>
  );
}

export default SettingsPage;
