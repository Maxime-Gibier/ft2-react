import "./ExteriorTemperature.css";
import images from "../../images/images";
import BarChartTemp from "../BarChart/BarChartTemp";

const ExteriorTemperature = () => {
	return (
		<div className="temp">
			<img src={images.thermo} alt="temp logo" className="logo_temp"></img>
			<div className="info_temp">
				<h3>Température extérieur</h3>
				<BarChartTemp color="#009de9" />
				<p>19° C</p>
			</div>
		</div>
	);
};

export default ExteriorTemperature;
