// src/components/ComingSoon.jsx

import React from "react";
import { motion } from "framer-motion";

const stars = Array.from({ length: 100 }, () => ({
	x: Math.random() * 100,
	y: Math.random() * 100,
	delay: Math.random() * 2,
}));

const ComingSoon = () => {
	return (
		<div className="relative w-full h-screen overflow-hidden bg-black">
			{stars.map((star, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: star.delay,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="absolute bg-white rounded-full"
					style={{
						width: "2px",
						height: "2px",
						top: `${star.y}%`,
						left: `${star.x}%`,
					}}
				/>
			))}

			{/* Time Travel Effect */}
			<motion.div
				className="absolute w-full h-full"
				initial={{ opacity: 0, scale: 1 }}
				animate={{ opacity: [0.5, 0], scale: [1, 1.5] }}
				transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
				style={{
					background:
						"radial-gradient(circle, transparent, rgba(255,255,255,0.1), black)",
				}}
			/>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
				<motion.h1
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					className="text-6xl font-bold font-mono tracking-wider bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-gray-900"
				>
					Coming Soon
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 text-xl text-gray-500 font-mono"
				>
					Get ready to explore the future and beyond!
				</motion.p>
			</div>
		</div>
	);
};

export default ComingSoon;
