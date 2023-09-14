import { BiDollarCircle, BiWallet, BiShoppingBag } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const data = [
	{
		icon: (
			<div className="p-6 bg-[#deffee] rounded-full flex items-center justify-center max-sm:w-fit max-sm:m-auto">
				<BiDollarCircle className="text-5xl text-[#05a848] max-sm:text-3xl" />
			</div>
		),
		title: "Earning",
		val: "198",
		percent: "37.8",
		isProfit: true,
		date: "month",
	},
	{
		icon: (
			<div className="p-6 bg-[#E7DBFF] rounded-full flex items-center justify-center max-sm:w-fit max-sm:m-auto">
				<IoDocumentTextOutline className="text-5xl text-[#A305FF] max-sm:text-3xl" />
			</div>
		),
		title: "Orders",
		val: "2.4",
		percent: "2",
		isProfit: false,
		date: "month",
	},
	{
		icon: (
			<div className="p-6 bg-[#CBF2FF] rounded-full flex items-center justify-center max-sm:w-fit max-sm:m-auto">
				<BiWallet className="text-5xl text-[#0657BE] max-sm:text-3xl" />
			</div>
		),
		title: "Balance",
		val: "2.4",
		percent: "2",
		isProfit: false,
		date: "month",
	},
	{
		icon: (
			<div className="p-6 bg-[#FFB8DE] rounded-full flex items-center justify-center max-sm:w-fit max-sm:m-auto">
				<BiShoppingBag className="text-5xl text-[#D7020D] max-sm:text-3xl" />
			</div>
		),
		title: "Total Sales",
		val: "89",
		percent: "11",
		isProfit: true,
		date: "week",
	},
];
