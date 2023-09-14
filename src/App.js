import Page404 from "./components/404";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router";

function App() {
	return (
		<div className="w-screen flex">
			<Menu />
			<div className="lg:ml-[20%] lg:w-full ml-[10%] w-full max-sm:ml-0 max-sm:mt-20">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
