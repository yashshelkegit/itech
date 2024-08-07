import React from "react";
import { motion } from "framer-motion";
import GearIcon from "./GearIcon";

const timelineEvents = [
	{
		year: "08/08/2024",
		title: "Blood Donation Camp",
		description:
			"Organized a blood donation camp and collected 15 liters of blood.",
	},
	{
		year: "12/08/2024",
		title: "Coding Hackathon",
		description:
			"A 24-hour coding hackathon focused on innovative problem-solving.",
	},
	{
		year: "15/08/2024",
		title: "Guest Lecture on Blockchain",
		description:
			"An informative session on blockchain technology by industry experts.",
	},
	{
		year: "25/08/2024",
		title: "Technical Workshop",
		description: "Conducted a workshop on Web Development and Cloud Computing.",
	},
	{
		year: "12/08/2024",
		title: "Annual Cultural Events",
		description:
			"A week-long series of cultural events including music, dance, and drama.",
	},
	{
		year: "22/08/2024",
		title: "Leadership Workshop",
		description:
			"A leadership development workshop focusing on team building and management.",
	},
	{
		year: "23/08/2024",
		title: "Community Service",
		description:
			"Volunteered at a local community center, helping with various activities.",
	},
	{
		year: "25/08/2024",
		title: "Alumni Meet",
		description:
			"Organized an alumni meet to reconnect with former students and faculty.",
	},
];


const Timeline = () => {
	return (
		<motion.div
			className="bg-black"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="timeline-container">
				<GearIcon size={730} initialRotation={0} position={1} />
				{/* <GearIcon size={340} initialRotation={30} position={2} />
				<GearIcon size={150} initialRotation={15} position={3} /> */}
				<h2 className="text-center md:text-4xl text-3xl font-extrabold font-mono text-green-600 md:p-4 p-2 ">
					Fest Through Tech
				</h2>
				<div className="timeline">
					{timelineEvents.map((event, index) => (
						<motion.div
							key={index}
							className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<div className="timeline-content">
								<div className="year">{event.year}</div>
								<h3>{event.title}</h3>
								<p>{event.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Timeline;
