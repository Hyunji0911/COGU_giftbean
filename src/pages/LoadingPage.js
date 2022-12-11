import React from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import Logo from "../assets/Logo.svg";

function LoadingPage() {
  return (
    <div>
      <img alt="Logo" src={Logo}></img>
      <LoadingIndicator />
    </div>
  );
}

export default LoadingPage;

// 상위 컬렉션은 하나
// 도큐 유저의 아이디
// 필드 : 값
