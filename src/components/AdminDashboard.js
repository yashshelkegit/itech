import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";

const SubmissionCard = ({ submission, onDelete }) => {
	return (
		<div className="bg-gray-900 border border-gray-500 p-4 rounded-lg shadow-md mb-4">
			<h2 className="border-b pb-2 mb-4 border-gray-500 text-white font-bold text-xl">
				{submission.id}
			</h2>
			<p className="text-gray-400">
				Submission Time: {new Date(submission.created_at).toISOString().split("T")[0]}{" "}
				{new Date(submission.created_at).toTimeString().split(" ")[0]}
			</p>
			<h3 className="text-xl font-bold text-gray-300 mb-2">
				Name: {submission.name}
			</h3>
			<a className="text-blue-500 mb-2" href={`mailto:${submission.email}`}>
				Email: {submission.email}
			</a>
			<p className="text-gray-400 mb-2">Phone: {submission.phone}</p>
			<p className="text-gray-300">Message: {submission.message}</p>
			<div className="flex gap-5">
				<a
					className="text-white rounded-md mb-2 border p-2 mt-3 bg-gray-500 w-24 text-center inline-block"
					href={`mailto:${submission.email}`}
				>
					Reply
				</a>
				<button
					onClick={() => onDelete(submission.id)}
					className="text-white rounded-md mb-2 border p-2 mt-3 bg-red-500 w-24 text-center inline-block"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

const AdminDashboard = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [formData, setFormData] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		fetchFormData();
	}, []);

	const fetchFormData = async () => {
		const { data, error } = await supabase.from("queries").select("*");
		if (error) {
			console.error("Error fetching form data:", error);
		} else {
			setFormData(data);
		}
	};

	const handleDelete = async (id) => {
		try {
			const { error } = await supabase.from("queries").delete().match({ id });
			if (error) {
				console.error("Error deleting record:", error);
			} else {
				await fetchFormData();
			}
		} catch (error) {
			console.error("Error deleting record:", error);
		}
	};

	const handleLogin = () => {
		if (
			(username === process.env.REACT_APP_USER1 &&
				password === process.env.REACT_APP_PASS1) ||
			(username === process.env.REACT_APP_USER2 &&
				password === process.env.REACT_APP_PASS2)
		) {
			setIsLoggedIn(true);
		} else {
			setError("Invalid username or password");
		}
	};

	if (!isLoggedIn) {
		return (
			<div className="flex justify-center bg-black items-center h-screen">
				<div className="p-5 rounded-lg shadow-lg grid grid-cols-1 md:w-1/2 w-screen">
					<div className="">
						<h2 className="text-4xl font-bold text-gray-300 mb-4">
							Admin Dashboard
						</h2>
						<div className="mb-6">
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-300"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="mt-1 block w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-300"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						{error && <p className="text-red-500 mb-4">{error}</p>}
						<button
							onClick={handleLogin}
							className="w-full bg-green-600 text-white p-4 mt-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Login
						</button>
                        <Link to='/' className="underline text-white mt-7 inline-block">Not an Admin ?</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className=" bg-black">
			<div className="container mx-auto md:px-0 px-5 py-20">
				<h2 className="text-2xl font-bold text-gray-300 mb-4">
					Admin Dashboard
				</h2>
				<div className="grid md:grid-cols-2 gap-5">
					{formData.map((submission, index) => (
						<SubmissionCard
							key={index}
							submission={submission}
							onDelete={handleDelete}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
