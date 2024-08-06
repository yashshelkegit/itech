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
			className="bg-slate-900 p-4 rounded-lg shadow-lg text-center"
		>
			<h3 className="text-xl font-semibold">
				<a href={`mailto:${email}`} className="text-blue-500 hover:underline">
					{name}
				</a>
			</h3>
			<p className="text-gray-400">{role}</p>
			<p className="text-gray-400">{phone}</p>
		</motion.div>
	);
};

export default TechnicalSupportCard;