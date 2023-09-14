import { Doughnut } from "react-chartjs-2";

const CustomerChart = (props) => {
	return (
		<div className=" bg-white p-4 rounded-lg lg:grid max-lg:flex max-lg:items-center justify-around">
			<div>
				<h2 className="font-bold text-base mb-1 max-lg:text-xl">
					Customers
				</h2>
				<h3 className="font-medium text-xs text-gray-400 max-lg:text-sm">
					Customers that buy products
				</h3>
			</div>
			<div className="lg:w-[15vw] max-lg:w-1/4 max-sm:h-[20vh] max-sm:w-auto justify-self-center self-center relative">
				<p className="w-3/5 text-center text-sm max-lg:text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<span className="text-2xl font-extrabold max-lg:text-xl">
						65%
					</span>
					<br />
					Total New Customers
				</p>
				<Doughnut data={props.data} />
			</div>
		</div>
	);
};

export default CustomerChart;
