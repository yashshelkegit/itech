
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Herosection, Events, Team, Timeline, Contact, Sponsers, Gallery } from "./components/Pages";

import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";


const images = [
	{ src: img1, alt: "Description 1" },
	{ src: img2, alt: "Description 2" },
	{ src: img3, alt: "Description 3" },
	{ src: img4, alt: "Description 4" },
	{ src: img5, alt: "Description 5" },
];


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
							<Sponsers/>
							<Gallery images={images}/>
						</>
					}
				/>
				<Route path="/events" element={<Events />} />
				<Route path="/team" element={<Team />} />
				<Route path="/timeline" element={<Timeline />} />
                <Route path="/contacts" element={<Contact/>}/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
