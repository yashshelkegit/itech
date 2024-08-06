import React from "react";
import { motion } from "framer-motion";
import GearIcon from "./GearIcon";

const timelineEvents = [
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
	},
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
	},
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
	},
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
	},
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
	},
	{
		year: "03/08/2024",
		title: "Blood Donation Camp",
		description: "Donated 8 liters of blood together",
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
				<h2 className="text-center md:text-5xl text-3xl font-extrabold font-mono text-green-600 md:p-4 p-2 ">
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
