import {motion} from 'framer-motion';
import useScrollAnimation from "../hooks/useScrollAnimation";

const TechnicalSupportCard = ({ name, role, phone, email }) => {
	const { ref, controls } = useScrollAnimation(
		{ opacity: 0, y: 100 },
		{ opacity: 1, y: 0 }
	);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={controls}
			transition={{ duration: 1 }}
			className="p-4 border-b rounded-lg shadow-lg text-center"
		>
			<h3 className="text-xl font-semibold">
				<a href={`mailto:${email}`} className="text-white hover:underline">
					{name}
				</a>
			</h3>
			<p className="text-blue-500 font-bold">{role}</p>
			<p className="text-gray-400">{phone}</p>
			<p className="text-blue-400">{email}</p>
		</motion.div>
	);
};

export default TechnicalSupportCard;