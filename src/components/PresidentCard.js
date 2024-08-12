import {motion} from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useState } from 'react';
import {FullScreenImage} from './Pages';

const PresidentCard = ({ name, post, phone, image }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, x: -100 },
		{ opacity: 1, x: 0 }
	);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	return (
		<>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, x: 50 }}
				animate={controls}
				transition={{ duration: 1 }}
				className="bg-gray-200 p-4 rounded-lg shadow-lg text-center"
				whileHover={{ scale: 1.01 }}
			>
				<img
					src={image}
					alt={name}
					className="w-32 h-32 rounded-full mx-auto mb-4 cursor-pointer object-cover"
					onClick={toggleFullScreen}
				/>
				<h3 className="text-xl text-black font-semibold">{name}</h3>
				<p className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 font-bold">
					{post}
				</p>
				<p className="text-gray-500">{phone}</p>
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
export default PresidentCard;