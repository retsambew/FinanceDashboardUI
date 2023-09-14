import { BsEmojiDizzy } from "react-icons/bs";

const Page404 = () => {
	return (
		<div className="flex flex-col w-full h-screen items-center justify-center text-center">
			<h2 className="text-5xl flex items-center">
				ERR
				<BsEmojiDizzy className="text-4xl" />R 404!
			</h2>
			<p className="pt-4 text-xl text-gray-500">
				The page you're looking for either doesn't exist or is currently
				unavailable.
			</p>
		</div>
	);
};

export default Page404;
