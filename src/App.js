import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components/Pages";
import AnimatedRoutes from "./AnimatedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop>
					<Navbar />
					<AnimatedRoutes />
					<Footer />
				</ScrollToTop>
				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					bodyClassName="toast-body"
				/>
			</div>
		</Router>
	);
}

export default App;
