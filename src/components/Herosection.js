// src/components/Hero.js
import React, { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const pageVariants = {
	initial: { opacity: 0, y: 50 },
	in: { opacity: 1, y: 0 },
	out: { opacity: 0, y: -50 },
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};

const Herosection = () => {
	return (
		<div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="container mx-auto px-4 z-10"
			>
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<TypingAnimation />
					</motion.div>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-gray-500 font-mono underline text-lg mt-4 max-w-2xl mx-auto"
					>
						Where the past meets the future of technology.
					</motion.p>
				</div>
			</motion.div>
			<div className="absolute inset-0 z-0">
				<Canvas>
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[10, 10, 5]} intensity={1} />
					<BlockchainBackground />
				</Canvas>
			</div>
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<AnimatedButton />
			</div>
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
			<pointsMaterial size={0.01} color="white" transparent opacity={0.8} />
		</points>
	);
};

const TypingAnimation = () => {
	const text = "iTechRoots \n14.0";

	const sentenceVariant = {
		hidden: { opacity: 0 },
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
			className="text-6xl md:text-8xl font-mono font-extrabold"
			variants={sentenceVariant}
			initial="hidden"
			animate="visible"
		>
			{text.split("").map((char, index) => (
				<motion.span
					className={
						index > 4 && index < 11
							? "bg-clip-text text-transparent bg-gradient-to-t from-green-500 "
							: "bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-slate-300"
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
