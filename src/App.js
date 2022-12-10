import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import GifticonForm from "./components/GifticonForm";
import GifticonDetailModal from "./components/GifticonDetailModal";
import Main from "./pages/Main";
import AddGifticon from "./pages/AddGifticon";
import EditGifticon from "./pages/EditGifticon";
import UsedGifticon from "./pages/UsedGifticon";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import UserInfoEditPage from "./pages/UserInfoEditPage";

// ! git branch 테스트입니다.

function App() {
	return (
		<BrowserRouter>
			<div>
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
						<Link to="/LoadingPage">LoadingPage</Link>
					</li>
					<li>
						<Link to="/LoginPage">LoginPage</Link>
					</li>
					<li>
						<Link to="/SignUpPage">SignUpPage</Link>
					</li>
					<li>
						<Link to="/SettingsPage">SettingsPage</Link>
					</li>
					<li>
						<Link to="/UserInfoEditPage">UserInfoEditPage</Link>
					</li>
				</nav>
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
						path="/LoadingPage"
						element={<LoadingPage />}
					/>
					<Route
						path="/LoginPage"
						element={<LoginPage />}
					/>
					<Route
						path="/SignUpPage"
						element={<SignUpPage />}
					/>
					<Route
						path="/SettingsPage"
						element={<SettingsPage />}
					/>
					<Route
						path="/UserInfoEditPage"
						element={<UserInfoEditPage />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
