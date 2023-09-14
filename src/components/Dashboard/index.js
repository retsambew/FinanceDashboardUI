import Charts from "./Charts";
import Header from "./Header";
import Products from "./Products";
import Stats from "./Stats";

const Dashboard = () => {
	return (
		<div className="px-12 max-sm:px-8">
			<Header />
			<Stats />
			<Charts />
			<Products />
		</div>
	);
};

export default Dashboard;
