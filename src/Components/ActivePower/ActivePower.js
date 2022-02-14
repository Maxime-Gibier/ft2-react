import React from "react";
import images from "../../images/images";
import "./ActivePower.css";

const ActivePower = () => {
	return (
		<div className="block">
			<div className="titre">
				<img src={images.power} alt="power" className="icon"></img>
				<span className="power">
					<h2>
						Puissance <small>/10min</small>
					</h2>
				</span>
			</div>
			<h3>
				<small>2604.19 w</small>
			</h3>
			<img src={images.courbepower}></img>
		</div>
	);
};

export default ActivePower;
