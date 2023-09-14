import { Bar } from "react-chartjs-2";
import { useEffect, useRef } from "react";

const EarningChart = (props) => {
	const windowWidth = useRef(window.innerWidth);

	useEffect(() => {
		if (windowWidth.current < 680) {
			props.data.datasets[0].barThickness = 15;
			props.data.datasets[0].borderRadius = 4;
		}
	}, [props.data.datasets]);

	return (
		<div className="col-span-2 p-4 bg-white rounded-lg max-sm:mb-2">
			<div className="flex justify-between">
				<div>
					<h2 className="font-bold text-base mb-1">Overview</h2>
					<h3 className="font-medium text-xs text-gray-400">
						Monthly Earning
					</h3>
				</div>
				<select
					name="timeframe"
					id="timeframe"
					className="px-3 text-xs h-9 text-gray-500 bg-slate-100 rounded-xl"
				>
					<option value="quaterly">Quaterly</option>
					<option value="annually">Annually</option>
				</select>
			</div>
			<div className="lg:h-[32vh] max-lg:h-[24vh]">
				<Bar data={props.data} options={props.option} />
			</div>
		</div>
	);
};

export default EarningChart;
