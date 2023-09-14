import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StatCard = (props) => {
	return (
		<div className="flex gap-2 px-3 py-4 bg-white rounded-lg shadow-sm justify-around max-sm:flex-col max-sm:text-center">
			{props.icon}
			<div className="flex flex-col justify-center">
				<h4 className="text-gray-400 text-[0.65rem]">{props.title}</h4>
				<h3 className="text-[1.35rem] font-bold">${props.val}K</h3>
				<h4 className="text-[0.6rem] flex font-semibold flex-wrap max-sm:justify-center">
					<span
						className={
							props.isProfit
								? "text-green-600 flex items-center font-bold"
								: "text-red-500 flex items-center font-bold"
						}
					>
						{props.isProfit ? (
							<FaArrowUp className="text-[0.5rem]" />
						) : (
							<FaArrowDown className="text-[0.5rem]" />
						)}
						&nbsp;{props.percent}%
					</span>
					&nbsp;this {props.date}
				</h4>
			</div>
		</div>
	);
};

export default StatCard;
