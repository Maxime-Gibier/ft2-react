import React from "react";
import "./BigBlock.css";

const BigBlock = (props) => {
	return (
		<div className="power">
			<div className="big_titre_block">
				<div className="logos">
					<img
						src={require("../../images/" + props.image + ".png")}
						alt="logo"
						className="big_icon"
					></img>
					<img
						src={require("../../images/" + props.chart + ".png")}
						alt="chart"
					></img>
				</div>
				<span className="big_text_block">
					<h2>{props.text}</h2>
					<h3 className="big_valeur">
						<small>{props.valeur}</small>
                    </h3>
                    <h4>{props.comparatif}</h4>
                    <h4>{props.valcomparatif}</h4>
				</span>
			</div>

			<img
				src={require("../../images/" + props.courbe + ".png")}
				alt="courbe stats"
				className="power_courbe"
			></img>
		</div>
	);
};

export default BigBlock;
