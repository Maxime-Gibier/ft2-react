import React from "react";
import "./ExteriorTemperature.css";
import images from "../../images/images";

const ExteriorTemperature = () => {
	return (
		<div className="temp">
			<img src={images.thermo} alt="temp logo" className="logo_temp"></img>
			<div className="info_temp">
				<h3>Température extérieur</h3>
				<img src={images.bartemp} alt="temp bar"></img>
				<p>19° C</p>
			</div>
		</div>
	);
};

export default ExteriorTemperature;
