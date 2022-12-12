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

const GapBox = styled.div`
width: 390px;
height: 60px;
`;

const LoginInput = styled(TextInputCenter)`
  margin-top: 20px;
`;

const LoginButton = styled(GreenButton)`
  margin-top: 20px;
  height: 46px;
`;

const Validation = styled.div`
  width: 230px;
  height: 20px;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #a72800;
`;

function LoginPage() {
  return (
    <main>
      <LoginContainer>
        <img alt="Logo" src={Logo}></img>
        <GapBox/>
        <LoginInput type="email" placeholder="example@mail.com" />
        <LoginInput type="password" placeholder="password" />
        <Validation> 아이디/비밀번호가 올바르지 않습니다. </Validation>
        <LoginButton> 이메일로 로그인하기 </LoginButton>{" "}
        <LoginButton> 처음이신가요? </LoginButton>
      </LoginContainer>
    </main>
  );
}
export default LoginPage;
