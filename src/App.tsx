import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/customComponents/header/header";
import LandingPage from "./pages/LandingPage";



function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
