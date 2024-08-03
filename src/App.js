import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Navbar} from "./components/Pages";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
        <AnimatedRoutes/>
				{/* ... other components and routes */}
			</div>
		</Router>
	);
}

export default App;
