import React from "react";
import styled,{ keyframes } from "styled-components";

const spinner = keyframes`
    from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

const Spin = styled.div `
  
  margin: 100px auto 0 auto; ;
  width: 60px;
  height: 60px;
  border: 20px solid rgba(137, 191, 21, 0.2);
  border-top: 20px solid rgba(137, 191, 21, 1);
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`
export default function LoadingIndicator() {
  return( 
  <div>
    
    
    <Spin></Spin>
  </div>
  )
}