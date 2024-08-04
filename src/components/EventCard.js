import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event, controls }) => {
	return (
		<motion.div
			className="bg-gradient-to-t from-gray-700 to-gray-900 rounded-lg shadow-lg overflow-hidden transition duration-300"
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
				<h3 className="text-xl text-gray-100 font-bold mb-2">{event.title}</h3>
				<p className="text-gray-200 mb-4">{event.description}</p>
				{(event.category==='past')? '':<a
					href={event.formLink}
					target="_blank"
					rel="noopener noreferrer"
					className="shadow-lg px-4 py-2 rounded text-white transition duration-300 bg-gradient-to-r from-blue-500 to-purple-600"
				>
					Register now
				</a>}
			</div>
		</motion.div>
	);
};

export default EventCard;
