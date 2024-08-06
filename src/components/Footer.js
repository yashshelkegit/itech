import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

import logo1 from "../logo/1.jpeg";
import logo2 from "../logo/2.png";
import logo3 from "../logo/3.png";
import logo4 from "../logo/4.png";
import { Link } from "react-router-dom";

const initialProps = { opacity: 0, y: 50 };
const inViewProps = { opacity: 1, y: 0 };

const Footer = () => {
	const { ref, controls } = useScrollAnimation(initialProps, inViewProps);

	return (
		<motion.footer
			className="p-8 bg-gray-900 text-white"
			ref={ref}
			animate={controls}
			transition={{ duration: 1 }}
		>
			<div className="container mx-auto">
				<div className="flex flex-col mb-8">
					<img src={logo1} alt="iTechRoots Logo" className="w-24 h-24 mb-4 border border-gray-600" />
					<h3 className="text-3xl font-mono tracking-widest font-extrabold">
						We R iTech<span className="text-green-500">Roots</span>
					</h3>
					<h4 className="text-sm">IT Dept @ YCCE, Nagpur</h4>
					<Link to="/contacts" className="text-blue-400">
						Contact Us
					</Link>
				</div>

				<div className="mb-4">
					<h5 className="text-cl text-gray-300 font-semibold">
						In Association With
					</h5>
					<div className="flex items-center border-b border-gray-500">
						<img
							src={logo2}
							alt="Association Logo 2"
							className="w-24 h-24 md:w-40 md:h-40"
						/>
						<img
							src={logo4}
							alt="Association Logo 4"
							className="w-14 h-14 md:w-28 md:h-32"
						/>
						<img
							src={logo3}
							alt="Association Logo 3"
							className="w-14 h-14 md:w-32 md:h-32"
						/>
					</div>
				</div>

				<div className="">
					<p className="inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
						Made with ❤️ by{" "}
					</p>
					<a
						href="https://www.linkedin.com/in/yashshelke/"
						className="underline text-green-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Yash Shelke
					</a>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
