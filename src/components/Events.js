import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import EventCard from "./EventCard";
import GearIcon from "./GearIcon";

import eventData from "./eventData";
import { notifyEvent } from "./notify";

const Events = () => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5 } }
	);
	useEffect(() => {
		notifyEvent();
	}, []);

	return (
		<section ref={ref} className="bg-black py-24">
			<GearIcon size={730} initialRotation={0} position={1} />
			<div className="container mx-auto px-4 md:px-0">
						<motion.h2 className="py-4 text-3xl font-bold text-gray-300 font-mono">
							Events{" "}
						</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{eventData.map((event, eventIndex) => (
						<EventCard
							key={eventIndex}
							event={event}
							index={eventIndex}
							controls={controls}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
export { eventData };
