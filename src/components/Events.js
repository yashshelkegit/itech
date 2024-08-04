import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import EventCard from "./EventCard";
import GearIcon from "./GearIcon";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";

const eventData = [
	{
		title: "Quantum Computing Summit",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img1,
		formLink: "https://forms.google.com/quantumcomputing2023",
		category: "past",
		date: "01/12/2024",
	},
	{
		title: "AI Ethics Symposium",
		description:
			"Discuss the ethical implications of artificial intelligence in society.",
		image: img2,
		formLink: "https://forms.google.com/aiethics2023",
		category: "past",
		date: "01/12/2024",
	},
	{
		title: "Space Exploration Conference",
		description:
			"Join astronauts and space agency representatives to learn about upcoming missions.",
		image: img3,
		formLink: "https://forms.google.com/spaceexploration2024",
		category: "ongoing",
		date: "01/12/2024",
	},
	{
		title: "Cybersecurity Hackathon",
		description:
			"Test your skills against other hackers in this 48-hour cybersecurity challenge.",
		image: img4,
		formLink: "https://forms.google.com/cyberhackathon2024",
		category: "ongoing",
		date: "01/12/2024",
	},
	{
		title: "Biotechnology Innovation Fair",
		description:
			"Discover groundbreaking advancements in biotechnology and genetic engineering.",
		image: img5,
		formLink: "https://forms.google.com/biotechfair2024",
		category: "upcoming",
		date: "01/12/2024",
	},
	{
		title: "Virtual Reality Developer Conference",
		description:
			"Learn about the latest VR technologies and development techniques.",
		image: img6,
		formLink: "https://forms.google.com/vrdevcon2024",
		category: "upcoming",
		date: "01/12/2024",
	},
];

const eventCategories = [
	{
		title: "Upcoming Events",
		events: eventData.filter((event) => event.category === "upcoming"),
	},
	{
		title: "Ongoing Events",
		events: eventData.filter((event) => event.category === "ongoing"),
	},
	{
		title: "Past Events",
		events: eventData.filter((event) => event.category === "past"),
	},
];

const Events = () => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);

	return (
		<section ref={ref} className="bg-black py-16">
			<GearIcon size={730} initialRotation={0} position={1} />
			<div className="container mx-auto px-4">
				{eventCategories.map((category, index) => (
					<div key={index} className="mt-16">
						<motion.h2
							className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 font-mono"
							initial={{ opacity: 0, y: 100 }}
							animate={controls}
							transition={{ duration: 0.5 }}
						>
							{category.title}
						</motion.h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{category.events.map((event, eventIndex) => (
								<EventCard key={eventIndex} event={event} controls={controls} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Events;
