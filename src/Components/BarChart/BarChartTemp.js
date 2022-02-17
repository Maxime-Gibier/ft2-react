import React, { useEffect } from "react";
import { select } from "d3-selection";

import "./BarChart.css";
import d3 from "d3";

var data = [19];

const draw_temp = (props) => {
	data.forEach(function (dta) {
		select("#bar_temp").selectChild("svg").remove();
		select("#bar_temp")
			.append("svg")
			.attr("width", 200)
			.attr("height", 20)
			.style("border-radius", "40px")
			.style("background-color", "white")
			.append("rect")
			.attr("height", 20)
			.attr("fill", props.color)
			.attr("width", dta * 5)
			.attr("rx", 9);
	});
};

const BarChartTemp = (props) => {
	useEffect(() => {
		draw_temp(props);
	});

	return <div className="chart" id="bar_temp"></div>;
};

export default BarChartTemp;
