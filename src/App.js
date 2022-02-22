import "./App.css";
import images from "./images/images";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ActivePower from "./Pages/ActivePower/ActivePower"
import RotorSpeed from "./Pages/RotorSpeed/RotorSpeed"

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
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/active_power">
						<ActivePower />
					</Route>
					<Route exact path="/rotor_speed">
						<RotorSpeed />
					</Route>
					<Route>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
