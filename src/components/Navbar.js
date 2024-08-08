// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
	FaRocket,
	FaCalendar,
	FaInfoCircle,
	FaBars,
	FaTimes,
	FaTeamspeak,
	FaClock,
	FaUser
} from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="p-4 fixed top-0 w-full z-50 backdrop-filter backdrop-blur-xl">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-white text-2xl font-bold">
					iTech<span className="text-green-600">Roots</span>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-4">
					<NavItem to="/" icon={<FaRocket />} currentPath={location.pathname}>
						Home
					</NavItem>
					<NavItem
						to="/events"
						icon={<FaCalendar />}
						currentPath={location.pathname}
					>
						Events
					</NavItem>
					<NavItem
						to="/coreteam"
						icon={<FaTeamspeak />}
						currentPath={location.pathname}
					>
						Team
					</NavItem>
					<NavItem
						to="/contacts"
						icon={<FaInfoCircle />}
						currentPath={location.pathname}
					>
						Contact
					</NavItem>
					<NavItem
						to="/timeline"
						icon={<FaClock />}
						currentPath={location.pathname}
					>
						Timeline
					</NavItem>
					<NavItem
						to="/admin"
						icon={<FaUser />}
						currentPath={location.pathname}
					>
						Admin
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
					className="md:hidden absolute top-full h-screen left-0 right-0 bg-black"
				>
					<div className="flex flex-col p-4">
						<NavItem
							to="/"
							icon={<FaRocket />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Home
						</NavItem>
						<NavItem
							to="/events"
							icon={<FaCalendar />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Events
						</NavItem>
						<NavItem
							to="/coreteam"
							icon={<FaTeamspeak />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Team
						</NavItem>
						<NavItem
							to="/contacts"
							icon={<FaInfoCircle />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Contact Us
						</NavItem>
						<NavItem
							to="/timeline"
							icon={<FaClock />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Timeline
						</NavItem>
						<NavItem
							to="/admin"
							icon={<FaUser />}
							mobile
							onClick={toggleMenu}
							currentPath={location.pathname}
						>
							Admin
						</NavItem>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

const NavItem = ({ to, children, icon, mobile, onClick, currentPath }) => {
	const isActive = currentPath === to;

	return (
		<Link to={to} onClick={onClick}>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`
          ${
						isActive
							? "bg-gray-700 text-white"
							: "text-gray-300 hover:bg-gray-700 hover:text-white"
					}
          px-3 py-2 rounded-md text-sm font-medium 
          flex 
          ${mobile ? "w-full" : ""}
        `}
			>
				{icon && <span className="mr-2">{icon}</span>}
				{children}
			</motion.div>
		</Link>
	);
};

export default Navbar;
