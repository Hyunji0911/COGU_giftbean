import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import GifticonForm from "./components/GifticonForm";
import GifticonDetailModal from "./components/GifticonDetailModal";
import Main from "./pages/Main";
import AddGifticon from "./pages/AddGifticon";
import EditGifticon from "./pages/EditGifticon";
import UsedGifticon from "./pages/UsedGifticon";

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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
