import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
	animate: {
		scale: [1, 1.1, 1], // Keyframes for scaling
		boxShadow: [
			"0 0 0px rgba(0, 0, 0, 0.0)",
			"0 0 15px rgba(0, 0, 0, 0.7)",
			"0 0 0px rgba(0, 0, 0, 0.0)",
		], // Keyframes for glowing effect
		transition: {
			duration: 2, // Duration of the entire animation cycle
			repeat: Infinity, // Repeat the animation indefinitely
			ease: "easeInOut", // Easing function for smooth animation
		},
	},
};

const AnimatedButton = () => (
	<motion.button
		className="p-2  border w-60 mx-auto rounded-lg text-gray-800 font-semibold"
		variants={buttonVariants}
		animate="animate"
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
	>
		<Link to="./TimeLine" className="link">
			Explore the Timeline
		</Link>
	</motion.button>
);

export default AnimatedButton;
