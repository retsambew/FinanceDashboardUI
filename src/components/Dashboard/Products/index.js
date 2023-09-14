import img1 from "../../../assets/product1.jpg";
import img2 from "../../../assets/product2.jpg";
import ProductRow from "./ProductRow";
import "../helper.css";

const Products = () => {
	const data = [
		{
			img: img1,
			prodName: "Abstract 3D",
			prodDesc:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			stock: 32,
			price: 45.99,
			sales: 20,
		},
		{
			img: img2,
			prodName: "Sarphens Illustration",
			prodDesc:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			stock: 32,
			price: 45.99,
			sales: 20,
		},
	];
	return (
		<div className="my-9 max-sm:my-6 bg-white p-5 rounded-xl">
			<div className="flex justify-between">
				<h2 className="font-bold text-base">Product Sell</h2>
				<div>
					<input
						type="search"
						placeholder="Search"
						className="bg-slate-50 p-2 text-xs"
					/>
				</div>
			</div>
			<div className="grid gap-2 gap-y-4 mt-6 items-center productGrid">
				<h4 className="text-[#BABEC5] text-[.7rem] font-semibold">
					Product Name
				</h4>
				<h4 className="text-[#BABEC5] text-[.7rem] font-semibold text-center">
					Stock
				</h4>
				<h4 className="text-[#BABEC5] text-[.7rem] font-semibold text-center">
					Price
				</h4>
				<h4 className="text-[#BABEC5] text-[.7rem] font-semibold text-center">
					Total Sales
				</h4>
				<hr className="col-span-4" />
				{data.map((row, index) => {
					return <ProductRow {...row} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Products;
