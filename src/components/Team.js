import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Accordion from "./Accordion";

const heads = [
	{
		id: 1,
		post: "Cultural Secretary",
		heads: [
			{
				name: "Aditya Jadhav",
				email: "asjadhav512@gmail.com",
				phone: "7028373062",
			},
		],
	},
	{
		id: 2,
		post: "Flashmob Coordinator",
		heads: [
			{
				name: "Vrushabh Dahikar",
				email: "rishidahikar388@gmail.com",
				phone: "9699795243",
			},
		],
	},
	{
		id: 3,
		post: "Cultural Head",
		heads: [
			{
				name: "Aniket Shekar Bhati",
				email: "abhishekbhati7219@gmail.com",
				phone: "",
			},
			{
				name: "Kajal Jora",
				email: "kajaljora90@gmail.com",
				phone: "",
			},
		],
	},
	{
		id: 4,
		post: "Database Head",
		heads: [
			{
				name: "Ayush Gundawar",
				email: "ayushgundawar21144@gmail.com",
				phone: "7219429896",
			},
			{
				name: "Chaitali Naghbidkar",
				email: "chaitalinagbhidkar@gmail.com",
				phone: "9307984568",
			},
		],
	},
	{
		id: 5,
		post: "Decoration Head",
		heads: [
			{
				name: "Trisha Kasumbiwal",
				email: "trishakasumbiwal@gmail.com",
				phone: "9359555184",
			},
			{
				name: "Vrundali Rahangdale",
				email: "rahangdalevrundali@gmail.com",
				phone: "7559126657",
			},
		],
	},
	{
		id: 6,
		post: "Design and Videography Head",
		heads: [
			{
				name: "Prajat Jibhe",
				email: "prajatjibhe@gmail.com",
				phone: "8432800636",
			},
			{
				name: "Tejas Kinge",
				email: "tejaskinge29@gmail.com",
				phone: "9146630915",
			},
		],
	},
	{
		id: 7,
		post: "Event Management Head",
		heads: [
			{
				name: "Akash Kuware",
				email: "aakashkuware@gmail.com",
				phone: "9322881266",
			},
			{
				name: "Harshal Gaikwad",
				email: "gaikwadharshal111@gmail.com",
				phone: "9356318870",
			},
		],
	},
	{
		id: 8,
		post: "Event Coordination Head",
		heads: [
			{
				name: "Pooja Parate",
				email: "poojagparate193@gmail.com",
				phone: "9403601193",
			},
			{
				name: "Anand Gadhekar",
				email: "anandgdhekar11@gmail.com",
				phone: "9175986112",
			},
		],
	},
	{
		id: 9,
		post: "Publicity Head",
		heads: [
			{
				name: "Hitesh Soni",
				email: "hitesh2002soni@gmail.com",
				phone: "9665894293",
			},
			{
				name: "Devanshu Soni",
				email: "devanshumsoni@gmail.com",
				phone: "6305229849",
			},
		],
	},
	{
		id: 10,
		post: "Social Media Head",
		heads: [
			{
				name: "Iravati Saraf",
				email: "iravati.27@gmail.com",
				phone: "9168547529",
			},
			{
				name: "Anurag Gaddamwar",
				email: "gaddamwaranurag@gmail.com",
				phone: "8080172824",
			},
		],
	},
	{
		id: 11,
		post: "Sports Head",
		heads: [
			{
				name: "Harsh Joshi",
				email: "harshsjoshi2704@gmail.com",
				phone: "8767242867",
			},
			{
				name: "Harshal Dhengale",
				email: "dhengaleharshal@gmail.com",
				phone: "9022734703",
			},
		],
	},
	{
		id: 12,
		post: "Technical Head",
		heads: [
			{
				name: "Rehan Khan Moin Raza Khan",
				email: "rehankhanbe123@gmail.com",
				phone: "8208948815",
			},
			{
				name: "Abhishek Bhoyar",
				email: "abhibhoyar141@gmail.com",
				phone: "7709869270",
			},
		],
	},
	{
		id: 13,
		post: "Sponsorship Head",
		heads: [
			{
				name: "Tanay Ajankar",
				email: "ajankartanay@gmail.com",
				phone: "9146375066",
			},
			{
				name: "Sajesh Atkare",
				email: "sajeshatkare67@gmail.com",
				phone: "9860321398",
			},
		],
	},
];

const Team = () => {
	const { ref } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);

	return (
		<motion.section ref={ref} className="bg-black py-5">
			<div className="container mx-auto">
				<motion.h2
					className="text-4xl font-bold my-4 text-center text-gray-300 font-mono"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					Our Heads Team
				</motion.h2>
				{/* <Link to="/contact-form">
					<div className="text-blue-500 underline py-4">Want to join the team ?</div>
				</Link> */}
				<motion.div
					className="mb-16"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="space-y-4">
						{heads.map((head, index) => (
							<Accordion key={index} head={head} />
						))}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Team;
