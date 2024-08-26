import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { notifyParticipate } from "./notify";

const EventCard = ({ event, index }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0 }
	);

	return (
		<motion.div
			ref={ref}
			className="border grid border-gray-700 backdrop-filter backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition duration-300"
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.5 }}
		>
			<Link to={`/events/${index + 1}`} onClick={notifyParticipate}>
				<motion.img
					src={event.image}
					alt={event.title}
					className="w-full h-48 object-cover"
					initial={{ opacity: 0 }}
					animate={controls}
					transition={{ delay: 0.2 }}
				/>
				<motion.div
					className="p-4 flex flex-col justify-between"
					initial={{ opacity: 0 }}
					animate={controls}
					transition={{ delay: 0.4 }}
				>
					<h3 className="text-xl text-gray-300 font-bold mb-2">
						{event.title}
					</h3>
					<p className="capitalize text-white">
						Prize Pool 🏆:{" "}
						<span className="text-green-500 font-bold">{event.price.pool}</span>
					</p>

					<p className="capitalize text-blue-300 mb-4">
						{event.category} Event
					</p>
					<p className="text-gray-400 mb-4">{event.description}</p>
					
					<div className="grid">
						<button className="text-white border-b bg-gray-800 rounded-lg p-2">
							See Details
						</button>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default EventCard;
