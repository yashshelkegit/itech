import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event, controls }) => {
	return (
		<motion.div
			className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
			initial={{ opacity: 0, y: 50 }}
			whileHover={{ scale: 1.03 }}
			animate={controls}
		>
			<img
				src={event.image}
				alt={event.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{event.title}</h3>
				<p className="text-gray-600 mb-4">{event.description}</p>
				{(event.category==='past')? '':<a
					href={event.formLink}
					target="_blank"
					rel="noopener noreferrer"
					className="shadow-lg bg-orange-400 px-4 py-2 rounded hover:bg-orange-600 text-white transition duration-300"
				>
					Register now
				</a>}
			</div>
		</motion.div>
	);
};

export default EventCard;
