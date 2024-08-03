import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageCard = ({ src, alt, onClick }) => (
	<motion.div
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		className="cursor-pointer overflow-hidden rounded-lg shadow-md"
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
			duration: 1,
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
			<div className="container mx-auto px-4 py-8">
				<motion.h2
					className="text-4xl font-bold mb-8 z-50 font-mono text-gray-700 tracking-wide"
					variants={headingVariants}
					initial="hidden"
					animate={headingControls}
					ref={ref}
				>
					Our Gallery
				</motion.h2>
				<div className="grid h-96 md:h-52 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{images.map((image, index) => (
						<ImageCard
							key={index}
							src={image.src}
							alt={image.alt}
							onClick={() => setSelectedImage(image)}
						/>
					))}
				</div>
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
