import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo1 from "../logos/logo1.jpeg";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.jpeg";
import logo4 from "../logos/logo5.png";

const sponsors = [
	{ id: 1, name: "Sponsor One", logo: logo1 },
	{ id: 2, name: "Sponsor Two", logo: logo2 },
	{ id: 3, name: "Sponsor Three", logo: logo3 },
	{ id: 4, name: "Sponsor Four", logo: logo4 },
];

const sponsorVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	},
};

const headingVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
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
			<div className="bg-slate-900 rounded-md p-5">
				<motion.h2
					className=" text-gray-300 text-4xl font-bold mb-8 z-50 font-mono tracking-wide"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					Our Sponsors
				</motion.h2>
				<Marquee>
					{sponsors.map((sponsor) => (
						<motion.div
							key={sponsor.id}
							className="sponsor-item inline-block mx-4"
							variants={sponsorVariants}
							initial="hidden"
							animate={controls}
						>
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								className="mx-auto mb-4 h-28 w-28 object-cover rounded-full"
							/>
							<p className="text-xl font-medium text-gray-300">
								{sponsor.name}
							</p>
						</motion.div>
					))}
				</Marquee>
			</div>
		</div>
	);
};

const Marquee = ({ children }) => {
	return (
		<div className="marquee overflow-hidden whitespace-nowrap">
			<div className="marquee-content inline-block animate-marquee">
				{children}
			</div>
		</div>
	);
};

export default Sponsors;
