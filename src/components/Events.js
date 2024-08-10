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
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);
	useEffect(()=>{
		notifyEvent();
	},[])

	return (
		<section ref={ref} className="bg-black py-24">
			<GearIcon size={730} initialRotation={0} position={1} />
			<div className="container mx-auto px-4 md:px-0">
				<motion.h2
					className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 font-mono"
					initial={{ opacity: 0, y: 50 }}
					animate={controls}
					transition={{ duration: 0.5 }}
				>
					Events
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
export {eventData};
