import React from "react";
import "./BlockLeft.css"

const BlockLeft = (props) => {
	return (
		<div className="block">
			<div className="titre_block">
				<img
					src={require("../../images/" + props.image + ".png")}
					alt="logo"
					className="icon"
				></img>
				<span className="Text_block">
					<h2>{props.text}</h2>
				</span>
			</div>
			<h3 className="valeur">
				<small>{props.valeur}</small>
			</h3>
			<img
				src={require("../../images/" + props.courbe + ".png")}
				alt="courbe stats"
			></img>
		</div>
	);
};

export default BlockLeft;
