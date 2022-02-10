import React from "react";
import images from "../../images/images";
import "./ActivePower.css";

const ActivePower = () => {
	return (
		<div className="block">
			<div className="titre">
				<img src={images.power} alt="power" className="icon"></img>
				<span>
					<h2>Puissance</h2>
					<h3>/10 min</h3>
				</span>
			</div>
		</div>
	);
};

export default ActivePower;
