import React from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import giftbeanLogo from "../Logo.png";

function LoadingPage() {
  return (
    <div>
      <img alt="Logo" src={giftbeanLogo}></img>
      <LoadingIndicator />
    </div>
  );
}

export default LoadingPage;

// 상위 컬렉션은 하나
// 도큐 유저의 아이디
// 필드 : 값
