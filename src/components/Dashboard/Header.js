const Header = () => {
	return (
		<div className="flex justify-between items-center my-6">
			<h1 className="text-lg font-semibold">Hello Shahrukh👋🏼,</h1>
			<input
				type="text"
				placeholder="🔍Search"
				className="rounded p-2 text-xs w-1/5 shadow-md max-sm:w-2/6"
			/>
		</div>
	);
};

export default Header;
