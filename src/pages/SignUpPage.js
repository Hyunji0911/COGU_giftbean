import React from "react";
import Logo from "../assets/Logo.svg";

function SignUpPage() {
  return (
    <div>
      SignUpPage <img alt="Logo" src={Logo}></img>
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
