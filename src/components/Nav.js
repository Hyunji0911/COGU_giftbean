import styled from "styled-components";

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
			<button>Home</button>
			<button>Add</button>
			<button>Settings</button>
		</NavContainer>
	);
}

export default Nav;
