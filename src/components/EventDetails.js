import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
// import { eventData } from "./Events";

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

const EventDetails = () => {
	const { id } = useParams();
	const event = eventData[id];
	const pageVariants = {
		initial: { opacity: 0, x: "-100vw" },
		in: { opacity: 1, x: 0 },
		out: { opacity: 0, x: "100vw" },
	};

	const pageTransition = {
		type: "tween",
		ease: "anticipate",
		duration: 0.5,
	};

	return (
		<div className="bg-black py-16">
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="container mx-auto px-4 py-8"
			>
				<Link
					to="/events"
					className="text-blue-500 hover:underline mb-4 inline-block"
				>
					&larr; Back to Events
				</Link>
				<div className="bg-slate-900 text-gray-200 rounded-lg shadow-lg p-6">
					<h1 className="text-3xl font-bold mb-4">{event.title}</h1>
					<p className="py-2 capitalize text-green-500">
						<strong>{event.category} Event</strong>
					</p>
					<img
						src={event.image}
						alt={event.title}
						className="w-full h-64 object-cover rounded-lg mb-4"
					/>
					<p className="text-gray-400 mb-4">{event.description}</p>
					<div className="mb-4">
						<h2 className="text-xl font-semibold mb-2">Event Details</h2>
						<p>
							<strong>Date:</strong> {event.date}
						</p>
					</div>
					<div className="mb-4">
						<h2 className="text-xl font-semibold mb-2">Organizer Details</h2>
						<p>
							<strong>Name:</strong> {event.organizer.name}
						</p>
						<p>
							<strong>Email:</strong> {event.organizer.email}
						</p>
						<p>
							<strong>Phone:</strong> {event.organizer.phone}
						</p>
					</div>
					{event.category !== "past" && (
						<motion.a
							href={event.formLink}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block border text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Register Now
						</motion.a>
					)}
				</div>
			</motion.div>
		</div>
	);
};

export default EventDetails;
