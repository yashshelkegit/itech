import React, { useEffect } from "react";
import { motion } from "framer-motion";
import GearIcon from "./GearIcon";
import { notifyTimeline } from "./notify";

const timelineEvents = [
	{
		year: "07/08/2024",
		title: "Blood Donation Camp",
		description:
			"Organized a blood donation camp where over 100+ members contributed and got featured by Lokmat Times",
	},
	{
		year: "23/08/2024",
		title: "Coding Hackathon",
		description:
			"A coding hackathon focused on innovative problem-solving.",
	},
	{
		year: "23/08/2024",
		title: "Extra Curricular Events",
		description:
			"Poster designing, Box cricket, Futsal, Chess, E-Sports, and Valorant.",
	},
	{
		year: "To be announced",
		title: "Technical Workshop",
		description: "Conducted a workshop on Web Development and Cloud Computing.",
	},
	{
		year: "24/08/2024",
		title: "Exciting Events",
		description:
			"Fix-a-thon, Quiz Mania, Quiz Mania, Beat the Mark, Arm Wrestling, Mystic Rythm and Web Design jam",
	},
	{
		year: "25/08/2024",
		title: "Pirates Map (Treasure Hunt)",
		description:
			"An event full of adventure and exciting cash prices, Explore is the key",
	},
];


const Timeline = () => {
	useEffect(()=>{
		notifyTimeline();
	},[])
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
				<h2 className="text-center md:text-4xl text-3xl font-extrabold font-mono bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-purple-500 md:p-4 p-2 ">
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
