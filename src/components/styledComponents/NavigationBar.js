import styled from "styled-components";
import { Link } from "react-router-dom";
import NavHomeImg from "../../assets/NavHomeImg.svg"
import NavSettingsImg from "../../assets/NavSettingsImg.svg"
import NavPlusImg from "../../assets/NavPlusImg.svg"

const NavContainer = styled.div`
	box-sizing: border-box;
	width: 390px;
	height: 60px;
	background-color: #89BF15;
	display: flex;
	align-items: center;
	justify-content: space-between;
    padding: 0px 25px;
    box-shadow: 0 -5px 5px -5px rgba(35,67,24,0.5);

`;
const Button = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
    transform: translateY(-0.8px);
  }
`
const AddButton = styled.div`
    border: none;
    width:72px;
    height:76px;
    margin-bottom: 35px;
    border-radius: 50%;
    background-color: #EAFFCA;
    box-shadow: 0 2px 2px 2px rgba(35,67,24,0.15);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
    transform: translateY(-0.8px);
  }
`

function NavigationBar() {
	return (
		<NavContainer>
			<Link to="/">
			  <Button><img alt="Home Button" src={NavHomeImg} /></Button>
			</Link>
			<Link to="/add">
              <AddButton><img alt="Add Button" src={NavPlusImg} height="38"/></AddButton>
			</Link>
            <Link to="/SettingsPage">
              <Button><img alt="Settings Button" src={NavSettingsImg} height="36" /></Button>
            </Link>
		</NavContainer>
	);
}

export default NavigationBar;