import React from "react";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { data } from "./data";
import CustomerChart from "./CustomerChart";
import EarningChart from "./EarningChart";

const Charts = () => {
	return (
		<div className="my-9 max-sm:my-6 lg:grid lg:grid-cols-3 lg:gap-9">
			<EarningChart data={data.barData} option={data.option} />
			<CustomerChart data={data.pieData} />
		</div>
	);
};

export default Charts;
