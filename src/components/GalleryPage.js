import React, { useState } from "react";
import { motion } from "framer-motion";

import img1 from '../images/1.jpeg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.jpeg'
import img6 from '../images/6.jpeg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'

const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
];

const GalleryPage = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div className="bg-black">
			<div className="container mx-auto px-4 py-20">
				<h1 className="text-4xl font-bold my-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
					Our Galactic Gallery
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{images.map((img, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							layoutId={`image-${index}`}
							onClick={() => setSelectedImage(index)}
						>
							<motion.img
								src={img}
								alt={`Gallery image ${index + 1}`}
								className="w-full h-full object-cover"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							/>
						</motion.div>
					))}
				</div>

				{selectedImage !== null && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						onClick={() => setSelectedImage(null)}
					>
						<motion.img
							src={images[selectedImage]}
							alt={`Gallery image ${selectedImage + 1}`}
							className="max-w-full max-h-full object-contain"
							layoutId={`image-${selectedImage}`}
						/>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default GalleryPage;
