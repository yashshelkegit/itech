import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const initialProps = { opacity: 0, y: 100 };
const inViewProps = { opacity: 1, y: 0 };

const FAQ = () => {
  const { ref, controls } = useScrollAnimation(initialProps, inViewProps);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is iTechRoots?",
      answer: "iTechRoots is the IT Department at YCCE, Nagpur. We are dedicated to fostering innovation and technological growth among our students."
    },
    {
      question: "How can I join iTechRoots?",
      answer: "You can join iTechRoots by participating in our events and initiatives. Keep an eye on our Events page for upcoming opportunities."
    },
    {
      question: "What kind of events does iTechRoots organize?",
      answer: "We organize a variety of events including hackathons, workshops, tech talks, and coding competitions. Check our Events page for more details."
    },
    {
      question: "How can I contact iTechRoots?",
      answer: "You can reach out to us through our Contact page or by emailing us at itechroots.it@gmail.com"
    }
  ];

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