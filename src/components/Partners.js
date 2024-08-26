import React from "react";
import lokmat from "../sponsors/lokmat.jpeg";
import krafton from "../sponsors/krafton.jpg";
import PartnerComponent from './PartnerComponent'

const Partners = () => {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1">
			<PartnerComponent title="Media Partner" src={lokmat} desc="Lokmat Times" text="Proud Media partner of our Departmental fest" />
			<PartnerComponent title="Event Partner" src={krafton} desc="Redefining gaming" text="Proud Event partner of our Departmental fest" />
		</div>
	);
};

export default Partners;
