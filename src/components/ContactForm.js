import React, { useState } from "react";
import { motion } from "framer-motion";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const checkInput = () => {
		if (!formData.name || !formData.email || !formData.message) return false;
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			if (checkInput()) {
				const { data, error } = await supabase
					.from("queries")
					.insert([formData]);

				if (error) throw error;
				if (data);
				setSubmitStatus("success");
				setFormData({ name: "", email: "", phone: "", message: "" });
				navigate("/");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-slate-950 md:p-24 p-2 py-24">
			<div className="max-w-6xl mx-auto mt-8 p-2 rounded-lg shadow-lg">
				<div className="flex flex-col md:flex-row gap-8">
					{/* First Column - Content */}
					<div className="md:w-1/2">
					{/* <h2 className="text-4xl font-bold mb-8 text-gray-300">Contact Us</h2> */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className=""
						>
							<h3 className="text-3xl font-semibold mb-4 text-gray-300">
								Get in Touch
							</h3>
							<p className="text-gray-300 mb-4">
								We appreciate your interest in reaching out to us. Please fill
								out the form with your details and message.
							</p>
							<p className="text-gray-300 mb-4">
								<strong>Important:</strong> Ensure that all contact information
								you provide is correct. Our team will use these details to get
								back to you regarding your inquiry.
							</p>
							<p className="text-gray-300">
								We look forward to connecting with you and addressing your
								questions or concerns.
							</p>
						</motion.div>
					</div>

					{/* Second Column - Form */}
					<div className="md:w-1/2">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="mt-1 block w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="mt-1 block w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-300"
									>
										Phone
									</label>
									<input
										type="tel"
										pattern="[0-9]{10}"
										minLength="10"
										maxLength="10"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
										className="mt-1 block w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-300"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="4"
										className="mt-1 block w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									></textarea>
								</div>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									{isSubmitting ? "Submitting..." : "Submit"}
								</motion.button>
							</form>
							{submitStatus === "success" && (
								<p className="mt-4 text-green-500">
									Your message has been sent successfully!
								</p>
							)}
							{submitStatus === "error" && (
								<p className="mt-4 text-red-500">
									There was an error sending your message. Please try again.
								</p>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
