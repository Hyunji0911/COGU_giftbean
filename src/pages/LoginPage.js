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
    </main>
  );
}
export default LoginPage;


