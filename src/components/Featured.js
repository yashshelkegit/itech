import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaCalculator, FaCapsules } from "react-icons/fa";
import img1 from '../images/10.jpeg'
import img2 from '../event-pics/1.jpg'

const FeatureCard = ({ icon, title, description, delay, image }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0 }
	);

	return (
		<motion.div
			ref={ref}
			className="border border-gray-300 p-6 rounded-lg shadow-lg text-white overflow-hidden"
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.5, delay }}
			whileHover={{
				scale: 1.03,
				boxShadow: "0 0 20px rgba(123, 31, 162, 0.5)",
			}}
		>
			<div className="flex flex-col md:flex-row md:items-end">
				<div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
					<motion.img
						src={image}
						alt={title}
						className="sm:w-full sm:h-48 object-cover rounded-lg"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					/>
				</div>
				<div className="md:w-1/2">
					<motion.div
						className="text-4xl mb-4"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						{icon}
					</motion.div>
					<motion.h3
						className="text-xl font-bold mb-2"
						initial={{ opacity: 0 }}
						animate={controls}
					>
						{title}
					</motion.h3>
					<motion.p initial={{ opacity: 0 }} animate={controls}>
						{description}
					</motion.p>
				</div>
			</div>
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
			icon: <FaCapsules />,
			title: "Blood Donation",
			description: "Over 100+ members contributors and also got featured bt Lokmat Times",
			image: img1
		},
		{
			icon: <FaCalculator />,
			title: "Workshops",
			description: "Learn from leading experts in artificial intelligence",
			image: img2
		},
	];

	return (
		<div className="container mx-auto mt-11 px-4 sm:px-6 lg:px-8">
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
					Discover the wonders at iTechRoots 14.0
				</motion.p>
			</motion.div>
			<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} delay={index * 0.1} />
				))}
			</div>
		</div>
	);
};

export default Featured;
