import React from "react";
import Logo from "../assets/Logo.svg";
import {
  TextInput,
  TextInputCenter,
} from "../components/styledComponents/Input";
import {
  GreenButton,
  GreenBottomButton,
} from "../components/styledComponents/GreenButton";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 390px;
  height: 844px;
  border: solid 1px blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function LoginPage() {
  return (
    <main>
      <LoginContainer>
        <img alt="Logo" src={Logo}></img>
        <div>
          <TextInputCenter type="email" placeholder="이메일" />
          <TextInputCenter type="password" placeholder="비밀번호" />
          <button>
            <GreenButton> 이메일로 로그인하기 </GreenButton>{" "}
          </button>
          <button>
            <GreenButton> 처음이신가요? </GreenButton>
          </button>
        </div>
      </LoginContainer>
    </main>
  );
}
export default LoginPage;
