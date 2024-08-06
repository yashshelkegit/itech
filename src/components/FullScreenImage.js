import {motion, AnimatePresence} from 'framer-motion';

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
export default FullScreenImage;