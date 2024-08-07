import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Section = ({
	title,
	description,
	buttonText,
	route,
	bgGradient,
	initialX,
}) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, x: initialX },
		{ opacity: 1, x: 0 }
	);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			transition={{ duration: 1 }}
			className={`${bgGradient} rounded-lg shadow-lg overflow-hidden m-4 max-w-3xl mx-auto`}
		>
			<Link
				to={route}
				className="block hover:bg-opacity-90 transition duration-300 p-4"
			>
				<motion.h2
					className="text-3xl font-bold text-white mb-4"
					initial={{ x: initialX }}
					animate={controls}
					transition={{ duration: 1 }}
				>
					{title}
				</motion.h2>
				<motion.p
					className="text-gray-200 mb-4"
					initial={{ x: initialX }}
					animate={controls}
					transition={{ duration: 1 }}
				>
					{description}
				</motion.p>
					<button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
						{buttonText}
					</button>
				<motion.div
					className="mt-6"
					initial={{ scale: 0 }}
					animate={controls}
					transition={{ delay: 0.5, type: "spring" }}
				>
				</motion.div>
			</Link>
		</motion.div>
	);
};

const RouteAccess = () => {
	return (
		<div className="container md:flex gap-5  mx-auto px-5 py-12">
			<div>
				<h1 className="text-4xl font-bold font-mono bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-300 mb-8">
					Participate Now
				</h1>
				<Section
					title="Explore Events"
					description="Discover upcoming tech gatherings and workshops that help you stay ahead of the curve in the tech world. From coding bootcamps to networking events, find opportunities to expand your skills and knowledge. Engage with experts, enthusiasts, and peers to build a robust network and learn from the best in the industry."
					buttonText="View Events"
					route="/events"
					// bgGradient="bg-gradient-to-r from-purple-800 to-indigo-900"
					bgGradient="border"
					initialX={-100}
				/>
			</div>
			<div>
				<h1 className="text-4xl mt-16 font-bold font-mono bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-300 mb-8">
					Confused with Timings ?
				</h1>
				<Section
					title="Journey through tech"
					description="Experience the evolution of technology from its inception to the modern day. Delve into the history of significant tech milestones, innovations, and the visionaries who shaped the digital landscape. Learn about the transformative events and groundbreaking discoveries that have revolutionized the way we live, work, and communicate."
					buttonText="Explore Timeline"
					route="/timeline"
					bgGradient="border "
					initialX={-100}
				/>
			</div>
		</div>
	);
};

export default RouteAccess;
