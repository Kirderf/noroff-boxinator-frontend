import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/customComponents/header/header";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/customComponents/footer/Footer";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import { KeyCLoakProvider } from "./context/KeyCloakContext";


function App() {

	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen">

				<KeyCLoakProvider>
					{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Header />}
					<div className="grow bg-background-color">
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route path="/signin" element={<SignInPage />} />
							<Route path="/signup" element={<SignUpPage />} />
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/admin" element={<AdminPage />} />
							<Route path="/product/:id" element={<ProductDetailPage />} />
							<Route path="/checkout" element={<CheckoutPage />} />
						</Routes>
					</div>
					{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Footer />}
				</KeyCLoakProvider>

			</div>
		</BrowserRouter>
	);
}

export default App;
