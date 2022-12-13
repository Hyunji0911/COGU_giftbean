import { React, useState } from "react";
import styled from "styled-components";
import LoadingIndicator from "../components/LoadingIndicator";
import Logo from "../assets/Logo.svg";
const LoadingPageWrapper = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  padding-top: 280px;
`;

function LoadingPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingPageWrapper>
      <img alt="Logo" src={Logo}></img>
      <LoadingIndicator />
      {/* {isLoading ? <LoadingIndicator /> : <LoadingIndicator />} */}
    </LoadingPageWrapper>
  );
}

export default LoadingPage;
