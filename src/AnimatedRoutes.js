
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Herosection, Events, Timeline, Contact, Home, CoreTeam, GalleryPage } from "./components/Pages";


const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<>
							<Herosection />
						</>
					}
				/>
				<Route path="/home" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/timeline" element={<Timeline />} />
				{/* <Route path="/team" element={<Team />} /> */}
				<Route path="/coreteam" element={<CoreTeam />} />
				<Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contacts" element={<Contact/>}/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
