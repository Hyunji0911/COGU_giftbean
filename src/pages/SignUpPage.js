import React from "react";
import giftbeanLogo from "../Logo.png";

function SignUpPage() {
  return (
    <div>
      SignUpPage <img alt="Logo" src={giftbeanLogo}></img>
      <div>
        <input placeholder="이름" />
        <input placeholder="이메일" />
        <input placeholder="비밀번호" />
        <input placeholder="비밀번호 확인" />
      </div>
      <button>가입하기</button>
    </div>
  );
}
export default SignUpPage;
