import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: yellowgreen;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function Nav() {
  return (
    <NavContainer>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/add">
        <button>Add</button>
      </Link>
      <Link to="/settings">
        <button>SettingsPage</button>
      </Link>
    </NavContainer>
  );
}

export default Nav;
