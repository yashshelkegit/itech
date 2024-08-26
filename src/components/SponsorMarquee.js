import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sponsor1 from "../sponsors/iquanta.png";
import sponsor2 from "../sponsors/kanan.jpeg";
import sponsor3 from "../sponsors/krafton.jpg";
import sponsor4 from "../sponsors/barcode.jpeg";
import sponsor5 from "../sponsors/decathlon.png";
import sponsor6 from "../sponsors/motifo.png";

const sponsors = [
	{
		id: 1,
		link: "https://www.iquanta.in/nagpur",
		name: "iQuanta",
		logo: sponsor1,
	},
	{
		id: 2,
		link: "https://www.kanan.co/study-abroad/consultants-in-nagpur/",
		name: "Kanan",
		logo: sponsor2,
	},
	{ id: 3, link: "https://krafton.in/", name: "Krafton", logo: sponsor3 },
	{
		id: 4,
		link: "https://www.youtube.com/watch?v=W0F-S0otTa0",
		name: "Barcode",
		logo: sponsor4,
	},
	{
		id: 5,
		link: "https://www.decathlon.in/",
		name: "Decathlon",
		logo: sponsor5,
	},
	{
		id: 6,
		link: "https://www.instagram.com/motifoacademy/?hl=en",
		name: "Motifo",
		logo: sponsor6,
	},
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

const Sponsor = ({link, name, logo }) => (
	<Link to={link}>
		<div className="inline-flex flex-col items-center justify-center border cursor-pointer border-gray-500 rounded-lg p-4 md:mx-12 mx-5 w-48">
			<img
				src={logo}
				alt={`${name} logo`}
				className="h-24 object-contain mb-2"
			/>
			<h3 className="text-sm text-white font-semibold">{name}</h3>
		</div>
	</Link>
);

export default SponsorMarquee;
