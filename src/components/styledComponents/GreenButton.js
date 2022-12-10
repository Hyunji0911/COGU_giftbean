import styled from "styled-components";

const GreenButton = styled.button`
  background: #4C8C0D;
  border-radius: 5px;
  width:350px;
  height: 80px;
  line-height: 29px;
    // 내부에 마진이 생기면 텍스트 길이가 달라졌을때 의도한 버튼 높이가 아니게 될수도 있음 (padding x height o)

  color: white;
  align-items: center;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 20px;
  border: none;
`
const GreenBottomButton = styled.button`
    background: #4C8C0D;
    width: 390px;
    height:60px;
    line-height: 34.75px;
    
    color: white;
    align-items: center;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-weight: 700;
    font-size: 24px;
    border: none;

`


export {GreenButton, GreenBottomButton}