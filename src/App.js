import "./App.css";
import ActivePower from "./Components/ActivePower/ActivePower";
import NoteManager from "./Components/NoteManager/NoteManager";
import TurbineTemperature from "./Components/TurbineTemperature/TurbineTemperature";
import WindSpeed from "./Components/WindSpeed/WindSpeed";
import images from "./images/images";

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
				alt="Background image"
				className="backgroundnet"
			></img>
			<div className="colone side left">
				<ActivePower />
				<WindSpeed />
				<TurbineTemperature />
			</div>
			<div className="colone mid">
				<h1>C'est un test</h1>
			</div>
			<div className="colone side right">
				<NoteManager />
			</div>
		</div>
	);
}

export default App;
