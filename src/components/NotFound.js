import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex bg-black flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold text-gray-200 mb-4">
				404 - Page Not Found
			</h1>
			<p className="text-lg text-gray-400 mb-8">
				Sorry, the page you are looking for does not exist.
			</p>
			<Link
				to="/"
				className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
			>
				Go to Home
			</Link>
		</div>
	);
};

export default NotFound;
