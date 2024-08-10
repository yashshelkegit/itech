import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import logo1 from "../logo/1.jpeg";
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
					<img
						src={logo1}
						alt="iTechRoots Logo"
						className="rounded-full w-16 h-16 mb-4 border border-gray-600"
					/>
					<h3 className="text-3xl font-mono tracking-widest font-extrabold">
						We R iTech<span className="text-green-500">Roots</span>
					</h3>
					<div className="flex text-2xl gap-3 py-5">
						<a href="asl" className="text-green-500">
							<FaWhatsapp />
						</a>
						<a href="asl" className="text-blue-500">
							<FaLinkedin />
						</a>
						<a href="asl" className="text-pink-500">
							<FaInstagram />
						</a>
					</div>
					<h4 className="text-sm">IT Dept @ YCCE, Nagpur</h4>
					<Link to="/contact-form" className="text-blue-400">
						Contact Us
					</Link>
				</div>

				<div className="text-sm border-t pt-3 border-gray-600">
					<p className="inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
						<Link to='admin' className="cursor-text">Developed</Link> with ❤️ by{" "}
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
