import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import EventCard from "./EventCard";
import GearIcon from "./GearIcon";
import unstop from "../sponsors/unstop.webp"

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
				<div className="flex items-center sm:gap-5 gap-2 py-6">
					<div>
						<motion.h2 className="sm:text-3xl text-2xl inli font-bold text-gray-300 font-mono">
							Events{" "}
							<span className="text-gray-400 bg-clip-text text-transparent font-bold bg-gradient-to-r from-gray-500 to-white">
								powered by
							</span>
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="inline-block my-auto"
					>
						<img
							src={unstop}
							alt="Unstop"
							className="sm:h-8 h-7 rounded-full animate-pulse"
						/>
					</motion.div>
				</div>
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
