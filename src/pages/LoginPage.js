import React from "react";
import giftbeanLogo from "../Logo.png";

function LoginPage() {
  return (
    <main>
      <img alt="Logo" src={giftbeanLogo}></img>
      <div>
        <input placeholder="example@mail.com" />
        <input placeholder="password" />
      </div>

      <button>이메일로 로그인하기</button>
      <button>처음이신가요?</button>
    </main>
  );
}
export default LoginPage;

// 1. 시멘틱하지 않다 ** >> 1. DX / 2.SEO (next.js가 핫한 이유)
// 2. 생각 이상으로 쪼개야 한다 >> 유효성 검사를 고려한
// 3. 지금 코드 유지보수 힘들다
// input에 들어온 값들을 handle하는 함수들을 많이 만들텐데 "hook"
// ** Layout Shift ** 검색해보기
