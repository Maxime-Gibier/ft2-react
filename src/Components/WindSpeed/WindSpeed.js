import React from "react";
import images from "../../images/images";
import BarChartWind from "../BarChart/BarChartWind";
import "./WindSpeed.css";

const WindSpeed = () => {
	return (
		<div className="wind">
			<img src={images.wind} alt="wind logo" className="logo_wind"></img>
			<div className="info_wind">
				<h3>Vitesse du vent / 10 min</h3>
				<BarChartWind color="#6ed2b1" />
				<p>9.2 m/s</p>
			</div>
		</div>
	);
};

export default WindSpeed;
