// import React from "react";
// import { motion } from "framer-motion";
// import useScrollAnimation from "../hooks/useScrollAnimation";

// const EventCard = ({ event }) => {
// 	const { ref, controls } = useScrollAnimation(
// 		{ opacity: 0, y: 50 },
// 		{ opacity: 1, y: 0 }
// 	);

// 	return (
// 		<motion.div
// 			ref={ref}
// 			className="border border-gray-400 backdrop-filter backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition duration-300"
// 			initial={{ opacity: 0, y: 50 }}
// 			animate={controls}
// 			whileHover={{ scale: 1.03 }}
// 			transition={{ duration: 0.5 }}
// 		>
// 			<motion.img
// 				src={event.image}
// 				alt={event.title}
// 				className="w-full h-48 object-cover"
// 				initial={{ opacity: 0 }}
// 				animate={controls}
// 				transition={{ delay: 0.2 }}
// 			/>
// 			<motion.div
// 				className="p-4"
// 				initial={{ opacity: 0 }}
// 				animate={controls}
// 				transition={{ delay: 0.4 }}
// 			>
// 				<h3 className="text-xl text-gray-100 font-bold mb-2">{event.title}</h3>
// 				<p className="text-gray-200 mb-4">{event.description}</p>
// 				{event.category !== "past" && (
// 					<motion.a
// 						href={event.formLink}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="shadow-lg px-4 py-2 rounded text-white transition duration-300 bg-gradient-to-r from-blue-500 to-purple-600"
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.95 }}
// 					>
// 						Register now
// 					</motion.a>
// 				)}
// 			</motion.div>
// 		</motion.div>
// 	);
// };

// export default EventCard;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const EventCard = ({ event, index }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0 }
	);

	return (
		<motion.div
			ref={ref}
			className="border border-gray-700 backdrop-filter backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition duration-300"
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.5 }}
		>
			<Link to={`/events/${index+1}`}>
				<motion.img
					src={event.image}
					alt={event.title}
					className="w-full h-48 object-cover"
					initial={{ opacity: 0 }}
					animate={controls}
					transition={{ delay: 0.2 }}
				/>
				<motion.div
					className="p-4"
					initial={{ opacity: 0 }}
					animate={controls}
					transition={{ delay: 0.4 }}
				>
					<h3 className="text-xl text-gray-100 font-bold mb-2">
						{event.title}
					</h3>
					<p className="capitalize text-blue-200 mb-4">{event.category} Event</p>
					<p className="text-gray-200 mb-4">{event.description}</p>
					<button className="border text-gray-400 rounded-md p-2">See Details</button>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default EventCard;