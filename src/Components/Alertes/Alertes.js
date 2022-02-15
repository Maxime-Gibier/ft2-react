import React from "react";
import "./Alertes.css";
import images from "../../images/images";

const Alertes = () => {
	return (
		<div className="block_alertes">
			<img src={images.alerte} alt="power" className="icon_alertes"></img>
			<h2>8</h2>
		</div>
	);
};

export default Alertes;
