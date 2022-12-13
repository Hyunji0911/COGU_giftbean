import styled from "styled-components";
import React from "react";
import Logo from "../assets/Logo.svg";
import { TextInputCenter } from "../components/styledComponents/Input";
import { GreenButton } from "../components/styledComponents/GreenButton";
import BackButton from "../components/styledComponents/BackButton";
const SignUpContainer = styled.div`
  border: solid 1px red;
  width: 390px;
  height: 844px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img{
    padding-top: 110px;
  }
`;
const SignUpHeader = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
`;
const SignUpFooter = styled.div`
  height: 116px;
`;
const SignUpWrapper = styled.div`
  /* border: solid 1px blue; */
  height: 361px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ValidationWrapper = styled.div``;
const Validation = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #a72800;
  margin-top: 1px;
`;

// 611 116 117

function SignUpPage() {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <BackButton linkTo={"/login"} />
      </SignUpHeader>

      <img alt="Logo" src={Logo}></img>
      <SignUpWrapper>
        <TextInputCenter placeholder="이름" />
        <ValidationWrapper>
          <TextInputCenter type="email" placeholder="이메일" />
          <Validation>이메일 형식이 올바른지 확인하세요.</Validation>
        </ValidationWrapper>
        <ValidationWrapper>
          <TextInputCenter type="password" placeholder="비밀번호" />
          <Validation>
            최소 8자 이상 / 영문,숫자,특수기호를 포함해야 합니다.
          </Validation>
        </ValidationWrapper>
        <ValidationWrapper>
          <TextInputCenter type="password" placeholder="비밀번호 확인" />
          <Validation>비밀번호 입력이 올바르지 않습니다.</Validation>
        </ValidationWrapper>
      </SignUpWrapper>

      <GreenButton>가입하기</GreenButton>
      <SignUpFooter />
    </SignUpContainer>
  );
}
export default SignUpPage;
