import profile from "../../assets/profile.png";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const User = () => {
	// eslint-disable-next-line
	const [user, setUser] = useState({
		img: profile,
		name: "Evano",
		role: "Product Manager",
	});
	return (
		<div className="sm:absolute sm:bottom-8 lg:w-[89%] p-2 rounded-md flex justify-between items-center text-gray-400 hover:bg-[#2D2D69] hover:cursor-pointer">
			<div className="flex gap-2 items-center	">
				<img
					src={user.img}
					className="rounded-full h-9 max-sm:h-6"
					alt="profile"
				/>
				<span className="max-lg:hidden">
					<h2 className="text-xs text-white mb-1">{user.name}</h2>
					<h4 className="text-[.65rem] font-semibold">{user.role}</h4>
				</span>
			</div>
			<MdKeyboardArrowDown className="text-2xl max-lg:hidden" />
		</div>
	);
};

export default User;
