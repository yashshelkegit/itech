import React from "react";
import lokmat from "../sponsors/lokmat.jpeg";
import unstop from "../sponsors/unstop.webp";
import PartnerComponent from './PartnerComponent'

const Partners = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<PartnerComponent title="Media Partner" src={lokmat} desc="Lokmat Times" text="Proud Media partner of our Departmental fest" />
			<PartnerComponent title="Event Partner" src={unstop} desc="Unstop #BeUnstoppable" text="Proud Event partner of our Departmental fest" />
		</div>
	);
};

export default Partners;
