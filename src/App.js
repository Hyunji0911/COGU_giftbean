import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import AddGifticon from "./pages/AddGifticon";
import EditGifticon from "./pages/EditGifticon";
import UsedGifticon from "./pages/UsedGifticon";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import UserInfoEditPage from "./pages/UserInfoEditPage";
import ComponentTestPage from "./pages/ComponentTestPage";
import NavigationBar from "./components/styledComponents/NavigationBar";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
  	font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
		letter-spacing: -2%;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}
  ul, ol, li{
    list-style-type: none;
  }

  a{
    color: #000;
  }
`;

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<GlobalStyle />
				<nav>
					<li>
						<Link to="/">Main</Link>
					</li>
					<li>
						<Link to="/add">Add Gifticon</Link>
					</li>
					<li>
						<Link to="/edit">Edit Gifticon</Link>
					</li>
					<li>
						<Link to="/used">Used Gifticon</Link>
					</li>
					<li>
						<Link to="/loading">LoadingPage</Link>
					</li>
					<li>
						<Link to="/login">LoginPage</Link>
					</li>
					<li>
						<Link to="/signup">SignUpPage</Link>
					</li>
					<li>
						<Link to="/settings">SettingsPage</Link>
					</li>
					<li>
						<Link to="/userinfoedit">UserInfoEditPage</Link>
					</li>
					<li>
						<Link to="/componenttest">ComponentTestPage</Link>
					</li>
				</nav>
				<div className="main-container">
					<main>
						<Routes>
							<Route
								path="/"
								element={<Main />}
							/>
							<Route
								path="/add"
								element={<AddGifticon />}
							/>
							<Route
								path="/edit"
								element={<EditGifticon />}
							/>
							<Route
								path="/used"
								element={<UsedGifticon />}
							/>
							<Route
								path="/loading"
								element={<LoadingPage />}
							/>
							<Route
								path="/login"
								element={<LoginPage />}
							/>
							<Route
								path="/signUp"
								element={<SignUpPage />}
							/>
							<Route
								path="/settings"
								element={<SettingsPage />}
							/>
							<Route
								path="/userinfoedit"
								element={<UserInfoEditPage />}
							/>
							<Route
								path="/componenttest"
								element={<ComponentTestPage />}
							/>
						</Routes>
					</main>
					<nav>
						<NavigationBar />
					</nav>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
