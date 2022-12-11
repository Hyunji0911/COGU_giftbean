import React from "react";
import Nav from "../components/Nav";
import Logo_row from "../assets/Logo_row.svg";
function SettingsPage() {
  return (
    <div>
      <img alt="header logo" src={Logo_row}></img>
      <p>웰콩, 스푼0911님!</p>
      <div>
        <div>
          <div className="usuable">20</div>
          <div>사용 가능</div>
        </div>
        <div className="used">8</div>
        <div>사용 완료</div>
      </div>
      <button>설정</button>
      <button>사용한 기프티콘</button>
      <button>로그아웃</button>
      <p>Copyright by COGU uZZUgo juZZUgo</p>
      <Nav />
    </div>
  );
}

export default SettingsPage;
