import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";
import SponsorMarquee from "./SponsorMarquee";

const headingVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const Sponsors = () => {
	const controls = useAnimation();
	const headingControls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: false });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
			headingControls.start("visible");
		} else {
			controls.start("hidden");
			headingControls.start("hidden");
		}
	}, [inView, controls, headingControls]);

	return (
		<div className="w-screen md:container p-4 py-12 z-30">
			<motion.h2
				className=" bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-purple-500 text-4xl text-center font-bold mb-8 z-50 font-mono"
				variants={headingVariants}
				initial="hidden"
				animate={headingControls}
				ref={ref}
			>
				Our Sponsors
			</motion.h2>
			<SponsorMarquee/>
			<div className="text-center my-4">
				<motion.h2
					className=" text-gray-300 text center p-3 text-md z-50 font-mono"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					Sponser vibrant community of over 1200 students at YCCE, Nagpur
				</motion.h2>
				<Link
					to="/contact-form"
					className="text-blue-500 font-bold hover:underline"
				>
					Sponser now
				</Link>
			</div>
		</div>
	);
};


export default Sponsors;
