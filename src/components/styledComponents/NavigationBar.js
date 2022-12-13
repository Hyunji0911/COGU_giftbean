import styled from "styled-components";
import { Link } from "react-router-dom";
import NavHomeImg from "../../assets/NavHomeImg.svg";
import NavSettingsImg from "../../assets/NavSettingsImg.svg";
import NavPlusImg from "../../assets/NavPlusImg.svg";

const NavContainer = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 60px;
  background-color: #89bf15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px;
  box-shadow: 0 -5px 5px -5px rgba(35, 67, 24, 0.5);
`;
const Button = styled(Link)`
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  transition: all 0.5s ease-out;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-1.2px);
  }
`;
const AddButton = styled(Button)`
  width: 72px;
  height: 76px;
  margin-bottom: 35px;
  border-radius: 50%;
  background-color: #eaffca;
  box-shadow: 0 2px 2px 2px rgba(35, 67, 24, 0.15);
`;

function NavigationBar() {
  return (
    <NavContainer>
      <Button to="/">
        <img alt="Home Button" src={NavHomeImg} />
      </Button>
      <AddButton to="/add">
        <img alt="Add Button" src={NavPlusImg} height="38" />
      </AddButton>
      <Button to="/SettingsPage">
        <img alt="Settings Button" src={NavSettingsImg} height="36" />
      </Button>
    </NavContainer>
  );
}

export default NavigationBar;
