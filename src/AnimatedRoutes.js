
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Herosection, Events, Timeline, Contact, Home, GalleryPage, EventDetails, ContactForm, TeamTab } from "./components/Pages";
import AdminDashboard from "./components/AdminDashboard";


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
				<Route path="/coreteam" element={<TeamTab />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/contacts" element={<Contact />} />
				{/* <Route path="/events/:id" component={<EventDetails/>} /> */}
				<Route path="/events/:id" element={<EventDetails/>} />
				<Route path="/contact-form" element={<ContactForm/>} />
				<Route path="/admin" element={<AdminDashboard/>} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
