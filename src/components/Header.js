import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: yellowgreen;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return <HeaderContainer>Header</HeaderContainer>;
}

export default Header;
