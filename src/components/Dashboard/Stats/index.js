import StatCard from "./StatCard";
import { data } from "./data";
const Stats = () => {
	return (
		<div className="grid lg:grid-cols-4 grid-cols-2 gap-9 max-sm:gap-6 my-9 max-sm:my-6 justify-between items-center">
			{data.map((stat, index) => {
				return <StatCard {...stat} key={index} />;
			})}
		</div>
	);
};

export default Stats;
