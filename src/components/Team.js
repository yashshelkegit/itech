import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const heads = [
	{
		name: "Aditya Jadhav",
		position: "Cultural Secretary",
		branch: "CSE",
		year: "3rd",
		email: "aditya.jadhav@example.com",
	},
	{
		name: "Vrushabh Dahikar",
		position: "Flashmob Coordinator",
		branch: "ECE",
		year: "2nd",
		email: "vrushabh.dahikar@example.com",
	},
	{
		name: "Aniket Shekar Bhati",
		position: "Cultural Head",
		branch: "CSE",
		year: "4th",
		email: "aniket.bhati@example.com",
	},
	{
		name: "Kajal Jora",
		position: "Cultural Head",
		branch: "ECE",
		year: "4th",
		email: "kajal.jora@example.com",
	},
	{
		name: "Ayush Gundawar",
		position: "Database Head",
		branch: "IT",
		year: "4th",
		email: "ayush.gundawar@example.com",
	},
	{
		name: "Chaitali Naghbidkar",
		position: "Database Head",
		branch: "CSE",
		year: "3rd",
		email: "chaitali.naghbidkar@example.com",
	},
	{
		name: "Trisha Kasumbiwal",
		position: "Decoration Head",
		branch: "CSE",
		year: "4th",
		email: "trisha.kasumbiwal@example.com",
	},
	{
		name: "Vrundali Rahangdale",
		position: "Decoration Head",
		branch: "ECE",
		year: "4th",
		email: "vrundali.rahangdale@example.com",
	},
	{
		name: "Prajat Jibhe",
		position: "Design and Videography Head",
		branch: "CSE",
		year: "3rd",
		email: "prajat.jibhe@example.com",
	},
	{
		name: "Tejas Kinge",
		position: "Design and Videography Head",
		branch: "IT",
		year: "3rd",
		email: "tejas.kinge@example.com",
	},
	{
		name: "Akash Kuware",
		position: "Event Management Head",
		branch: "CSE",
		year: "3rd",
		email: "akash.kuware@example.com",
	},
	{
		name: "Sajesh Atkare",
		position: "Event Management Head",
		branch: "ECE",
		year: "3rd",
		email: "sajesh.atkare@example.com",
	},
	{
		name: "Pooja Parate",
		position: "Event Coordination Head",
		branch: "CSE",
		year: "4th",
		email: "pooja.parate@example.com",
	},
	{
		name: "Rehan Khan",
		position: "Event Coordination Head",
		branch: "ECE",
		year: "4th",
		email: "rehan.khan@example.com",
	},
	{
		name: "Moin Raza Khan",
		position: "Event Coordination Head",
		branch: "IT",
		year: "4th",
		email: "moin.raza.khan@example.com",
	},
	{
		name: "Hitesh Soni",
		position: "Publicity Head",
		branch: "CSE",
		year: "3rd",
		email: "hitesh.soni@example.com",
	},
	{
		name: "Devanshu Soni",
		position: "Publicity Head",
		branch: "ECE",
		year: "3rd",
		email: "devanshu.soni@example.com",
	},
	{
		name: "Iravati Saraf",
		position: "Social Media Head",
		branch: "CSE",
		year: "4th",
		email: "iravati.saraf@example.com",
	},
	{
		name: "Anurag Gundamwar",
		position: "Social Media Head",
		branch: "ECE",
		year: "4th",
		email: "anurag.gundamwar@example.com",
	},
	{
		name: "Harsh Joshi",
		position: "Sports Head",
		branch: "CSE",
		year: "3rd",
		email: "harsh.joshi@example.com",
	},
	{
		name: "Harshal Dhengale",
		position: "Sports Head",
		branch: "ECE",
		year: "3rd",
		email: "harshal.dhengale@example.com",
	},
	{
		name: "Aniket Rakhade",
		position: "Technical Head",
		branch: "CSE",
		year: "3rd",
		email: "aniket.rakhade@example.com",
	},
	{
		name: "Abhishek Bhoyar",
		position: "Technical Head",
		branch: "ECE",
		year: "3rd",
		email: "abhishek.bhoyar@example.com",
	},
	{
		name: "Tanay Ajankar",
		position: "Sponsorship Head",
		branch: "CSE",
		year: "4th",
		email: "tanay.ajankar@example.com",
	},
	{
		name: "Harsh Meshram",
		position: "Sponsorship Head",
		branch: "ECE",
		year: "4th",
		email: "harsh.meshram@example.com",
	},
];

const coheads = [
	{
		name: "Kedar Poul",
		position: "Co-Head",
		branch: "IT",
		year: "2nd",
		email: "kedar.poul@example.com",
	},
	{
		name: "Prutha Raut",
		position: "Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "prutha.raut@example.com",
	},
	{
		name: "Somesh Sharma",
		position: "Co-Head",
		branch: "CSE",
		year: "2nd",
		email: "somesh.sharma@example.com",
	},
	{
		name: "Sandesh Shinde",
		position: "Joint Secretary",
		branch: "CSE",
		year: "3rd",
		email: "sandesh.shinde@example.com",
	},
	{
		name: "Upasna Ukey",
		position: "Joint Treasurer",
		branch: "ECE",
		year: "2nd",
		email: "upasna.ukey@example.com",
	},
	{
		name: "Vanashree Parbat",
		position: "Cultural Co-Head",
		branch: "IT",
		year: "3rd",
		email: "vanashree.parbat@example.com",
	},
	{
		name: "Nidhi Nilewar",
		position: "Cultural Co-Head",
		branch: "CSE",
		year: "2nd",
		email: "nidhi.nilewar@example.com",
	},
	{
		name: "Prasanna Punwatkar",
		position: "Database Co-Head",
		branch: "ECE",
		year: "3rd",
		email: "prasanna.punwatkar@example.com",
	},
	{
		name: "Kashmira Chaoji",
		position: "Database Co-Head",
		branch: "IT",
		year: "2nd",
		email: "kashmira.chaoji@example.com",
	},
	{
		name: "Prasad Selokar",
		position: "Decoration Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "prasad.selokar@example.com",
	},
	{
		name: "Raunak Kalamkhede",
		position: "Decoration Co-Head",
		branch: "ECE",
		year: "2nd",
		email: "raunak.kalamkhede@example.com",
	},
	{
		name: "Shruti Khathale",
		position: "Design and Videography Co-Head",
		branch: "IT",
		year: "3rd",
		email: "shruti.khathale@example.com",
	},
	{
		name: "Aditya Raut",
		position: "Design and Videography Co-Head",
		branch: "CSE",
		year: "2nd",
		email: "aditya.raut@example.com",
	},
	{
		name: "Sujal Burande",
		position: "Event Management Co-Head",
		branch: "ECE",
		year: "3rd",
		email: "sujal.burande@example.com",
	},
	{
		name: "Prabhat Bondre",
		position: "Event Management Co-Head",
		branch: "IT",
		year: "2nd",
		email: "prabhat.bondre@example.com",
	},
	{
		name: "Nishika Mohad",
		position: "Event Management Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "nishika.mohad@example.com",
	},
	{
		name: "Devanshu Bhure",
		position: "Event Coordination Co-Head",
		branch: "ECE",
		year: "2nd",
		email: "devanshu.bhure@example.com",
	},
	{
		name: "Taniya Borkar",
		position: "Event Coordination Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "taniya.borkar@example.com",
	},
	{
		name: "Parth Kolhe",
		position: "Publicity Co-Head",
		branch: "IT",
		year: "2nd",
		email: "parth.kolhe@example.com",
	},
	{
		name: "Girish Yendole",
		position: "Publicity Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "girish.yendole@example.com",
	},
	{
		name: "Rohit Gautam",
		position: "Sports Co-Head",
		branch: "ECE",
		year: "2nd",
		email: "rohit.gautam@example.com",
	},
	{
		name: "Priyanshu Dange",
		position: "Sports Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "priyanshu.dange@example.com",
	},
	{
		name: "Gaurav Rakhde",
		position: "Sports Co-Head",
		branch: "IT",
		year: "2nd",
		email: "gaurav.rakhde@example.com",
	},
	{
		name: "Yash Shelke",
		position: "Technical Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "yash.shelke@example.com",
	},
	{
		name: "Rohan Bhendale",
		position: "Technical Co-Head",
		branch: "ECE",
		year: "2nd",
		email: "rohan.bhendale@example.com",
	},
	{
		name: "Janvi Bhaise",
		position: "Sponsorship Co-Head",
		branch: "IT",
		year: "3rd",
		email: "janvi.bhaise@example.com",
	},
	{
		name: "Riddhi Dongarwar",
		position: "Sponsorship Co-Head",
		branch: "CSE",
		year: "2nd",
		email: "riddhi.dongarwar@example.com",
	},
	{
		name: "Khushi Lanke",
		position: "Decor Co-ordinator",
		branch: "ECE",
		year: "3rd",
		email: "khushi.lanke@example.com",
	},
	{
		name: "Dhanashree Kshirsagar",
		position: "Decor Co-ordinator",
		branch: "IT",
		year: "2nd",
		email: "dhanashree.kshirsagar@example.com",
	},
	{
		name: "Vishal Kotnod",
		position: "Decor Co-ordinator",
		branch: "CSE",
		year: "3rd",
		email: "vishal.kotnod@example.com",
	},
	{
		name: "Divyansh Katakwar",
		position: "Decor Co-ordinator",
		branch: "ECE",
		year: "2nd",
		email: "divyansh.katakwar@example.com",
	},
	{
		name: "Atharva Kumbre",
		position: "Event Co-ordinator",
		branch: "IT",
		year: "3rd",
		email: "atharva.kumbre@example.com",
	},
	{
		name: "Adil Dhote",
		position: "Event Co-ordinator",
		branch: "CSE",
		year: "2nd",
		email: "adil.dhote@example.com",
	},
	{
		name: "Guruvesh Wankhede",
		position: "Event Co-ordinator",
		branch: "ECE",
		year: "3rd",
		email: "guruvesh.wankhede@example.com",
	},
	{
		name: "Prayas Umate",
		position: "Social Media Co-Head",
		branch: "IT",
		year: "2nd",
		email: "prayas.umate@example.com",
	},
	{
		name: "Anvi Gadge",
		position: "Social Media Co-Head",
		branch: "CSE",
		year: "3rd",
		email: "anvi.gadge@example.com",
	},
];

const PersonCard = ({ person, index }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 10 },
		{ opacity: 1, y: 0, transition: { duration: 1 } }
	);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			className="border rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
		>
			<h3 className="text-xl text-gray-200 font-bold mb-2">{person.name}</h3>
			<p className="text-gray-600 mb-1">{person.position}</p>
			<p className="text-gray-500 mb-1">
				{person.branch} - {person.year} Year
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

const Team = () => {
	const { ref } = useScrollAnimation(
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
	);

	return (
		<motion.section ref={ref} className="bg-black py-16">
			<div className="container mx-auto  px-4">
				<motion.h2
					className="text-5xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
				>
					Heads
				</motion.h2>

				<motion.div
					className=" mb-16"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{heads.map((head, index) => (
							<PersonCard key={index} person={head} index={index} />
						))}
					</div>
				</motion.div>

				<motion.div
					className="mb-16"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<motion.h2
						className="text-5xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						Co Heads
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{coheads.map((cohead, index) => (
							<PersonCard key={index} person={cohead} index={index} />
						))}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Team;
