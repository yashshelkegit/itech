import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import { FaMap } from "react-icons/fa";


import img1 from "../presidents/1.jpeg"
import img2 from "../presidents/2.jpeg"
import img3 from "../presidents/3.jpeg"

const RotatingPlanet = () => {
	const meshRef = useRef();
	const texture = useLoader(
		TextureLoader,
		"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
	);
	const normalMap = useLoader(
		TextureLoader,
		"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg"
	);

	useFrame(({ clock }) => {
		meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
	});

	return (
		<Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, -5]}>
			<meshStandardMaterial map={texture} normalMap={normalMap} />
		</Sphere>
	);
};
const FullScreenImage = ({ image, name, isOpen, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
					onClick={onClose}
				>
					<motion.img
						src={image}
						alt={name}
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						className="max-w-full max-h-full object-contain"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};


const TechnicalSupportCard = ({ name, role, phone, email }) => {
	return (
		<div className="bg-slate-900 p-4 rounded-lg shadow-lg text-center">
			<h3 className="text-xl font-semibold">
				<a href={`mailto:${email}`} className="text-blue-500 hover:underline">
					{name}
				</a>
			</h3>
			<p className="text-gray-400">{role}</p>
			<p className="text-gray-400">{phone}</p>
		</div>
	);
};

const PresidentCard = ({ name, post, phone, image }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	return (
		<>
			<motion.div
				className="bg-slate-900 p-4 rounded-lg shadow-lg text-center"
				whileHover={{ scale: 1.01 }}
			>
				<img
					src={image}
					alt={name}
					className="w-32 h-32 rounded-full mx-auto mb-4 cursor-pointer object-cover"
					onClick={toggleFullScreen}
				/>
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-gray-400">{post}</p>
				<p className="text-gray-400">{phone}</p>
			</motion.div>
			<FullScreenImage
				image={image}
				name={name}
				isOpen={isFullScreen}
				onClose={toggleFullScreen}
			/>
		</>
	);
};
const Contact = () => {
	
	return (
		<div className="relative w-full bg-black text-gray-300 overflow-hidden">
			<div className="absolute -top-1/2 inset-0 z-0">
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
					className="pt-24 text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500"
				>
					iTechRoots 2024
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="text-2xl text-center max-w-2xl"
				>
					Journey Through Time and Space with Technology
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="space-y-4 text-center"
				>
					<h2 className="text-3xl font-semibold">Contact Us</h2>
					<a
						className="text-blue-500 font-bold hover:underline"
						href="mailto:itechroots.it@gmail.com"
					>
						Email: itechroots.it@gmail.com
					</a>
					<p>
						Address: Yeshwantrao Chavan College of Engineering Hingna Road,
						Wanadongri, Nagpur- 441110
					</p>
					{/*  presidents cards here */}
					<h2 className="text-4xl pt-14 bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-green-500 font-bold">
						Presidents
					</h2>
					<div className="grid md:grid-cols-3 grid-cols-1 max-w-1/2 justify-center gap-8 mt-8">
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
					<h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-green-500 font-bold">
						Technical Support
					</h2>
					<p className="text-lg">
						If you encounter any technical issues, please contact
					</p>
					<div className="grid md:grid-cols-1 grid-cols-1 gap-8">
						<TechnicalSupportCard
							name="Abhishek Bhoyar"
							role="Technical Head"
							email=""
							phone="+91 XXXXXXXXXX"
						/>
						{/* <TechnicalSupportCard
							name="Yash Shelke"
							role="Technical Cohead"
							email=""
							phone="+91 XXXXXXXXXX"
						/> */}
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
