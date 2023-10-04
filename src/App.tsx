import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/customComponents/header/header";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";



function App() {
	return (
		<BrowserRouter>
			{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Header />}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
