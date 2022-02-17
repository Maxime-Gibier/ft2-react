import React, { useEffect } from "react";
import { select } from "d3-selection";

import "./BarChart.css";
import d3 from "d3";

var data = [14];

const draw_wind = (props) => {
	data.forEach(function (dta) {
		select("#bar_wind").selectChild("svg").remove();
		select("#bar_wind")
			.append("svg")
			.attr("width", 200)
			.attr("height", 20)
			.style("border-radius", "40px")
			.style("background-color", "white")
			.append("rect")
			.attr("height", 20)
			.attr("fill", props.color)
			.attr("width", dta * 4)
			.attr("rx", 9);
	});
};

const BarChartWind = (props) => {
	useEffect(() => {
		draw_wind(props);
	});

	return <div className="chart" id="bar_wind"></div>;
};

export default BarChartWind;
