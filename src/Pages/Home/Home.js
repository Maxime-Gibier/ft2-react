import React from "react";
import "./Home.css";
import BlockLeft from "../../Components/BlockLeft/BlockLeft";
import Alertes from "../../Components/Alertes/Alertes";
import NoteManager from "../../Components/NoteManager/NoteManager";
import Map from "../../Components/Map/Map";
import WindSpeed from "../../Components/WindSpeed/WindSpeed";
import ExteriorTemperature from "../../Components/ExteriorTemperature/ExteriorTemperature";
import { Canvas } from "@react-three/fiber";
import Model from "../../Components/Model";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<div className="colone side left">
				<Link to="/active_power">
					<BlockLeft
						image="Power"
						text="Puissance /10min"
						valeur="2601.19 w"
						courbe="courbepower"
					/>
				</Link>
				<Link to="/rotor_speed">
					<BlockLeft
						image="Palle"
						text="Vitesse du rotor /10 min"
						valeur="50 tr/min"
						courbe="courberotor"
					/>
				</Link>
				<BlockLeft
					image="temp"
					text="Temperature turbine /10min"
					valeur="65° c"
					courbe="courbetemp"
				/>
				<Alertes />
			</div>
			<div className="colone mid">
				<Canvas className="canv" camera={{ position: [0, 5, 20] }}>
					<Model />
				</Canvas>
			</div>
			<div className="colone side right">
				<NoteManager />
				<Map />
				<WindSpeed />
				<ExteriorTemperature />
			</div>
		</div>
	);
};

export default Home;
