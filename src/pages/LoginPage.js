import React from "react";
import Logo from "../assets/Logo.svg";


function LoginPage() {
  return (
    <main>
      <img alt="Logo" src={Logo}></img>
      <div>
        <input placeholder="example@mail.com" />
        <input placeholder="password" />
      </div>
    </main>
  );
}
export default LoginPage;


