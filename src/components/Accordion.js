import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Accordion = ({ head }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.4 } }
	);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			className="border border-gray-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
		>
			<div
				className="flex items-center justify-between cursor-pointer p-6"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="text-xl text-gray-200 font-bold">{head.post}</h3>
				<motion.svg
					className="h-6 w-6 text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					animate={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</motion.svg>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						style={{ overflow: "hidden" }}
						className=""
					>
						{head.heads.map((h, index) => (
							<div key={index} className="p-6">
								<h4 className="text-gray-200 font-bold">{h.name}</h4>
								<p className="text-gray-300">
									Email:{" "}
									<a
										href={`mailto:${h.email}`}
										className="text-blue-400 hover:underline"
									>
										{h.email}
									</a>
								</p>
								{/* <p className="text-gray-600">
									Phone:{" "}
									<a
										href={`tel:${h.phone}`}
										className="text-blue-500 hover:underline"
									>
										{h.phone}
									</a>
								</p> */}
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Accordion;