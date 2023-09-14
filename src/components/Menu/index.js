import {
	LuUserSquare,
	LuWallet,
	LuKeyRound,
	LuBadgePercent,
	LuHelpCircle,
} from "react-icons/lu";
import { TbCube, TbHexagonLetterD } from "react-icons/tb";
import MenuItem from "./MenuItem";
import User from "./User";

const Menu = () => {
	const menuitems = [
		{
			link: "/",
			name: "Dashboard",
			icon: <LuKeyRound className="text-xl" />,
		},
		{
			link: "/product",
			name: "Product",
			icon: <TbCube className="text-xl" />,
		},
		{
			link: "/customers",
			name: "Customers",
			icon: <LuUserSquare className="text-xl" />,
		},
		{
			link: "/income",
			name: "Income",
			icon: <LuWallet className="text-xl" />,
		},
		{
			link: "/promote",
			name: "Promote",
			icon: <LuBadgePercent className="text-xl" />,
		},
		{
			link: "/help",
			name: "Help",
			icon: <LuHelpCircle className="text-xl" />,
		},
	];
	return (
		<div className="lg:w-1/5 h-screen bg-[#040440] text-white p-4 fixed max-sm:flex max-sm:h-fit max-sm:justify-between max-sm:w-screen z-20">
			<h2 className="flex gap-2 items-center p-1 sm:mb-8 text-2xl font-normal">
				<TbHexagonLetterD className="lg:text-3xl text-4xl max-lg:m-auto max-sm:text-2xl" />{" "}
				<span className="max-lg:hidden"> Dashboard </span>
			</h2>

			{menuitems.map((item, index) => {
				return <MenuItem {...item} key={index} />;
			})}
			<User />
		</div>
	);
};

export default Menu;
