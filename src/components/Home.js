import React from 'react'
import {Featured, Gallery, Sponsers, RouteAccess, FAQ, Partners } from './Pages'

import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";

const images = [
	{ src: img1, alt: "Description 1" },
	{ src: img2, alt: "Description 2" },
	{ src: img3, alt: "Description 3" },
	{ src: img4, alt: "Description 4" },
	{ src: img5, alt: "Description 5" },
];

const Home = () => {
  return (
		<div className="bg-black py-16">
			<div className=" md:container mx-auto grid gap-y-20">
				<RouteAccess/>
				<Featured/>
				<Gallery images={images} />
				<Partners/>
				<Sponsers />
				<FAQ/>
			</div>
		</div>
	);
}

export default Home
