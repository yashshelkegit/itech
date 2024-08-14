import React from "react";
import { motion } from "framer-motion";
import sponsor1 from "../sponsors/iquanta.png";
import sponsor2 from "../sponsors/kanan.jpeg";
import sponsor3 from "../sponsors/barcode.jpeg";
import sponsor4 from "../sponsors/decathlon.png";
import sponsor5 from "../sponsors/motifo.png";

const sponsors = [
	{ id: 1, name: "iQuanta", logo: sponsor1 },
	{ id: 2, name: "Kanan", logo: sponsor2 },
	{ id: 3, name: "Barcode", logo: sponsor3 },
	{ id: 4, name: "Decathlon", logo: sponsor4 },
	{ id: 5, name: "Motifo", logo: sponsor5 },
];

const SponsorMarquee = () => {
	const marqueeVariants = {
		animate: {
			x: [0, -1035],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 10,
					ease: "linear",
				},
			},
		},
	};

	return (
		<div className="overflow-hidden whitespace-nowrap">
			<motion.div
				className="inline-block"
				variants={marqueeVariants}
				animate="animate"
			>
				{sponsors.concat(sponsors).map((sponsor, index) => (
					<Sponsor key={`${sponsor.id}-${index}`} {...sponsor} />
				))}
			</motion.div>
		</div>
	);
};

const Sponsor = ({ name, logo }) => (
	<div className="inline-flex flex-col items-center justify-center p-4 mx-4 w-48">
		<img
			src={logo}
			alt={`${name} logo`}
			className="h-24 object-contain mb-2"
		/>
		<h3 className="text-sm text-white font-semibold">{name}</h3>
	</div>
);

export default SponsorMarquee;
