import React from "react";
import { motion } from "framer-motion";
// import lokmat from "../sponsors/lokmat.jpeg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const MediaPartner = ({title, src, desc, text}) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, x: -100 },
		{ opacity: 1, x: 0 }
	);

	return (
		<div className="container mx-auto">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, x: -100 }}
				animate={controls}
				transition={{ duration: 1 }}
				className="p-6"
			>
				<h2 className="text-4xl border-b border-gray-400 p-3 text-center font-bold mb-6 font-mono bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-purple-500">
					{title}
				</h2>
				<div className="flex flex-col items-center bg-gray-100 p-5 rounded-md">
					<img
						src={src}
						alt="Lokmat Times Logo"
						className="h-14 md:w-1/2 mb-4 md:mr-6"
					/>
					<div className="text-center">
						<h3 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-2">
							{desc}
						</h3>
						<p className="text-gray-600 font-bold mb-4">
							{text}
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MediaPartner;
