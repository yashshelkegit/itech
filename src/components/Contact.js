import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import { FaMap } from "react-icons/fa";

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

const Contact = () => {
	return (
		<div className="relative w-full min-h-screen bg-black text-gray-300 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} intensity={1} />
					<Stars />
					<RotatingPlanet />
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
					<p>Email: itechroots.it@gmail.com</p>
					<p>Address: 123 YCCE Road, Nagpur City, TC 12345</p>
					<div className="p-5 bg-slate-900">
						<h2 className="text-3xl font-semibold">Presidents</h2>
						<p>1. Varsha Bramhankar (President CSI): +91 8080946005</p>
						<p>2. Harshdeep Ambule (President SPIRIT & AURA): +91 8080122182</p>
						<p>3. Samarth Sharma (President SPIRIT & AURA): +91 8669105871</p>
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
					Map <FaMap/>
				</motion.h2>
				<MapComponent />
				<div className="h-10"></div>
			</div>
		</div>
	);
};

export default Contact;
