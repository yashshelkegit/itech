import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sponsor1 from "../sponsors/kanan.jpeg";
import sponsor2 from "../sponsors/iquanta.png";
// import sponsor3 from '../sponsors/lokmat.jpeg';
import { Link } from "react-router-dom";

const sponsors = [
	{ id: 1, name: "Kanan", logo: sponsor1 },
	{ id: 2, name: "iQuanta", logo: sponsor2 },
	// { id: 3, name: "Lokmat Times", logo: sponsor3 },
	// { id: 4, name: "Sponsor Four", logo: logo4 },
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
				className=" text-gray-300 text-4xl text-center font-bold mb-8 z-50 font-mono"
				variants={headingVariants}
				initial="hidden"
				animate={headingControls}
				ref={ref}
			>
				Our Sponsors
			</motion.h2>
			<div className="bg-slate-900 rounded-md p-3">
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
								className="mx-auto mb-1 md:h-24"
							/>
							<p className="text-center font-medium text-gray-300">
								{sponsor.name}
							</p>
						</motion.div>
					))}
				</Marquee>
			</div>
			<div className="text-center my-4">
				<motion.h2
					className=" text-gray-300 text center p-3 text-md z-50 font-mono"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					Sponser vibrant community of over 500 students at YCCE, Nagpur
				</motion.h2>
				<Link to="/contact-form" className="text-blue-500 font-bold hover:underline">
					Sponser now
				</Link>
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