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
import ProtectedElement from "./lib/ProtectedRoute";
import ScrollToTop from "./lib/ScrollToTop";



function App() {

	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen">

				<KeyCLoakProvider>
					{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Header />}
					<div className="grow bg-primary-color">
						<Routes>
							<Route path="/" element={<><ScrollToTop /><LandingPage /></>} />
							<Route path="/signin" element={<SignInPage />} />
							<Route path="/signup" element={<SignUpPage />} />
							<Route path="/profile" element={
								<ProtectedElement>
									<ProfilePage />
								</ProtectedElement>
							} />
							<Route path="/admin" element={
								<ProtectedElement roles={['ADMIN']}>
									<AdminPage />
								</ProtectedElement>
							} />
							<Route path="/product/:id" element={<><ScrollToTop /><ProductDetailPage /></>} />
							<Route path="/checkout" element={<CheckoutPage />} />
							<Route path="/not-authorized" element={<h1 className="font-bold text-3xl text-primary-color flex w-full justify-center items-center pt-10">No permission!</h1>} />
						</Routes>
					</div>
					{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Footer />}
				</KeyCLoakProvider>

			</div>
		</BrowserRouter>
	);
}

export default App;
