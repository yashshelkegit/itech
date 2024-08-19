import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import eventData from "./eventData";
import unstop from "../sponsors/unstop.webp"

const EventDetails = () => {
	const { id } = useParams();
	const event = eventData.find((e) => e.id === parseInt(id));

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
					className="text-blue-500 hover:underline mb-4 font-bold inline-block"
				>
					&larr; Back to Events
				</Link>
				<div className=" text-gray-200 rounded-lg shadow-lg py-4">
					<h1 className="text-3xl font-bold font-mono mb-4">{event.title}</h1>
					<p className="py-2 capitalize text-green-500">
						<strong>{event.category} Event</strong>
					</p>
					<img
						src={event.image}
						alt={event.title}
						className="w-full h-64 object-cover rounded-lg mb-4"
					/>
					<p className="text-gray-400 mb-4">{event.description}</p>
					{event.id === 1 ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="flex gap-2 items-center my-auto"
						>
							<p className="py-4 text-sm">Powered By</p>
							<img
								src={unstop}
								alt="Unstop"
								className="sm:h-8 h-7 border rounded-full"
							/>
						</motion.div>
					) : (
						""
					)}
					<div className="py-4">
						{event.category !== "past" ? (
							<div className="grid gap-4 md:grid-cols-2">
								<motion.a
									href={event.formLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block border text-center text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-500 transition duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.95 }}
								>
									Register Now
								</motion.a>
								{event.rulebook === "" ? (
									<div></div>
								) : (
									<motion.a
										href={event.rulebook}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block border text-center text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-500 transition duration-300"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.95 }}
									>
										Event book
									</motion.a>
								)}
							</div>
						) : (
							<p className="text-gray-300">Sorry you are late...</p>
						)}
					</div>
					<div className="mb-4 text-gray-300">
						<h2 className="text-xl py-2 font-semibold">Event Details</h2>
						<p className="text-yellow-500">
							<strong>Winning Prices 🏆:</strong> {event.price.pool}
						</p>
						{/* <ul>
							<li><strong>1st Price :</strong> {event.price.first}</li>
							<li><strong>2nd Price :</strong> {event.price.second}</li>
						</ul> */}
						<p>
							<strong>Date :</strong> {event.date}
						</p>
						<p>
							<strong>Entry Fees :</strong> {event.entryFees}
						</p>

						<p>
							<strong>Participants :</strong> {event.memberCount}
						</p>
					</div>

					<div className="grid md:grid-cols-5 text-gray-400 border-t py-3">
						<div className="mb-4">
							<h2 className="text-xl font-semibold mb-2">Organizers</h2>
							<div className="">
								{event.organizers.map((organizer, index) => (
									<div key={index} className="mb-2">
										<p>{organizer.name}</p>
										{/* <p>
											<strong>Email:</strong> {organizer.email}
										</p> */}
										<p>
											<strong>Phone:</strong>
											<a href={`tel:${organizer.phone}`}>{organizer.phone}</a>
										</p>
									</div>
								))}
							</div>
						</div>
						<div>
							{event.coOrganizers.length > 0 && (
								<div className="mb-4">
									<h2 className="text-xl font-semibold mb-2">Co-Organizers</h2>
									<div className="">
										{event.coOrganizers.map((coOrganizer, index) => (
											<div key={index} className="mb-2">
												<p>{coOrganizer.name}</p>
												{/* <p>
													<strong>Email:</strong> {coOrganizer.email}
												</p> */}
												{/* <p>
											<strong>Phone:</strong> {coOrganizer.phone}
										</p> */}
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default EventDetails;
