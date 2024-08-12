import React, { useEffect } from "react";
// import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Stars, Sphere } from "@react-three/drei";
import { Stars } from "@react-three/drei";
// import { TextureLoader } from "three";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import { FaMap } from "react-icons/fa";
import { TechnicalSupportCard, PresidentCard } from "./Pages";

import img1 from "../presidents/1.jpeg";
import img2 from "../presidents/2.jpeg";
import img3 from "../presidents/3.jpeg";
import { notifyContact } from "./notify";


const Contact = () => {
	useEffect(()=>{
		notifyContact();
	},[])
	return (
		<div className="relative w-full bg-black text-gray-300 overflow-hidden">
			<div className="fixed inset-0 z-0">
				<Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
					<ambientLight intensity={2} />
					<pointLight position={[10, 10, 10]} intensity={1} />
					<Stars />
					{/* <RotatingPlanet /> */}
				</Canvas>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center h-full p-4 space-y-8 font-mono">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="pt-24 text-5xl font-bold text-center text-gray-300 font-mono"
				>
					iTech<span className="text-green-500">Roots</span> 14.0
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 text-center max-w-2xl"
				>
					Journey Through Time and Space with Technology
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="pt-12 space-y-4 text-center"
				>
					<p className="p-2">
						Address: Yeshwantrao Chavan College of Engineering Hingna Road,
						Wanadongri, Nagpur- 441110
					</p>
					<a
						className="font-bold hover:underline"
						href="mailto:itechroots.it@gmail.com"
					>
						Email: itechroots.it@gmail.com
					</a>
					<Link to="/contact-form">
						<h3 className="text-2xl font-serif text-green-500 font-semibold underline p-4">
							Contact Form
						</h3>
					</Link>
				</motion.div>
				{/*  presidents cards here */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="space-y-4 text-center container mx-auto"
				>
					<h2 className="text-4xl pt-8 text-gray-300 font-mono font-bold">
						Presidents
					</h2>
					<div className="grid md:grid-cols-3 grid-cols-1 gap-8">
						<PresidentCard
							name="Varsha Bramhankar"
							post="President CSI"
							phone="+91 8080946005"
							image={img1}
						/>
						<PresidentCard
							name="Harshdeep Ambule"
							post="President SPIRIT and AURA"
							phone="+91 8080122182"
							image={img2}
						/>
						<PresidentCard
							name="Samarth Sharma"
							post="President SPIRIT and AURA"
							phone="+91 8669105871"
							image={img3}
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
					className="space-y-4 text-center py-14"
				>
					<h2 className="text-4xl mt-11 text-gray-300 font-mono font-bold">
						Technical Support
					</h2>
					<p className="text-lg">
						If you encounter any technical issues, please contact our tech team
					</p>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
						<TechnicalSupportCard
							name="Abhishek Bhoyar"
							role="Technical Head"
							email="abhishekbhoyar141@gmail.com"
							phone="+91 7709869270"
						/>
						<TechnicalSupportCard
							name="Yash Shelke"
							role="Technical CoHead"
							email="contact.yashshelke@gmail.com"
							phone="+91 7030502701"
						/>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="space-y-4 text-center "
				>
					<h2 className="text-3xl font-semibold">Useful Links</h2>
					<ul className="space-y-2 pb-5">
						<li>
							<Link
								to="/timeline"
								className="text-blue-300 hover:text-blue-100"
							>
								Event Schedule
							</Link>
						</li>
						<li>
							<Link to="/events" className="text-blue-300 hover:text-blue-100">
								Participate
							</Link>
						</li>
					</ul>
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="text-4xl font-bold text-slate-300 text-center max-w-2xl flex gap-3"
				>
					Map <FaMap />
				</motion.h2>
				<MapComponent />
				<div className="h-10"></div>
			</div>
		</div>
	);
};

export default Contact;
