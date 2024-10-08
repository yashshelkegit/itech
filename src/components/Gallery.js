import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ImageCard = ({ src, alt, onClick }) => (
	<motion.div
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		className="cursor-pointer border overflow-hidden min-h-16 rounded-lg shadow-md"
		onClick={onClick}
	>
		<img src={src} alt={alt} className="w-full h-full object-cover" />
	</motion.div>
);

const Lightbox = ({ src, alt, onClose }) => (
	<AnimatePresence>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
			className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
		>
			<motion.img
				src={src}
				alt={alt}
				initial={{ scale: 0.8 }}
				animate={{ scale: 2 }}
				exit={{ scale: 0.8 }}
				className="max-w-full max-h-full object-contain"
			/>
		</motion.div>
		
	</AnimatePresence>
);
const headingVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			ease: "easeInOut",
		},
	},
};
const Gallery = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const controls = useAnimation();
	const headingControls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: false });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
			headingControls.start("visible");
		} else {
			controls.start("hidden");
			headingControls.start("hidden");
		}
	}, [inView, controls, headingControls]);

	return (
		<>
			<div className="px-4 py-8">
				<motion.h2
					className="text-4xl font-bold mb-8 z-50 font-mono bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-purple-500 text-center"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					Our Gallery
				</motion.h2>
				<motion.div
					className="grid h-96 md:h-52 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					{images.map((image, index) => (
						<ImageCard
							key={index}
							src={image.src}
							alt={image.alt}
							onClick={() => setSelectedImage(image)}
						/>
					))}
					<Link to="/gallery">
						<motion.div
							variants={headingVariants}
							initial="hidden"
							animate={headingControls}
							ref={ref}
							className="border bg-gradient-to-r sm:h-full h-14 rounded-md bg-clip-text text-transparent text-center font-bold from-blue-400 to-fuchsia-400 grid"
						>
							<div className="text-xl self-center">See more</div>
						</motion.div>
					</Link>
				</motion.div>

				{selectedImage && (
					<Lightbox
						src={selectedImage.src}
						alt={selectedImage.alt}
						onClose={() => setSelectedImage(null)}
					/>
				)}
			</div>
		</>
	);
};

export default Gallery;
