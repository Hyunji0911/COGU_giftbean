import React from "react";
import Logo from "../assets/Logo.svg";
import {TextInput, TextInputCenter} from "../components/styledComponents/Input"

function SignUpPage() {
  return (
    <div>
      SignUpPage <img alt="Logo" src={Logo}></img>
      <div>
        <TextInputCenter placeholder="이름" />
        <TextInputCenter type="email" placeholder="이메일" />
        <TextInputCenter type="password" placeholder="비밀번호" />
        <TextInputCenter placeholder="비밀번호 확인" />
      </div>
      <button>가입하기</button>
    </div>
  );
}
export default SignUpPage;
