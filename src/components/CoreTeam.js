import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const members = [
	{
		name: "Varsha Pisaram Bramhankar",
		phone: "8080946005",
		email: "varshabramhankar94@gmail.com",
		post: "President CSI",
	},
	{
		name: "Harshdeep Namdeo Ambule",
		phone: "8080122182",
		email: "ambuleharshdeep@gmail.com",
		post: "President SPIRIT & AURA",
	},
	{
		name: "Samarth Pankaj Sharma",
		phone: "8669105871",
		email: "samarthsharma722@gmail.com",
		post: "President SPIRIT & AURA",
	},
	{
		name: "Manaswi Jayant Padole",
		phone: "7262887773",
		email: "manaswipadole76@gmail.com",
		post: "Vice President CSI",
	},
	{
		name: "Gunjan Chandrakant Palsapure",
		phone: "8767220696",
		email: "gunjanpalsapure16@gmail.com",
		post: "Vice President SPIRIT",
	},
	{
		name: "Sahil Nishad Ninawe",
		phone: "8767993086",
		email: "sahilninawe302@gmail.com",
		post: "Vice President AURA",
	},
	{
		name: "Yashkumar Chandrashekhar Joshi",
		phone: "9579958721",
		email: "yashj1213@gmail.com",
		post: "Secretary CSI",
	},
	{
		name: "Abhishek Arun Ghule",
		phone: "7057530377",
		email: "abhishekghule012@gmail.com",
		post: "Secretary CSI",
	},
	{
		name: "Nikhil Nitin Kannawar",
		phone: "8999207318",
		email: "nikhilkannawar9@gmail.com",
		post: "Secretary SPIRIT",
	},
	{
		name: "Kartik Arvind Pohekar",
		phone: "9766376251",
		email: "kartikpoh@gmail.com",
		post: "Secretary AURA",
	},
	{
		name: "Chinmay Piyush Nandgaonkar",
		phone: "7620407357",
		email: "nandgaonkar33@gmail.com",
		post: "Treasurer",
	},
	{
		name: "Kedar Poul",
		phone: "7972254823",
		email: "kedarpoul123@gmail.com",
		post: "Joint Secretary",
	},
	{
		name: "Somesh Anish Sharma",
		phone: "9561442224",
		email: "sharmasomesh2611@gmail.com",
		post: "Joint Secretary",
	},
	{
		name: "Prutha Raut",
		phone: "7038123771",
		email: "prutha.mraut16@gmail.com",
		post: "Joint Secretary",
	},
	{
		name: "Sandesh Shinde",
		phone: "9209159056",
		email: "sandesh.99.shinde@gmail.com",
		post: "Joint Treasurer",
	},
];


const PersonCard = ({ person, index }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.4 } }
	);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			className="border border-gray-500 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
		>
			<h3 className="text-xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 font-bold mb-2">{person.name}</h3>
			<p className="text-gray-200 mb-1">{person.post}</p>
			<p className="text-gray-500 mb-1">
				{person.phone}
			</p>
			<a
				href={`mailto:${person.email}`}
				className="text-blue-500 hover:underline"
			>
				{person.email}
			</a>
		</motion.div>
	);
};

const CoreTeam = () => {
	const { ref } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);

	return (
		<motion.section ref={ref} className="bg-black py-5">
			<div className="container mx-auto">
				<motion.h2
					className="text-5xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					Our Core Team
				</motion.h2>

				<motion.div
					className=" mb-16"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{members.map((head, index) => (
							<PersonCard key={index} person={head} index={index} />
						))}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default CoreTeam;
