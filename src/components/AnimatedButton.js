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
		<motion.button
			className="p-2  border w-60 mx-auto rounded-lg text-gray-200 font-semibold absolute bottom-1/4"
			variants={buttonVariants}
			animate="animate"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link to="./TimeLine" className="link">
				Explore the Timeline
			</Link>
		</motion.button>
	</div>
);

export default AnimatedButton;
