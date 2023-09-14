import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MenuItem = (props) => {
	const route = useLocation();
	const inactive =
		"flex justify-between items-center py-3 px-4 my-2 max-sm:p-2 rounded-md text-[#8E92AF] hover:bg-[#2D2D69] hover:text-white transition-all";
	const active =
		"flex justify-between items-center py-3 px-4 my-2 max-sm:p-2 rounded-md bg-[#2D2D69] text-white transition-all";
	return (
		<>
			<Link to={props.link}>
				<div
					className={
						route.pathname === props.link ? active : inactive
					}
				>
					<p className="flex gap-3 items-center text-sm">
						{props.icon}
						<span className="max-lg:hidden">{props.name}</span>
					</p>
					{route.pathname === props.link ? null : (
						<MdKeyboardArrowRight className="text-xl max-lg:hidden" />
					)}
				</div>
			</Link>
		</>
	);
};

export default MenuItem;
