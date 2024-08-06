import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import EventCard from "./EventCard";
import GearIcon from "./GearIcon";
import img1 from "../posters/1.jpeg";
import img2 from "../posters/2.jpeg";
import img3 from "../posters/3.jpeg";
import img4 from "../posters/4.jpeg";
import img5 from "../posters/5.jpeg";
import img6 from "../posters/6.jpeg";

const eventData = [
	{
		id: 1,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img1,
		formLink: "https://forms.google.com/hackathon",
		category: "past",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXX XXXXX",
		},
	},
	{
		id: 2,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img2,
		formLink: "https://forms.google.com/hackathon",
		category: "past",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	{
		id: 3,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img3,
		formLink: "https://forms.google.com/hackathon",
		category: "past",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	{
		id: 4,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img4,
		formLink: "https://forms.google.com/hackathon",
		category: "upcoming",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	{
		id: 5,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img5,
		formLink: "https://forms.google.com/hackathon",
		category: "upcoming",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	{
		id: 6,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img6,
		formLink: "https://forms.google.com/hackathon",
		category: "ongoing",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	{
		id: 7,
		title: "Web Design",
		description:
			"Explore the future of computing with leading quantum physicists and engineers.",
		image: img2,
		formLink: "https://forms.google.com/hackathon",
		category: "ongoing",
		date: "01/12/2024",
		organizer: {
			name: "yash",
			email: "info@gmail.com",
			phone: "+91 XXXXXXXXXX",
		},
	},
	// {
	// 	title: "AI Ethics Symposium",
	// 	description:
	// 		"Discuss the ethical implications of artificial intelligence in society.",
	// 	image: img2,
	// 	formLink: "https://forms.google.com/aiethics2023",
	// 	category: "past",
	// 	date: "01/12/2024",
	// },
	// {
	// 	title: "Space Exploration Conference",
	// 	description:
	// 		"Join astronauts and space agency representatives to learn about upcoming missions.",
	// 	image: img3,
	// 	formLink: "https://forms.google.com/spaceexploration2024",
	// 	category: "ongoing",
	// 	date: "01/12/2024",
	// },
	// {
	// 	title: "Cybersecurity Hackathon",
	// 	description:
	// 		"Test your skills against other hackers in this 48-hour cybersecurity challenge.",
	// 	image: img4,
	// 	formLink: "https://forms.google.com/cyberhackathon2024",
	// 	category: "ongoing",
	// 	date: "01/12/2024",
	// },
	// {
	// 	title: "Biotechnology Innovation Fair",
	// 	description:
	// 		"Discover groundbreaking advancements in biotechnology and genetic engineering.",
	// 	image: img5,
	// 	formLink: "https://forms.google.com/biotechfair2024",
	// 	category: "upcoming",
	// 	date: "01/12/2024",
	// },
	// {
	// 	title: "Virtual Reality Developer Conference",
	// 	description:
	// 		"Learn about the latest VR technologies and development techniques.",
	// 	image: img6,
	// 	formLink: "https://forms.google.com/vrdevcon2024",
	// 	category: "upcoming",
	// 	date: "01/12/2024",
	// },
];

const Events = () => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);

	return (
		<section ref={ref} className="bg-black py-24">
			<GearIcon size={730} initialRotation={0} position={1} />
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 font-mono"
					initial={{ opacity: 0, y: 50 }}
					animate={controls}
					transition={{ duration: 0.5 }}
				>
					Events
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{eventData.map((event, eventIndex) => (
						<EventCard
							key={eventIndex}
							event={event}
							index={eventIndex}
							controls={controls}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
export {eventData};
