import React from "react";
import "./ActivePower.css";
import BigBlock from "../../Components/BigBlock/BigBlock";
import NoteManager from "../../Components/NoteManager/NoteManager";
import Map from "../../Components/Map/Map";
import WindSpeed from "../../Components/WindSpeed/WindSpeed";
import ExteriorTemperature from "../../Components/ExteriorTemperature/ExteriorTemperature";
import { Canvas } from "@react-three/fiber";
import Model from "../../Components/Model";
import { Link } from "react-router-dom";

const ActivePower = () => {
	return (
		<div className="active_power">
			<div className="power_colone power_side power_left">
				<Link to="/">
					<BigBlock
						image="Power"
						chart="piechartpower"
						text="Puissance"
						valeur="2601.19 w"
						comparatif="-0,2%"
						valcomparatif="/24 h"
						courbe="BigPower"
					/>
				</Link>
			</div>
			<div className="power_colone power_mid">
				<Canvas className="canv" camera={{ position: [0, 5, 20] }}>
					<Model />
				</Canvas>
			</div>
			<div className="power_colone power_side power_right">
				<NoteManager />
				<Map />
				<WindSpeed />
				<ExteriorTemperature />
			</div>
		</div>
	);
};

export default ActivePower;
