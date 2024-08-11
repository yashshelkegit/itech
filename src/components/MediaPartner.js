import React from "react";
import { motion } from "framer-motion";
import lokmat from "../sponsors/lokmat.jpeg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const MediaPartner = () => {
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
				<h2 className="text-4xl text-center font-bold text-gray-300 mb-6">
					Media Partner
				</h2>
				<div className="flex flex-col items-center bg-gray-100 p-5 rounded-md">
					<img
						src={lokmat}
						alt="Lokmat Times Logo"
						className="h-auto md:w-1/2 mb-4 md:mr-6"
					/>
					<div className="text-center">
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							Lokmat Times
						</h3>
						<p className="text-gray-600 mb-4">
							Media partner of our Departmental fest
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MediaPartner;
