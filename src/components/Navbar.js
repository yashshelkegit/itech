import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	FaRocket,
	FaCalendar,
	FaInfoCircle,
	FaBars,
	FaTimes,
	FaTeamspeak,
	FaClock,
} from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="bg-gray-900 p-4 fixed top-0 w-full z-50 ">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-white text-2xl font-bold">
					iTech<span className="text-yellow-600">roots</span>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-4">
					<NavItem to="/" icon={<FaRocket />}>
						Home
					</NavItem>
					<NavItem to="/events" icon={<FaCalendar />}>
						Events
					</NavItem>
					<NavItem to="/team" icon={<FaTeamspeak />}>
						Team
					</NavItem>
					<NavItem to="/contacts" icon={<FaInfoCircle />}>
						Contact
					</NavItem>
					<NavItem to="/timeline" icon={<FaClock />}>
						Timeline
					</NavItem>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-white focus:outline-none"
				>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden absolute top-full left-0 right-0 bg-gray-800"
				>
					<div className="flex flex-col py-2">
						<NavItem to="/" icon={<FaRocket />} mobile onClick={toggleMenu}>
							Home
						</NavItem>
						<NavItem
							to="/events"
							icon={<FaCalendar />}
							mobile
							onClick={toggleMenu}
						>
							Events
						</NavItem>
						<NavItem
							to="/team"
							icon={<FaTeamspeak />}
							mobile
							onClick={toggleMenu}
						>
							Team
						</NavItem>
						<NavItem
							to="/contacts"
							icon={<FaInfoCircle />}
							mobile
							onClick={toggleMenu}
						>
							Contact Us
						</NavItem>
						<NavItem
							to="/timeline"
							icon={<FaClock />}
							mobile
							onClick={toggleMenu}
						>
							Timeline
						</NavItem>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

const NavItem = ({ to, children, icon, mobile, onClick }) => (
	<Link to={to} onClick={onClick}>
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`
        text-gray-300 hover:bg-gray-700 hover:text-white 
        px-3 py-2 rounded-md text-sm font-medium 
        flex items-center
        ${mobile ? "w-full justify-center" : ""}
      `}
		>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</motion.div>
	</Link>
);

export default Navbar;
