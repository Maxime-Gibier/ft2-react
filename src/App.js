import "./App.css";
import ActivePower from "./Components/ActivePower/ActivePower";
import images from "./images/images"

function App() {
	return (
		<div className="App">
			<img
				src={images.backgroundellipse}
				alt="eliipse Background"
				className="ellipse"
			></img>
			<img
				src={images.backgroundimage}
				alt="Background image"
				className="backgroundnet"
			></img>
			<div className="colone side left">
				<h1>C'est un test</h1>
				<ActivePower />
			</div>
			<div className="colone mid">
				<h1>C'est un test</h1>
			</div>
			<div className="colone side right">
				<h1>C'est un test</h1>
			</div>
		</div>
	);
}

export default App;
