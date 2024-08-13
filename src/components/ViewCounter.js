import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const fetchAndUpdateViewCount = async (pageId) => {
	try {
		let { data, error } = await supabase
			.from("views")
			.select("count")
			.eq("page_id", pageId)
			.single();

		if (error) {
			if (error.code === "PGRST116") {
				// Record not found, create a new one
				const { error: insertError } = await supabase
					.from("views")
					.insert({ page_id: pageId, count: 1 })
					.single();

				if (insertError) throw insertError;
				return 1;
			} else {
				throw error;
			}
		}

		const newCount = data.count + 1;
		const { error: updateError } = await supabase
			.from("views")
			.update({ count: newCount })
			.eq("page_id", pageId);

		if (updateError) throw updateError;

		return newCount;
	} catch (error) {
		console.error("Error in fetchAndUpdateViewCount:", error);
		throw error;
	}
};

const ViewCounter = ({ pageId }) => {
	const [viewCount, setViewCount] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const updateViewCount = async () => {
			try {
				const newCount = await fetchAndUpdateViewCount(pageId);
				setViewCount(newCount);
				setError(null);
			} catch (err) {
				setError("Failed to fetch view count. Please check your connection.");
				console.error("Error updating view count:", err);
			}
		};

		updateViewCount();
	}, [pageId]);

	if (error) {
		return <span className="border border-gray-400 text-blue-200 mt-4 px-3 rounded-sm w-fit">Error: {error}</span>;
	}

	if (viewCount === null) {
		return <span className="border border-gray-400 text-blue-200 mt-4 px-3 rounded-sm w-fit">Loading view count...</span>;
	}

	return <span className="border border-gray-400 text-blue-200 mt-4 px-3 rounded-sm w-fit">Total Views: {viewCount}</span>;
};

export default ViewCounter;
