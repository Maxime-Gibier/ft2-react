import React from 'react';
import "./TurbineTemperature.css"
import images from "../../images/images"

const TurbineTemperature = () => {
    return (
			<div>
				<div className="block">
					<div className="titre">
						<img src={images.temp} alt="power" className="icon"></img>
						<span className="power">
							<h2>
								Temperature turbine <small>/10min</small>
							</h2>
						</span>
					</div>
					<h3>
						65° c
					</h3>
					<img src={images.courbetemp}></img>
				</div>
			</div>
		);
};

export default TurbineTemperature;