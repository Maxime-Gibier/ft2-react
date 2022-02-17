import "./App.css";
import ActivePower from "./Components/ActivePower/ActivePower";
import NoteManager from "./Components/NoteManager/NoteManager";
import TurbineTemperature from "./Components/TurbineTemperature/TurbineTemperature";
import WindSpeed from "./Components/WindSpeed/WindSpeed";
import images from "./images/images";
import Alertes from "./Components/Alertes/Alertes";
import Map from "./Components/Map/Map";
import RotorSpeed from "./Components/RotorSpeed/RotorSpeed";
import ExteriorTemperature from "./Components/ExteriorTemperature/ExteriorTemperature";
import { Canvas } from "@react-three/fiber";
import Model from "./Components/Model";

function App() {
	return (
		<div className="App">
			<img
				src={images.backgroundellipse}
				alt="ellipse Background"
				className="ellipse"
			></img>
			<img
				src={images.backgroundimage}
				alt="page background"
				className="backgroundnet"
			></img>
			<div className="colone side left">
				<ActivePower />
				<RotorSpeed />
				<TurbineTemperature />
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
}

export default App;
