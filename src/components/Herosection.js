// src/components/Hero.js
import React from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const Herosection = () => {
  return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<h1>Welcome to TechSpace</h1>
			<div className="bg-gray-900 text-white">
				<div className="container mx-auto px-4 py-16 md:py-24">
					<div className="flex flex-col items-center text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-4">
							Explore the <span className="text-blue-500">Tech</span>Universe
						</h1>
						<p className="text-xl md:text-2xl mb-8">
							Discover cutting-edge technology events and innovations
						</p>
						<Link
							to="/timeline"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
						>
							<FaRocket className="mr-2" />
							Launch Timeline
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Herosection;





