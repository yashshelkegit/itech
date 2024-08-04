import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
	animate: {
		scale: [1, 1.1, 1], 
		boxShadow: [
			"0 0 0px rgba(255, 255, 255, 0.0)",
			"0 0 15px rgba(255, 255, 255, 0.7)",
			"0 0 0px rgba(255, 255, 255, 0.0)",
		], 
		transition: {
			duration: 2, 
			repeat: Infinity, 
			ease: "easeInOut", 
		},
	},
};

const AnimatedButton = () => (
	<div className="flex justify-center">
		<motion.div
			className=" w-52 mx-auto rounded-lg text-gray-200 font-semibold absolute bottom-1/4"
			variants={buttonVariants}
			animate="animate"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link
				to="./home"
				className="link p-2 text-center border w-52 rounded-lg text-gray-200 font-semibold absolute bottom-1/4 shadow-md shadow-gray-500"
			>
				Explore
			</Link>
		</motion.div>
	</div>
);

export default AnimatedButton;
