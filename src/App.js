import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Footer, Navbar, ScrollToTop} from "./components/Pages";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop>
					<Navbar />
					<AnimatedRoutes />
					<Footer/>
				</ScrollToTop>
				{/* ... other components and routes */}
			</div>
		</Router>
	);
}

export default App;
