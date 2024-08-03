import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const initialProps = { opacity: 0, y: -100 };
const inViewProps = { opacity: 2, y: 0 };

const Footer = () => {
	const { ref, controls } = useScrollAnimation(initialProps, inViewProps);

	return (
		<motion.div
			className="p-8 bg-amber-100 grid gap-2"
			ref={ref}
			animate={controls}
			transition={{ duration: 1 }}
		>
			<div className="container mx-auto flex flex-col justify-between">
				<div>
					<h3 className="text-3xl font-mono tracking-widest font-extrabold">
						We R iTechRoots
					</h3>
					<h4 className="text-sm ">IT Dept @ YCCE, Nagpur</h4>
				</div>
				<p className="text-sm mt-11">
					Made with 🖤 by <a href="mailto:contact.yashshelke@gmail.com" className="underline">Yash Shelke</a>
				</p>
			</div>
		</motion.div>
	);
};

export default Footer;
