// src/components/Hero.js
import React, { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const pageVariants = {
	initial: {
		opacity: 0,
		x: "-100vw",
	},
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: "100vw",
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};

// const GearIcon = ({ size, initialRotation, position }) => (
// 	<motion.svg
// 		className={
// 			position === 1
// 				? "-z-10 absolute top-11 left-1/4 gear rounded-full overflow-hidden"
// 				: position === 2
// 				? " -z-10 absolute top-72 md:left-1/4 sm:w- left-3/2 gear rounded-full overflow-hidden"
// 				: " -z-10 absolute top-2/3 md:left-3/4 left-14 gear rounded-full overflow-hidden"
// 		}
// 		width={size}
// 		height={size}
// 		viewBox="0 0 24 24"
// 		fill="none"
// 		stroke="currentColor"
// 		strokeWidth="2"
// 		strokeLinecap="round"
// 		strokeLinejoin="round"
// 		initial={{ rotate: initialRotation }}
// 		animate={{ rotate: initialRotation + 360 }}
// 		transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// 	>
// 		<circle cx="12" cy="12" r="3"></circle>
// 		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
// 	</motion.svg>
// );

const Herosection = () => {
	return (
		<div className="bg-black">
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="container mx-auto z-30"
			>
				<div className="hero-container p-4">
					{/* <GearIcon size={230} initialRotation={0} position={1} />
				<GearIcon size={340} initialRotation={30} position={2} />
				<GearIcon size={150} initialRotation={15} position={3} /> */}

					<motion.div
						className="hero-content flex flex-col align-middle gap-3 justify-center h-screen z-30"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<motion.div
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
						>
							<TypingAnimation />
						</motion.div>
						<motion.p
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="text-center text-gray-200 z-30 font-bold underline text-lg md:w-1/2 mx-auto"
						>
							Where the past meets the future of technology. lorem xplore the
							xplore the future of computing with leading quantum physicists and
							engineers.
						</motion.p>
					</motion.div>
				</div>
			</motion.div>
			<div className="absolute inset-0 z-0 ">
				<Canvas>
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[10, 10, 5]} intensity={1} />
					<BlockchainBackground />
				</Canvas>
			</div>
			<AnimatedButton />
		</div>
	);
};

const BlockchainBackground = () => {
	const particlesRef = useRef(null);
	const particleCount = 5000;
	const positions = new Float32Array(particleCount * 3);

	for (let i = 0; i < particleCount; i++) {
		positions[i * 3] = (Math.random() - 0.5) * 10;
		positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
		positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
	}

	useFrame((state) => {
		if (particlesRef.current) {
			particlesRef.current.rotation.y += 0.001;
			particlesRef.current.rotation.x += 0.0005;
		}
	});

	return (
		<points ref={particlesRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={particleCount}
					itemSize={3}
					array={positions}
				/>
			</bufferGeometry>
			<pointsMaterial size={0.01} color="cyan" transparent opacity={0.8} />
		</points>
	);
};

const TypingAnimation = () => {
	const text = "_iTechRoots 14.0";

	const sentenceVariant = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.15,
			},
		},
	};

	const letterVariant = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<motion.h1
			className="h1 md:text-8xl sm:text-6xl text-4xl text-center font-mono font-extrabold"
			variants={sentenceVariant}
			initial="hidden"
			animate="visible"
		>
			{text.split("").map((char, index) => (
				<motion.span
					className={
						index > 5 && index < 11 ? "text-green-400" : " text-gray-200"
					}
					key={char + "-" + index}
					variants={letterVariant}
				>
					{char}
				</motion.span>
			))}
		</motion.h1>
	);
};

export default Herosection;
