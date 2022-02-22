import React from "react";
import "./RotorSpeed.css";
import BigBlock from "../../Components/BigBlock/BigBlock";
import NoteManager from "../../Components/NoteManager/NoteManager";
import Map from "../../Components/Map/Map";
import WindSpeed from "../../Components/WindSpeed/WindSpeed";
import ExteriorTemperature from "../../Components/ExteriorTemperature/ExteriorTemperature";
import { Canvas } from "@react-three/fiber";
import Model from "../../Components/Model";
import { Link } from "react-router-dom";

const RotorSpeed = () => {
	return (
		<div>
			<div className="rotor">
				<div className="rotor_colone rotor_side rotor_left">
					<Link to="/">
						<BigBlock
							image="Palle"
							chart="rotorchart"
							text="Vitesse du Rotor"
							valeur="50 Tr/min"
							comparatif="Vitesse du vent"
							valcomparatif="9.2 m/s"
							courbe="Bigrotor"
						/>
					</Link>
				</div>
				<div className="rotor_colone rotor_mid">
					<Canvas className="canv" camera={{ position: [0, 5, 20] }}>
						<Model />
					</Canvas>
				</div>
				<div className="rotor_colone rotor_side rotor_right">
					<NoteManager />
					<Map />
					<WindSpeed />
					<ExteriorTemperature />
				</div>
			</div>
		</div>
	);
};

export default RotorSpeed;
