import React from 'react';
import "./RotorSpeed.css"
import images from "../../images/images"

const RotorSpeed = () => {
    return (
			<div className="block">
				<div className="titre">
					<img src={images.palle} alt="power" className="icon"></img>
					<span className="power">
						<h2>
							Vitesse du rotor
							<small> /10 min</small>
						</h2>
					</span>
				</div>
				<h3>
					50<small> tr/min </small>
				</h3>
				<img src={images.courberotor}></img>
			</div>
		);
};

export default RotorSpeed;