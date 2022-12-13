import styled from "styled-components";

const Button = styled.button`
  color: white;
  align-items: center;
  text-align: center;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const GreenButton = styled(Button)`
  background: #4c8c0d;
  border-radius: 5px;
  width: ${props => (props.width || '350px')};
  height: ${props => (props.height || '80px')};
  // 내부에 마진이 생기면 텍스트 길이가 달라졌을때 의도한 버튼 높이가 아니게 될수도 있음 (padding x height o)
`;

const GreenBottomButton = styled(Button)`
  background: #4c8c0d;
  width: ${props => (props.width || '390px')};;
  height: ${props => (props.height || '60px')};
`;

export { GreenButton, GreenBottomButton };
