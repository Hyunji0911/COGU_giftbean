import styled from "styled-components";
import { Link } from "react-router-dom";
import Left_arrow from "../../assets/Left_arrow.svg";

const Button = styled(Link)`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 20px;
  top: 20px;
  img {
    height: 13.7px;
  }
`;
function BackButton({ linkTo }) {
  return (
    <Button to={linkTo}>
      <img alt="뒤로가기버튼" src={Left_arrow} />
    </Button>
  );
}

export default BackButton;
