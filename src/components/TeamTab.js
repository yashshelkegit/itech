// Tabs.js
import React, { useEffect, useState } from "react";
import Team from "./Team";
import CoreTeam from "./CoreTeam";
import { notifyTeam } from "./notify";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState("core-team");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	useEffect(()=>{
		notifyTeam();
	},[])

	return (
		<div className="bg-black py-24">
			<div className="container mx-auto px-4">
				<div className="flex justify-center mb-4 border-b border-gray-400 p-4">
					<button
						className={`px-4 py-2 mr-4 rounded-lg ${
							activeTab === "core-team"
								? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
								: "text-gray-400 hover:text-white"
						}`}
						onClick={() => handleTabClick("core-team")}
					>
						Core Team
					</button>
					<button
						className={`px-4 py-2 mr-4 rounded-lg ${
							activeTab === "team"
								? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
								: "text-gray-400 hover:text-white"
						}`}
						onClick={() => handleTabClick("team")}
					>
						Head Team
					</button>
				</div>

				{activeTab === "team" ? <Team /> : <CoreTeam />}
			</div>
		</div>
	);
};

export default Tabs;
