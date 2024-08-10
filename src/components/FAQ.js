import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const initialProps = { opacity: 0, y: 100 };
const inViewProps = { opacity: 1, y: 0 };

const faqItems = [
	  {
		  question: "What is iTechRoots?",
		  answer:
			  "At iTechRoots 14.0, we are dedicated to fostering a vibrant community of IT enthusiasts, professionals, and visionaries. Our mission is to provide a platform that brings together the brightest minds in the Information Technology landscape to explore, share, and shape the future of technology.",
	  },
	  {
		  question: "How can I join iTechRoots?",
		  answer:
			  "Join iTechRoots by actively participating in our events and initiatives. Check our Events page for updates on workshops, hackathons, and projects. Get engaged and showcase your skills to make a mark in the tech community.",
	  },
	  {
		  question: "What kind of events does iTechRoots organize?",
		  answer:
			  "iTechRoots 14.0 offers a diverse range of activities including Hackathons, Quiz Mania, Web Design Jam, and E-sports tournaments. Participate in chess, futsal, box cricket, volleyball, Treasure Hunt, Atrangi dance competitions, and expert workshops.",
	  },
	  {
		  question: "How can I contact iTechRoots?",
		  answer:
			  "You can reach us via our Contact Page, email at itechroots.it@gmail.com, or through our Instagram handle @itechroots_14.0 For any inquiries, feedback, or support, we're here to help!",
	  },
  ];
const FAQ = () => {
  const { ref, controls } = useScrollAnimation(initialProps, inViewProps);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
		<motion.div
			className="p-8"
			ref={ref}
			animate={controls}
			transition={{ duration: 1 }}
		>
			<div className="container mx-auto">
				<h2 className="text-3xl font-mono text-gray-300 tracking-widest font-extrabold mb-6">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqItems.map((item, index) => (
						<motion.div
							key={index}
							className="border-b border-gray-200 p-2 rounded-md"
							initial={false}
							onClick={() => toggleQuestion(index)}
							animate={{
								backgroundColor: activeIndex === index ? "" : "#000",
							}}
							transition={{ duration: 0.3 }}
						>
							<button
								className="flex justify-between items-center w-full text-left"
								onClick={() => toggleQuestion(index)}
							>
								<span className="text-lg p-2 text-gray-300 font-semibold">
									{item.question}
								</span>
								<div className="p-2 text-gray-300">
									{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
								</div>
							</button>
							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.1 }}
										className="mt-2 p-2"
									>
										<p className="text-gray-400">{item.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default FAQ;