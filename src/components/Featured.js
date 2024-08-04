import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaAirbnb, FaCalculator, FaSpaceShuttle } from "react-icons/fa";

const FeatureCard = ({ icon, title, description, delay }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0 }
	);

	return (
		<motion.div
			ref={ref}
            // bg-gradient-to-br from-slate-800 to-gray-700
			className="border p-6 rounded-lg shadow-lg text-white"
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.5, delay }}
			whileHover={{
				scale: 1.03,
				boxShadow: "0 0 20px rgba(123, 31, 162, 0.5)",
			}}
		>
			<motion.div
				className="text-4xl mb-4"
				initial={{ scale: 0 }}
				animate={{scale:1}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
					delay: delay + 0.2,
				}}
			>
				{icon}
			</motion.div>
			<motion.h3
				className="text-xl font-bold mb-2"
				initial={{ opacity: 0 }}
				animate={controls}
				transition={{ delay: delay + 0.5 }}
			>
				{title}
			</motion.h3>
			<motion.p
				initial={{ opacity: 0 }}
				animate={controls}
				transition={{ delay: delay + 0.7 }}
			>
				{description}
			</motion.p>
		</motion.div>
	);
};

const Featured = () => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: -50 },
		{ opacity: 1, y: 0 }
	);

	const features = [
		{
			icon: <FaSpaceShuttle />,
			title: "Future Tech Demos",
			description: "Experience cutting-edge technology firsthand",
		},
		{
			icon: <FaCalculator />,
			title: "AI Workshops",
			description: "Learn from leading experts in artificial intelligence",
		},
		{
			icon: <FaAirbnb/>,
			title: "VR Space Exploration",
			description: "Journey through virtual galaxies",
		},
		{
			icon: <FaSpaceShuttle />,
			title: "Time Travel Simulation",
			description: "Witness the past and future through advanced simulations",
		},
	];

	return (
		<div className="container mx-auto mt-11 py-16 px-4 sm:px-6 lg:px-8">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={controls}
				transition={{ duration: 1 }}
				className="max-w-7xl mx-auto text-center"
			>
				<motion.h2
					className="text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-500 sm:text-4xl"
					initial={{ y: -50 }}
					animate={controls}
					transition={{ type: "spring", stiffness: 100 }}
				>
					Journey Through Time and Technology
				</motion.h2>
				<motion.p
					className="mt-4 text-xl bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-500"
					initial={{ y: 50 }}
					animate={controls}
					transition={{ type: "spring", stiffness: 100 }}
				>
					Discover the wonders of tomorrow at iTechRoots 14.0
				</motion.p>
			</motion.div>
			<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} delay={index * 0.2} />
				))}
			</div>
		</div>
	);
};

export default Featured;
